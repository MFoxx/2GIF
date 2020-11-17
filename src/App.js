import './app.css';
import Video from './components/Video';

function App() {

	return (
		<div className="App">
			<div className="top-menu">
				<h1 className="title">2GIF</h1>
			</div>
      <p className="description">Upload your video, and quicky transform it into GIF</p>
      <Video />
		</div>
	);
}

export default App;
