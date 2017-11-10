import React from 'react'
import AverageTitle from './AverageTitle'
import AverageResult from './AverageResult'
import ReviewsNumber from './ReviewsNumber'
import Rating from './Rating'

const Nav = ({average, reviews}) => (
	<nav className="navbar" role="navigation" aria-label="dropdown navigation">
			<div className="navbar-start is-flex">
						{Object.entries(average).map((key, val) => (
							<Rating className="tag is-info" key={Math.random()}>
								<AverageTitle className="average-title">{key[0]}</AverageTitle>
								<AverageResult className="average-result">
									{key[1] > 0 ? key[1].toFixed(1) : 0}
								</AverageResult>
							</Rating>
						))}
			</div>
	</nav>
)

export default Nav
