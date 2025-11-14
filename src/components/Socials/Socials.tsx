import Link from 'next/link';
import { Box } from '@mui/material';
import { X } from '@mui/icons-material';

export default function Socials() {
    const socialLinks = [
        {
            social: "Instagram",
            icon: <i className="fab fa-instagram" />,
            link: "https://www.instagram.com/iamphocust"
        },
        {
            social: "TikTok",
            icon: <i className="fab fa-tiktok" />,
            link: "https://www.tiktok.com/@iamphocust"
        },
        {
            social: "Spotify",
            icon: <i className="fab fa-spotify" />,
            link: "https://spoti.fi/3S40vrX"
        },
        {
            social: "Soundcloud",
            icon: <i className="fab fa-soundcloud" />,
            link: "https://www.soundcloud.com/iamphocust"
        },
        {
            social: "Facebook",
            icon: <i className="fab fa-facebook" />,
            link: "https://www.facebook.com/iamphocust"
        },
        {
            social: "X",
            icon: <X fontSize="inherit" sx={{marginTop: 0.5}} />,
            link: "https://www.x.com/iamphocust"
        },
        {
            social: "Youtube",
            icon: <i className="fab fa-youtube" />,
            link: "https://bit.ly/PhocustYT"
        },
    ]

    return (
        <>
            {socialLinks.map((s, index) => {
                return (
                    <Box
                        sx={{
                            marginRight: index < socialLinks.length - 1 ? 1.5 : 0,
                            fontSize: { xs: "20px", md: "22px" },
                            transition: "transform 0.2s ease",
                            "&:hover": {
                              transform: "scale(1.2)",
                            },
                            cursor: "pointer",
                        }} 
                        key={s.social}
                        >
                        <Link target="_blank" href={s.link}>{s.icon}</Link>
                    </Box>
                )
            })}
        </>
    );
}