import { useState, useEffect } from "react";

import { IPortfolioData } from "./Portfolio.interfaces";
import { getPortfolioLocal } from "../../Portfolio.service";

import './Portfolio.scss';

const Portfolio = (props: any) => {
	const [portfolio, setPortfolio] = useState([]);

	useEffect(() => {
		getPortfolioLocal().then((resp) => {
			console.log('Portfolios Loaded: ', resp);
			setPortfolio(resp.data);
		});
	}, []);

	return (
		<div id="portfolios">
				{portfolio!.length > 0 ? portfolio!.map((portfolio: IPortfolioData) => (
					<div className="portfolio" key={portfolio.id}>
						<div className="details">
							<div className="name">{portfolio.name}</div>
							<div className="description">{portfolio.description}</div>
						</div>
					</div>
				)) : <div>{"No portfolio available"}</div> }
		</div>
	)
}

export default Portfolio;
