import React from 'react'
import ReviewsWrapper from './ReviewsWrapper'
import ReviewThumb from './ReviewThumb'
import moment from 'moment'

const ReviewCard = ({ review }) => (
	<div className='review-card'>
		<ReviewsWrapper className="columns review-wrapper">
			<ReviewThumb>👦🏻</ReviewThumb>
			<div className="column is-2 has-text-centered">
				<p>{review.user}</p>
				<small className='has-text-grey'>{moment(review.entryDate).fromNow()}</small>
			</div>
			<div className="column is-8">
				<p className='is-size-5'>Title: {Object.values(review.titles)}</p>
				<p>Review: {Object.values(review.texts)}</p>
			</div>
		</ReviewsWrapper>
	</div>
)

export default ReviewCard
