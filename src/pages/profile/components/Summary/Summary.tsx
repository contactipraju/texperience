import './Summary.scss';

const Summary = (props: any) => {
	const intro: any[] = [
		{
			title: 'An Engineer with',
			points: [
				{ text: 'Expert-level understanding of the fundamentals of Web applications development'},
				{ text: 'Thorough knowledge and expertise on Frontend best practices and Design patterns'},
				{ text: 'Demonstrable experience developing Highly-interactive Single Page Apps uisng Modern JS Frameworks'},
				{ text: 'Strong passion towards Usability, User experience, Human-centered designs'},
				{ text: 'Strong sense of ownership & mentorship. An active Javascript community participant'}
			]
		},
		{
			title: 'Technical Skills',
			points: [
				{ heading: 'Frontend', text: 'AngularJS (versions 1.x), Angular (2 to 16), NgRx, RxJS, React/Redux, VueJS etc'},
				{ heading: 'Web', text: 'HTML5, CSS3, LESS, SASS, SCSS, Bootstrap, Tailwind, REST, GraphQL etc'},
				{ heading: 'Backend', text: 'Primarily in NodeJS, Next.js, Express.js etc'},
				{ heading: 'CSS', text: 'Responsive Web Designs, UI Libraries and all major CSS Preprocessors'},
				{ heading: 'Mobile', text: 'Native, PWAs, Hybrid Apps and other frameworks (OnSenUI, React Native etc)'},
				{ heading: 'Charting', text: 'Highcharts, Google Charts, FusionCharts, KendoUI, d3.js, ApexCharts etc'},
				{ heading: 'Other', text: 'C, C++, Embedded VC++, Win32 SDK, SQL etc'}
			]
		},
		{
			title: 'Development Tools & Processes',
			points: [
				{ heading: 'Software development processes', text: 'TDD, Agile, Kanban Methodologies'},
				{ heading: 'Designing', text: 'Wire-framing, UI Architecture, Interaction Designs, Style-guides and Design Systems'},
				{ heading: 'Frontend dev tools', text: 'Node, NPM, Yarn, Webpack, Babel, Grunt, Gulp, Git etc'},
				{ heading: 'DevOps (CI/CD)', text: 'Test Automation, Build Automation & Deployment, Code optimization and Analytics'}
			]
		},
		{
			title: 'Experience working in',
			points: [
				{ text: 'MNCs / Product Companies (Microsoft, Specialized, Morningstar etc)'},
				{ text: 'Startups (Divami, eureQa, Ahoy Club, Todays Plan etc), often closely with Co-founders'},
				{ text: 'Multidisciplinary teams involving Clients, Product Managers, Designers, Backend Developers, QA teams'},
				{ text: 'All major Mobile Platforms including PalmOS, PocketPCs, Embedded Linux phones, Windows Mobile etc'}
			]
		}
	];

	return (
		<div id='summary'>
			<p className='c11'>
				<span>A Frontend-specialist with extensive experience in all aspects of Design and Development of Web, Mobile and Hybrid applications with impeccable attention to details.</span>
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
				<span className="c1"><b>What to say Hello! see me at: </b></span>
				<span className="c0">SydJS-Classic, SydCSS, react-sydney, vue-sydney, fullstackerssyd, ng-sydney etc</span>
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
