import axios from 'axios';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    if (req.method !== "POST")
        return new Response(null, { status: 404, statusText: "Not Found" });
    try {
        const json = await req.json();
        console.log(json)
        const res = await predict(json.month, json.year)
        console.log(res)
        return new Response(JSON.stringify(res), { status: 200 });
    } catch (e) {
        console.log(e);
        return new Response(null, { status: 400, statusText: "Bad Request" });
    }
}

const predict = async (month: number, year: number) => {
    try {
        const response = await axios.post(`${process.env.FLASK_APP_HOST}/predict`, {
            month,
            year
        });
        return response.data
    } catch (err) {
        return err
    }
}