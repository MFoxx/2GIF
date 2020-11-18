import { pink } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: pink[500]
		},
		secondary: {
			main: '#212121'
		}
	}
});

export default theme;
