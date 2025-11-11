import { useEffect } from "react";
import Nav from "../Nav";
import styles from "./Home.module.css"
import { Container } from "@mui/material";

export default function Home() {
    return (
        <div className={`${styles.imageContainer}`}>
            <img src="/SLC_01.jpg" alt="spa bed" />
            <div className={`${styles.imgOverlay}`}>
                <Container>
                    <img src="/white with line.png" alt="" />
                </Container>
            </div>
        </div>
    );
}