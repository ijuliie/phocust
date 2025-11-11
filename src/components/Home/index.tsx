import styles from "./Home.module.css"
import Image from "next/image";
import { Container } from "@mui/material";
import { Fade } from 'react-awesome-reveal';

export default function Home() {
    return (
        <Fade>
            <div className={`${styles.imageContainer}`}>
                <Image height={600} width={600} src="/SLC_01.jpg" alt="image of phocust" />
                <div className={`${styles.imgOverlay}`}>
                    <Container>
                        <img src="/white with line.png" alt="" />
                    </Container>
                </div>
            </div>
        </Fade>
    );
}