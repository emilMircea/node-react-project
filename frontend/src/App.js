import React, { Component } from 'react'
import './App.css'

import axios from 'axios'
import endpoint from './EndPoint'
import Title from './Title'
import ReviewCard from './ReviewCard'

import Nav from './Nav'
import Wrapper from './Wrapper'
import SideBar from './SideBar'
import Content from './Content'

class App extends Component {
	state = {
		reviews: [],
		average: {},
		categoryName: '',
		filteredReviews: [],
		generalRatingsAverage: 0
	}

	componentWillMount() {
		this.fetchReviews()
		this.fetchGeneralRatingsAverage()
	}

	fetchGeneralRatingsAverage = () => {
		axios.get(endpoint.averages).then(response => {
			const resIntoArray = response.data
			this.setState({
				average: resIntoArray,
				generalRatingsAverage: resIntoArray.general
			})
		})
	}

	fetchReviews = () => {
		console.log('fetching reviews')
		axios
			.get(endpoint.allData)
			.then(response => {
				console.log(response)
				this.setState({
					reviews: [...response.data],
					ratingsTitles: [...response.data][0].ratings.aspects,
					filteredReviews: [...response.data]
				})
			})
			.catch(err => {
				console.log(err)
			})
	}

	handleChange = e => {
		const upcaseCat = e.target.value.toUpperCase()
		const allReviews = [...this.state.reviews]
		const filterByCategory = (cat, reviews) =>
			reviews.filter(i => i.traveledWith === cat)
		this.setState({
			filteredReviews: filterByCategory(upcaseCat, allReviews),
			categoryName: e.target.value
		})
	}

	sortByMostRecent = () => {
		const sortedReviews = this.state.reviews.sort(
			(prev, curr) => new Date(curr.entryDate) - new Date(prev.entryDate)
		)
		console.log(sortedReviews)
		this.setState({
			filteredReviews: sortedReviews
		})
	}

	render() {
		const { filteredReviews, generalRatingsAverage } = this.state

		return (
			<Wrapper className='wrapper'>
				<SideBar className="sidebar">
					<Nav average={this.state.average} reviews={this.state.reviews} />
				</SideBar>
				<Content className='content'>
					<Title>Tortuga Royale <span className="tag is-info title-tag">{generalRatingsAverage.toFixed(1)}</span></Title>
					<div className="select is-info">
						<select
							value={this.state.categoryName}
							onChange={this.handleChange}
						>
							<option value="all">Filter By All Reviews</option>
							<option value="family">Filter By Family</option>
							<option value="friends">Filter By Friends</option>
							<option value="couple">Filter By Couple</option>
							<option value="other">Filter By Other</option>
						</select>
					</div>

					<button onClick={this.sortByMostRecent} className="button is-primary sort-most-recent">
						Sort by most recent reviews
					</button>
					<div className="review-cards">
						{filteredReviews.map(review => (
							<ReviewCard key={review.id} review={review} />
						))}
					</div>
				</Content>
			</Wrapper>
		)
	}
}

export default App
