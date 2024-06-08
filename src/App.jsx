import Header from './components/Header/Header.jsx';
import Preview from './components/Preview/Preview.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
	return (
		<>
			<Header />
			<main>
				<div className='container'>
					<Preview />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
