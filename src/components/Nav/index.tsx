import { Container } from "@mui/material";
import styles from "./Nav.module.css"

export default function Nav() {
    return (
        <Container>
            <div className={`${styles.nav}`}>
                <div>
                    <a href="/music">
                        Music
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://phocust.bassthreadsmerch.com/shop/">
                        Merch
                    </a>
                </div>
                <div>
                    <a href="">
                        Patreon
                    </a>
                </div>
            </div>
        </Container>
    );
}