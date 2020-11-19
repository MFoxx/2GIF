// Imports
import { useEffect, useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core';
import Error from './Error'
// create ffmpeg instance
const ffmpeg = createFFmpeg();

// Component
function Video() {
    // State hooks
	const [ ready, setReady ] = useState(false); // Loading state of ffmpeg, defaultly set to false
    const [video, setVideo ] = useState(); // Uploaded video will be stored in video state hook
    const [gif, setGif] = useState(); // Output gif will be stored in gif state hook
    const [gifLoading, setGifLoading] = useState(false); // State that indicates when video is converted into gif
    const [duration, setDuration] = useState(); // Video metadata used for duration
    const [ error, setError ] = useState();

    // Function that loads ffmpeg
	const load = async () => {
		await ffmpeg.load();
		setReady(true); // Change state to loaded
	};

    // Hook, that runs load funcion of ffmpeg once component is first mounted
	useEffect(() => {
		load();
    }, []);
    
    const errorSetter = () => {
        setError();
    }


    // Function that handels conversion of mp4 video into GIFs
    const convertToGif = async () => {
        setError();
        // Check if video is uploaded
        if(video ) {
            // Check if video is in correct format
            if (video.type === 'video/mp4'){
            // Set loading state
            setGifLoading(true);
                        
            // Puts video from video into ffmpeg memory
            ffmpeg.FS('writeFile', 'video.mp4', await fetchFile(video));
            // Set gif for loading
            
            // Runs ffmpeg bash command that converts mp4 into gif
            await ffmpeg.run('-i', 'video.mp4', '-t', duration.toString(), '-f', 'gif', 'output.gif');
    
            // Writes outputed gif into ffmpeg memory
            const data = ffmpeg.FS('readFile', 'output.gif');
    
            // Creates usable URL of outputed gif, that can be used to download, and source the output
            const url = URL.createObjectURL(new Blob([data.buffer], {type: 'image/gif'}))
            // Sets GIF to be usable url
            setGif(url);
            setGifLoading(false)
            }else {
                setError('This format is not supported!');
            }
        } else {
            setError('Please upload a video!');
        }
    }

	return ready ? (
    <div className='container'>
        {/* Erorr message */}
        {error && (<Error message={error} setError={errorSetter}/>)}
        {/* Displays video only when its uploaded */}
        {video && <video controls width='250' className='video' src={URL.createObjectURL(video)} onLoadedMetadata={e => setDuration(e.target.duration)}></video>}
        {/* Input for video */}
        <div className="controls">
            <label className='upload'>
                <input type="file" accept="video/*" onChange={(e) => {setVideo(e.target.files?.item(0)); setError();}}/>
                <Button color='primary' variant='text' component="span">Upload file </Button>
            </label>
            <Button onClick={convertToGif} size='large' color='primary' variant="contained" className='convert' disabled={gifLoading} >Convert</Button>
        </div>
        {gifLoading && (
            <CircularProgress className='loading-gif'/>
        )}
        {/* Displays outputed gif only when its generated */}        
        {gif && (
            <div class='controls'>
            <a href={gif} download='your-gif.gif' className='link-nodisplay'>
                <img width='250' src={gif} alt='Generated gif'/>
            </a>
            <a href={gif} download='your-gif.gif' className='link-nodisplay'>
                <Button variant='text' color='primary' component='span' className='btn-download'>Download</Button>
            </a>
            </div>
        )}

    </div>
    ) : <CircularProgress className='center'/>;
}

export default Video;
