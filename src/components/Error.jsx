// Component that displayes erorr message

import { Box, Card, CardHeader, Container, Typography, Button } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { pink } from '@material-ui/core/colors';

function Error(props) {
	return (
		<Box m={5}>
			<Container maxWidth="md">
				<Card style={{ backgroundColor: pink[500] }}>
					<CardHeader
						title={props.message} // Error message passed through props from parent
						action={<Button startIcon={<ClearIcon />} onClick={props.setError} />} // Close button witch function that closes the error
					/>
				</Card>
			</Container>
		</Box>
	);
}

export default Error;
