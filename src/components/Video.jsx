import { useEffect, useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Input } from '@material-ui/core';

const ffmpeg = createFFmpeg({ log: true });

function Video() {
	const [ ready, setReady ] = useState(false);
    const [video, setVideo ] = useState();
    const [gif, setGif] = useState();

	const load = async () => {
		await ffmpeg.load();
		setReady(true);
	};

	useEffect(() => {
		load();
	}, []);

    const convertToGif = async () => {
        ffmpeg.FS('writeFile', 'video.mp4', await fetchFile(video));

        await ffmpeg.run('-i', 'video.mp4', '-t', '2.5', '-ss', '2.0', '-f', 'gif', 'output.gif');

        const data = ffmpeg.FS('readFile', 'output.gif');

        const url = URL.createObjectURL(new Blob([data.buffer], {type: 'image/gif'}))
        setGif(url);
    }

	return ready ? (
    <div>
        {video && <video controls width='250' src={URL.createObjectURL(video)}></video>}
        <input type="file" onChange={(e) => setVideo(e.target.files?.item(0))} />
        <button onClick={convertToGif}>Convert</button>
        {gif && <img width='250' src={gif} alt='Generated gif'/>}
    </div>
    ) : <CircularProgress />;
}

export default Video;
