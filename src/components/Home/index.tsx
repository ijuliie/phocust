import { Container } from "@mui/material";
import { Fade } from 'react-awesome-reveal';
import styles from "./Home.module.css"

export default function Home() {
    return (
        <Fade>
            <div className={`${styles.imageContainer}`}>
                <img src="/SLC_02.jpg" alt="image of phocust" />
                <div className={`${styles.imgOverlay}`}>
                    <Container>
                        <img src="/white with line.png" alt="" />
                    </Container>
                </div>
            </div>
        </Fade>
    );
}