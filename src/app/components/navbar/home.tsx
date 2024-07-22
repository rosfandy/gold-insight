import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex w-full justify-between items-center py-4 md:px-32 px-4 shadow fixed bg-white">
            <div className="md:text-xl">Gold Insight</div>
            <Link href={'/main/dashboard'}>
                <button className="bg-[#c3ab5c] md:px-6 px-3 py-3 rounded-3xl text-white text-xs hover:bg-[#897841] duration-200">Dashboard</button>
            </Link>
        </div>
    );
}
