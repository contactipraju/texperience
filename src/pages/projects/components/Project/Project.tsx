import './Project.scss';

const Project = (props: any) => {
	return (
		<div className='project' key={props.project.id}>
			<div className='details'>
				<div className='heading'>
					<div className='name'>
						<span className='name-link tooltip' title='View the Code'>{props.project['name']}</span>
					</div>
				</div>

				<div className='description'>{props.project.description}</div>

				{props.project['technologies'] && props.project['technologies'].length > 0 &&
					<div className='technologies'>
						{props.project['technologies']!.map((technology: string) => (
							<span className='topic' key={technology.toString()}>{technology}</span>
						))}
					</div>
				}

				{props.project['links'] && props.project['links'].length > 0 &&
					<div className='links'>
						{props.project['links']!.map((link: string) => (
							<span className='link' key={link.toString()}>{link}</span>
						))}
					</div>
				}

				{props.project['videos'] && props.project['videos'].length > 0 &&
					<div className='videos'>
						{props.project['videos']!.map((video: string) => (
							<span className='video' key={video.toString()}>{video}</span>
						))}
					</div>
				}

				<div className='assets'>
					<div className='image' style={{ backgroundImage: `url(${'/images/webshots/' + props.project['name'] + '.png'})` }}> </div>
				</div>
			</div>
		</div>
	)
}

export default Project;
