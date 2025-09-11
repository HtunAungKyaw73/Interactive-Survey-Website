import BarChartApp from "@/components/bar-chart";
import PieChartApp from "@/components/pie-chart";
import {data} from "../../library/data";
import Image from "next/image";
import ActivePie from "@/components/active-pie";

export default function Home() {
  return (
    <div className="font-sans p-8">
       <header className="mb-8">
           <div className="mb-8 flex flex-col items-center">
               <h1 className="text-xl md:text-2xl font-bold text-gray-800 text-center leading-relaxed ">This is a sample survey interactive web page <br/> using RechartsJS, NextJS and Tailwind CSS</h1>
               <a className="text-xs md:text-sm text-center block font-bold cursor-pointer text-white mt-4 p-2 bg-red-500 w-1/3 rounded-md hover:bg-red-600" href="#main">5 Key Findings</a>
           </div>
           <div>
               {/*<img src={'/hero.png'} alt={"Cover Image"} />*/}
               <div className={"hero"}>Interactive Survey Website</div>
               <p><i>Photo: Somewhere</i></p>
           </div>
       </header>
      <main id="main" className={"flex flex-col items-center"}>
        <div className={"md:w-3/4 lg:w-2/4"}>
            <PieChartApp payload={data[3]}/>
            <PieChartApp payload={data[2]}/>
            <BarChartApp payload={data[0]}/>
            <PieChartApp payload={data[4]}/>
            <BarChartApp payload={data[1]}/>
        </div>
      </main>
      <footer className="flex justify-center mt-5 text-sm">
        <p>This web page is my sample work for my current organisation | Interactive Survey Result with <b>RechartJS</b></p>
      </footer>
    </div>
  );
}
