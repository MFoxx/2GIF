// Imports
import { useEffect, useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import CircularProgress from '@material-ui/core/CircularProgress';

// create ffmpeg instance
const ffmpeg = createFFmpeg({ log: true });

// Component
function Video() {
    // State hooks
	const [ ready, setReady ] = useState(false); // Loading state of ffmpeg, defaultly set to false
    const [video, setVideo ] = useState(); // Uploaded video will be stored in video state hook
    const [gif, setGif] = useState(); // Output gif will be stored in gif state hook

    // Function that loads ffmpeg
	const load = async () => {
		await ffmpeg.load();
		setReady(true); // Change state to loaded
	};

    // Hook, that runs load funcion of ffmpeg once component is first mounted
	useEffect(() => {
		load();
	}, []);

    // Function that handels conversion of mp4 video into GIFs
    const convertToGif = async () => {
        // Check if video is uploaded and if it is in correct format
        if(video && video.type === 'videp/mp4') {
            // Puts video from video into ffmpeg memory
            ffmpeg.FS('writeFile', 'video.mp4', await fetchFile(video));
            
            // Runs ffmpeg bash command that converts mp4 into gif
            await ffmpeg.run('-i', 'video.mp4', '-t', '2.5', '-ss', '2.0', '-f', 'gif', 'output.gif');
    
            // Writes outputed gif into ffmpeg memory
            const data = ffmpeg.FS('readFile', 'output.gif');
    
            // Creates usable URL of outputed gif, that can be used to download, and source the output
            const url = URL.createObjectURL(new Blob([data.buffer], {type: 'image/gif'}))
            // Sets GIF to be usable url
            setGif(url);
        } else {
            // TODO: Create error message and display it
            console.log('No video uploaded or wrong format.');
        }
    }

	return ready ? (
    <div>
        {/* Displays video only when its uploaded */}
        {video && <video controls width='250' src={URL.createObjectURL(video)}></video>}
        {/* Input for video */}
        <input type="file" onChange={(e) => setVideo(e.target.files?.item(0))} />
        <button onClick={convertToGif}>Convert</button>
        {/* Displays outputed gif only when its generated */}
        {gif && <img width='250' src={gif} alt='Generated gif'/>}
    </div>
    ) : <CircularProgress />;
}

export default Video;
