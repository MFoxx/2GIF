import { Box, Card, CardContent, CardHeader, Container, Typography, Button } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { pink } from '@material-ui/core/colors';

function Error(props) {
	return (
		<Box m={5}>
			<Container maxWidth="md">
				<Card style={{ backgroundColor: pink[500] }}>
					<CardHeader
						title={props.message}
						action={<Button startIcon={<ClearIcon />} onClick={props.setError} />}
					/>
				</Card>
			</Container>
		</Box>
	);
}

export default Error;
