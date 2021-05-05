import './Quote.css';

const Quote = (props) => {
	return (
		<div>
			<p id="text">{props.quote}</p>
       		<p id="author">- {props.author}</p>
		</div>
	);
}


export default Quote;