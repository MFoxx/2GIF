// Component with description and tutorial of how to use the application

import { Box, Card, CardContent, Container, Typography } from '@material-ui/core';

function Info() {
	return (
		<Box m={4}>
			<Container maxWidth="sm">
				<Card color="secondary" raised>
					<CardContent>
						<Typography color="primary" variant="h5" align="center">
							Convert your vidoes into GIFs. Fast and for free.
						</Typography>{' '}
						<br />
						<Typography align="center">
							Click on{' '}
							<Typography color="primary" display="inline">
								UPLOAD FILE
							</Typography>{' '}
							and upload your video file. After it is uploaded, click on{' '}
							<Typography color="primary" display="inline">
								CONVERT
							</Typography>{' '}
							button and wait until it's converted. Then you can{' '}
							<Typography color="primary" display="inline">
								download it.
							</Typography>
						</Typography>
						<br />
						<Typography variant="h6" align="center">
							Supported formats:{' '}
							<Typography color="primary" display="inline" variant="h6">
								MP4
							</Typography>
						</Typography>{' '}
						<br />
					</CardContent>
				</Card>
			</Container>
		</Box>
	);
}

export default Info;
