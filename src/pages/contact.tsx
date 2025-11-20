import { Fade } from 'react-awesome-reveal';
import { Box, Container, Typography } from "@mui/material";
import styles from "./Contact.module.css"


export default function Contact() {
    return (
        <div className={styles.backgroundImage}>
            <Container>
                <Fade>
                    <Box className={styles.box}>
                        <div>
                            <Typography variant="h5" fontWeight={900}>BOOKINGS:</Typography>
                            <Typography variant="h6" fontWeight={500}>iamphocust@gmail.com</Typography>
                        </div>
                    </Box>
                </Fade>
            </Container>
        </div>
    );
}