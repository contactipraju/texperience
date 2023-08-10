import './Summary.scss';

const Summary = (props: any) => {
	const intro: any[] = [
		{
			title: 'An Engineer with',
			points: [
				{ text: 'Expert-level understanding of the fundamentals of Javascript and TypeScript'},
				{ text: 'Thorough knowledge and expertise on Frontend best practices and Design patterns'},
				{ text: 'Strong passion towards Usability, User experience, Human-centered designs'}
			]
		},
		{
			title: 'Experience includes',
			points: [
				{ text: 'Working for MNCs / Product Companies (Microsoft, Specialized, Morningstar etc)'},
				{ text: 'Working in Startups (Divami, eureQa, Ahoy Club, Todays Plan etc), often closely with Co-founders'},
				{ text: 'Working in Multidisciplinary and Cross-functional teams, with Clients, Product Managers, Designers, Backend Developers, all from different geographies'},
				{ text: '8 years in Developing applications on all major Mobile Development Platforms including PalmOS, PocketPCs, Embedded Linux phones, Windows Mobile etc'}
			]
		},
		{
			title: 'Technical Skills',
			points: [
				{ heading: 'Web Technologies', text: '14 years of Developing Highly-interactive Single Page Apps'},
				{ heading: 'Modern JS frameworks', text: '8+ years experience with Angular versions 1.x thru 16, React, etc'},
				{ heading: 'Backend', text: 'Primarily in NodeJS (Javascript in the Backend), Next.js, Nuxt.js, Express.js etc'},
				{ heading: 'Mobile', text: 'Native, PWAs, Hybrid Apps (Webviews) and Frameworks (OnSenUI, React Native etc)'},
				{ heading: 'APIs', text: 'Soap, REST, GraphQL with XML and JSON'},
				{ heading: 'DevOps best practices', text: 'CI/CD Automation, Test Automation and Continuous Deployment'},
				{ heading: 'Frontend dev tools', text: ' Node, NPM, Yarn, Webpack, Babel, Grunt, Gulp, Git etc'},
				{ heading: 'Code optimization tools', text: 'SonarCloud, BugSnag, Google Analytics etc'},
				{ heading: 'Software development processes', text: 'TDD, BDD, Agile, Kanban Methodologies'},
				{ heading: 'Designing', text: 'Interaction Designs, Style-guides and Design Systems'},
				{ heading: 'CSS', text: 'Responsive Web Designs, UI Libraries, CSS Preprocessors'}
			]
		}
	];

	return (
		<div id='summary'>
			<p className='c11'>
				<span>A Frontend-specialist with extensive experience in all aspects of Design and Development of Web, Mobile and Hybrid applications using Modern Javascript Frameworks and Libraries.</span>
			</p>

			{intro.length > 0 ? intro.map((section) => (
				<div className='section' key={section['title']}>
					<div className='title'>{section['title']}</div>
					{section['points'].length > 0 && <div className='points'>
						<ul>
							{section['points'].map((point: any) => (
								<li className='point' key={point['text']}>
									{point['heading'] ? <span className='heading'>{point['heading']}: </span> : ''}
									{point['text']}
								</li>
							))}
						</ul>
					</div>}
				</div>
			)) : <div>{'No portfolio available'}</div> }

			{/* <p className="c3">
				<span className="c1"><b>Meetups I participate in: </b></span>
				<span className="c0">ng-sydney, react-sydney, SydJS, SydCSS</span>
			</p> */}

			{/* <p className="c3">
				<span className="c1"><b>On weekends: </b></span>
				<span className="c0">
					As a science communicator, I talk about all things science, primarily through web-radios (over 250 hourly-episodes and going), discussing topics like: Science, History, Rationalism, Myth-busting, Fighting Misinformation,
					Interviewing Astrophysicists from around the world, Conversations with Scientists, Doctors, Lawyers, Humanists and subject matter experts on Democracy, Human Rights, Free-thinking etc.
				</span>
			</p> */}
		</div>
	)
}

export default Summary;
