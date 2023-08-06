import './Downloads.scss';

import { LogEvent } from '../../../../core/firebase/firestore.service';

const Downloads = (props: any) => {
	const data = [
		{
			title: 'Resume',
			links: [
				{title: 'PDF', url: '/files/Prasada-Indukuri-SrFrontendEng-Resume.pdf'},
				{title: 'DOCX', url: '/files/Prasada-Indukuri-SrFrontendEng-Resume.docx'}
			]
		},
		{
			title: 'Cover letter',
			links: [
				{title: 'PDF', url: '/files/Prasada-Indukuri-Sr-Frontend-Eng-Cover-Letter.pdf'},
				{title: 'DOCX', url: '/files/Prasada-Indukuri-Sr-Frontend-Eng-Cover-Letter.docx'}
			]
		}
	];

	const download = (e:any) => {
		LogEvent(e.target.href, 'resume_downloads');
	}

	return (
		<div id='downloads'>
			{data.length > 0 ? data.map((section) => (
				<div className='download' key={section['title']}>
					<span className='title'>{section['title']}:</span>

					{section['links'].length > 0 ? section['links'].map((link) => (
						<a key={link['url']} onClick={download} className='link' title='Click to download' href={link['url']} download>{link['title']}</a>
					)): ''}
				</div>
			)) : ''}
		</div>
	)
}

export default Downloads;
