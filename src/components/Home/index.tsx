import styles from "./Home.module.css"
import { Container } from "@mui/material";
import { Fade } from 'react-awesome-reveal';

export default function Home() {
    return (
        <Fade>
            <div className={`${styles.imageContainer}`}>
                <img src="/SLC_01.jpg" alt="spa bed" />
                <div className={`${styles.imgOverlay}`}>
                    <Container>
                        <img src="/white with line.png" alt="" />
                    </Container>
                </div>
            </div>
        </Fade>
    );
}