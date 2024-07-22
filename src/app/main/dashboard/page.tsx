"use client";
import Graph from "../../components/chart/graph";

export default function Dashboard() {
    return (
        <div className="">
            <div className="flex flex-col md:px-32 px-8 gap-y-4">
                <h1 className="md:text-2xl font-[500]">Gold Price</h1>
                <div className="md:px-0">
                    <Graph />
                </div>
            </div>
        </div>
    );
}
