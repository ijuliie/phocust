import { useEffect, useState } from "react";
import { Fade } from 'react-awesome-reveal';
import { Box, Button, Container, Typography } from "@mui/material";
import styles from "./Tour.module.css"

interface Tour {
    artist: {
        image_url: string;
        name: string;
        thumb_url: string;
        url: string;
    }
    artist_id: number;
    datetime: string;
    description: string;
    lineup: string[];
    offers: {
        status: string;
        type: string;
    }
    title: string;
    url: string;
    venue: {
        city: string;
        country: string;
        latitude: string;
        longitude: string;
        location: string;
        name: string;
        postal_code: string;
        region: string;
        street_address: string;
    }
}

export default function Tour() {
    const [tourList, setTourList] = useState<Tour[]>([])

    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = async () => {
        const response = await fetch('/api/events', { method: 'GET' });
        const data = await response.json();

        setTourList(data)
    }

    const formatDateTime = (dateString: string) => {
        const options = { dateStyle: 'medium', timeStyle: 'short' } as const;

        const date = new Date(dateString);
        return date.toLocaleString('en-US', options);
    }

    return (
        <Container sx={{ maxWidth: { md: 900 } }}>
            <Fade>
                <Typography textAlign={{ sm: "center" }} variant="h5">Tour</Typography>
                <Box mt={3}>
                    {tourList.map((t) => {
                        return (
                            <Box className={styles.tourWrapper}>
                                <Box>
                                    <Typography fontWeight={700}>{formatDateTime(t.datetime)}</Typography>
                                    <Typography>{t.venue.location}</Typography>
                                </Box>
                                <Box>
                                    <Button
                                        href={t.url}
                                        target="_blank"
                                        variant="outlined"
                                    >
                                        Tickets
                                    </Button>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
            </Fade>
        </Container>
    );
}