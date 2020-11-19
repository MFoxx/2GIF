import './app.css';
import Video from './components/Video';
import Menu from './components/Menu';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Menu />
			<Video />
			<Info />
			<Footer />
		</div>
	);
}

export default App;
