import { useState, useEffect } from "react";

import { IPortfolioData } from "../../Portfolio.interfaces";
import { getActiveReposFromGitHub } from "../../Portfolio.service";

import './Portfolio.scss';

const Portfolio = (props: any) => {
	const [portfolios, setPortfolios] = useState([]);

	useEffect(() => {
		getActiveReposFromGitHub().then((resp) => {
			console.log('Portfolios Loaded: ', resp);
			setPortfolios(resp);
		});
	}, []);

	return (
		<div id="portfolios">
				{portfolios!.length > 0 ? portfolios!.map((portfolio: IPortfolioData) => (
					<div className="portfolio" key={portfolio.id}>
						<div className="details">
							<div className="heading">
								<div className="name">
									<a className="name-link tooltip" title="View the Code" target="_blank" rel="noreferrer" href={portfolio['html_url']}>{portfolio['name']}</a>
								</div>
								<div className="links">
									<span className="demo"><a target="_blank" rel="noreferrer" href={portfolio['homepage']}>Demo</a></span>
								</div>
							</div>

							<div className="description">{portfolio.description}</div>
							{portfolio['topics']!.length > 0 && <div className="topics">
								{portfolio['topics']!.map((topic: string) => (
									<span className="topic" key={topic.toString()}>{topic}</span>
								))}
							</div>}

							{/* <div className="assets">
								<div className="image">
									{portfolio['homepage'] && <img alt="website screenshot" src={"//image.thum.io/get/" + portfolio['homepage']} />}
								</div>
							</div> */}
						</div>
					</div>
				)) : <div>{"No portfolio available"}</div> }
		</div>
	)
}

export default Portfolio;
