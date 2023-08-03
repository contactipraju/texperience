import './Portfolio.scss';

import { IPortfolioData } from '../../Portfolio.interfaces';

const Portfolio = (props: any) => {
	return (
		<div id='portfolios'>
				{props.portfolios!.length > 0 ? props.portfolios!.map((portfolio: IPortfolioData) => (
					<div className='portfolio' key={portfolio.id}>
						<div className='details'>
							<div className='heading'>
								<div className='name'>
									<a className='name-link tooltip' title='View the Code' target='_blank' rel='noreferrer' href={portfolio['html_url']}>{portfolio['name']}</a>
								</div>
								{portfolio['homepage'] && <div className='links'>
									<span className='demo'><a target='_blank' rel='noreferrer' href={portfolio['homepage']}>Demo</a></span>
								</div>}
							</div>

							<div className='description'>{portfolio.description}</div>
							{portfolio['topics']!.length > 0 && <div className='topics'>
								{portfolio['topics']!.map((topic: string) => (
									<span className='topic' key={topic.toString()}>{topic}</span>
								))}
							</div>}

							{/* <div className='assets'>
								<div className='image'>
									{portfolio['homepage'] && <img alt='website screenshot' src={'//image.thum.io/get/' + portfolio['homepage']} />}
								</div>
							</div> */}
						</div>
					</div>
				)) : <div>{'No portfolio available'}</div> }
		</div>
	)
}

export default Portfolio;
