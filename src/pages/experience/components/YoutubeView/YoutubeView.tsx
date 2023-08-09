import './YoutubeView.scss';

const YoutubeEmbed = (props: any) => {
	let src = 'https://www.youtube.com/embed/' + props.embedId;

	return (
		<div className="video-responsive">
			<iframe
				width="100%"
				height="100%"
				src={src}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title="Embedded youtube"
			/>
	  </div>
	)
}

export default YoutubeEmbed;