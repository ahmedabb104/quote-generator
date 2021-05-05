import './Quote.css';

const Quote = (props) => {
	return (
		<div id="flex-quote">
			<i className="fa fa-quote-left"></i>
			<p id="text" key={ props.quote } className={props.className}> {props.quote}</p>
       		<p id="author" key={ props.author } className={props.className}>- {props.author}</p>
		</div>
	);
}


export default Quote;