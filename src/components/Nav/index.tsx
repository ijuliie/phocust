import { Container } from "@mui/material";
import Link from "next/link";
import styles from "./Nav.module.css"

export default function Nav() {
    return (
        <Container>
            <div className={`${styles.nav}`}>
                <div>
                    <Link href="/music">
                        Music
                    </Link>
                </div>
                <div>
                    <Link target="_blank" href="https://phocust.bassthreadsmerch.com/shop/">
                        Merch
                    </Link>
                </div>
                <div>
                    <Link href="">
                        Patreon
                    </Link>
                </div>
            </div>
        </Container>
    );
}