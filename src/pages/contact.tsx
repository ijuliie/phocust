import { Fade } from 'react-awesome-reveal';
import { Box, Container, Typography } from "@mui/material";
import styles from "./Contact.module.css"


export default function Contact() {
    return (
        <Fade>
            <div className={`${styles.imageContainer}`}>
                <img src="/Beyond_Pre.jpg" alt="image of phocust" />
                <div className={`${styles.textOverlay}`}>
                    <div>
                        <Typography variant="subtitle1" fontWeight={900}>BOOKINGS:</Typography>
                        <Typography variant="subtitle2" fontWeight={500}>iamphocust@gmail.com</Typography>
                    </div>
                </div>
            </div>
        </Fade>
    );
}