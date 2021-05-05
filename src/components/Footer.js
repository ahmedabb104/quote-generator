import './Footer.css';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div id="footer-container">
			<footer>Copyright &copy; { year } Ahmed Abbas All Rights Reserved</footer>
		</div>
	)
}

export default Footer;