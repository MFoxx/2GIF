import { Container, Typography, Box } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

function Footer () {
    return  (
        <Container fullWidth align='center' className='footer' >
            <Box p={2}>
                <Box p={2}>
                    <Typography>Created by Michal Gally</Typography>
                </Box>
                <a href='https://www.instagram.com/michalgally/' target='_blank' className='footer-link'>        
                    <InstagramIcon fontSize="large"/>
                </a>
                <a href='https://www.linkedin.com/in/michal-gally-88900b166/' target='_blank' className='footer-link'>        
                    <LinkedInIcon fontSize="large" />
                </a>
                <a href='https://www.twitter.com/themichalgally/' target='_blank' className='footer-link'>        
                    <TwitterIcon fontSize="large" />
                </a>
                <a href='https://www.github.com/mfoxx/' target='_blank' className='footer-link'>        
                    <GitHubIcon fontSize="large" />
                </a>
                <a href='https://www.ggstudio.digital/en' target='_blank' className='footer-link'>        
                    <LanguageIcon fontSize="large"/>
                </a>
            </Box>
        </Container>
    )
}

export default Footer;