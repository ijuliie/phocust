import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        const response = await fetch(`https://rest.bandsintown.com/artists/phocust/events?app_id=e526eaabb01bffac5f7e8236bf8cc585`, { method: "GET" })

        const data = await response.json()


        res.status(200).json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}