import Navbar from "./components/navbar/home";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center md:px-32">
        <div className="flex w-full md:px-8 md:pt-40 pt-32">
          <div className="md:w-2/3 px-8 flex flex-col gap-y-4  justify-center">
            <h3 className="md:text-[36px] text-[32px] font-bold">Financial guidance to your benefits and your goals</h3>
            <p className="md:text-[18px] text-[14px]">Explore the future of gold investment with our cutting-edge prediction tools. Our platform leverages advanced algorithms to forecast gold price trends, helping you make informed decisions when investing in gold. Whether you are a seasoned investor or just starting out, our insights can guide you towards maximizing your returns and managing market risks effectively. Trust us to empower your investment journey with reliable and timely gold market analysis.</p>
            <div>
              <Link href={'/main/dashboard'}>
                <button className="border border-black rounded-3xl px-6 py-3 hover:bg-black/80 hover:text-white text-sm duration-200">Learn more</button>
              </Link>
            </div>
          </div>
          <div className="w-1/2 hidden md:flex justify-center">
            <div style={{ backgroundImage: "url('/illust.png')" }}
              className="bg-cover h-[350px] w-[350px] ">
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
