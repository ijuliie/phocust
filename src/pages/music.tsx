import { useEffect, useState } from "react";
import { Card, Container, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from "@mui/material";
import { Fade } from 'react-awesome-reveal';

import styles from "./Music.module.css"

interface Music {
    c: {
        v: string
    }[]
}

export default function Music() {
    const [musicList, setMusicList] = useState<Music[]>([])

    useEffect(() => {
        const url = `https://docs.google.com/spreadsheets/d/1IUcXNu4ipt38ayWmiHm9N0L-OgFyrTy5-g6_qwBAIa8/gviz/tq?tqx=out:json&sheet=Sheet1&headers=1`
        fetch(url).then((res) => {
            return res.text()
        }).then((data) => {
            const jsonStart = data.indexOf('{');
            const jsonEnd = data.lastIndexOf('}');
            const jsonData = JSON.parse(data.substring(jsonStart, jsonEnd + 1));
            setMusicList(jsonData.table.rows)
        })

    }, [])

    const getOptimizedDropboxImage = (dropboxUrl: string) => {
        if (!dropboxUrl) return "/placeholder.jpg";
        
        const direct = dropboxUrl.replace("www.dropbox.com", "dl.dropboxusercontent.com").replace("?dl=0", "").replace("?dl=1", "");
       
        // Step 2: Add free CDN (images.weserv.nl) for resize + WebP + compression
        return `https://images.weserv.nl/?url=${encodeURIComponent(direct)}&w=400&h=400&fit=cover&output=webp&q=75`;
    };
    
    return (
        <div className={styles.backgroundImage}>
            <Container>
                <Fade>
                    <Grid justifyContent={"center"} container>
                        {musicList.map((m) => {
                            return (
                                m.c?.[1]?.v &&
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <a target="_blank" href={m.c?.[2]?.v}>
                                        <div className={styles.imageWrapper}>
                                            {/* Background Image (dims on hover) */}
                                            <div
                                                className={styles.imageBg}
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
                                                        (getOptimizedDropboxImage(m.c?.[1]?.v) || "") +
                                                        ")",
                                                }}
                                            />

                                            {/* Content (always full opacity) */}
                                            <div className={styles.content}>
                                                {m.c?.[0]?.v || 'Unknown Track'}
                                            </div>
                                        </div>
                                    </a>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Fade>
            </Container>
        </div>
    );
}