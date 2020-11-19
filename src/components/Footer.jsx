import { Container } from "@material-ui/core";

import InstagramIcon from '@material-ui/icons/Instagram';

function Footer () {
    return  (
        <Container fullWidth align='center' className='footer'>
            <a href='https://www.instagram.com/michalgally/' target='_blank' className='footer-link'>        
                <InstagramIcon />
            </a>
        </Container>
    )
}

export default Footer;