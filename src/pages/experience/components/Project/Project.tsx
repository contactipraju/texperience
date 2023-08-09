import './Project.scss';
import YoutubeEmbed from '../YoutubeView/YoutubeView';
import ImageStepper from '../ImageStepper/ImageStepper';

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

				{props.project['links'] && props.project['links'].length > 0 &&
					<div className='links'>
						{props.project['links']!.map((link: any) => (
							<a className='link' key={link.label.toString()} target='_blank' rel='noreferrer' href={link['url']}>Website</a>
						))}
					</div>
				}
			</div>

			<div className='assets'>
				{props.project['videos'] && props.project['videos'].length > 0 &&
					<div className='videos'>
						{props.project['videos']!.map((video: string) => (
							<YoutubeEmbed embedId={video} key={video.toString()} />
						))}
					</div>
				}
				{props.project['images'] && props.project['images'].length > 0 &&
					<ImageStepper images={props.project['images']}/>
				}
			</div>
		</div>
	)
}

export default Project;
