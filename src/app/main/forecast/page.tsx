"use client"
import axios from "axios";
import { useState, useEffect } from "react";

export default function Forecast() {
    const [date, setDate] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingText, setLoadingText] = useState("Predicting");

    const submitData = async (e: any) => {
        e.preventDefault();

        const formattedDate = new Date(date).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        });

        setLoading(true);
        setLoadingText("predicting");

        try {
            const response = await axios.post(`${process.env.REACT_APP_HOST}/api/gold/predict`, {
                datetime: formattedDate
            });
            setData(response.data)
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        let intervalId: any;

        if (loading) {
            intervalId = setInterval(() => {
                setLoadingText(prev => {
                    // Check if the text reaches "Predicting..." (12 characters including 3 dots)
                    if (prev.length > 12) return "Predicting";
                    return prev + ".";
                });
            }, 500); // Adjust the timing as necessary
        }

        return () => clearInterval(intervalId);  // Clean up the interval on unmount
    }, [loading]);

    return (
        <div className="">
            <div className="flex flex-col md:px-32 px-8 gap-y-4">
                <h1 className="md:text-2xl font-[500]">Forecast</h1>
                <div className="bg-white shadow-md rounded-md p-4">
                    <div className="flex justify-center">
                        <h1>Masukkan tanggal prediksi harga emas</h1>
                    </div>
                    <div className="px-8 py-4 flex justify-center">
                        <form className="flex md:gap-x-2 md:gap-y-0 gap-y-2 md:flex-row flex-col" onSubmit={submitData}>
                            <input className="border px-4 rounded" type="date" name="datetime"
                                value={date}
                                onChange={e => setDate(e.target.value)} />
                            <button type="submit" className="bg-[#c3ab5c] md:px-6 px-2 py-2 rounded text-white text-xs hover:bg-[#897841] duration-200">Predict</button>
                        </form>
                    </div>
                    {loading && (
                        <div className="flex justify-center">{loadingText}</div>
                    )}
                    {data && (
                        <div className="flex justify-center gap-x-4">
                            <div className="">USD {data['result']}</div>
                            <div className="">{`(${data['exec_time']} s)`}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
