import { useParams } from "react-router-dom";

const OnPage = () => {
	const { person } = useParams();
	console.log(person);

	return (
		<div id='on-page'>
			<div className='content'>
			</div>
		</div>
	)
}

export default OnPage;
