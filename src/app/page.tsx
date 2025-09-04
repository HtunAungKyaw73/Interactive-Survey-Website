import BarChartApp from "@/components/bar-chart";
import PieChartApp from "@/components/pie-chart";
import {data} from "../../library/data";
import Image from "next/image";
import ActivePie from "@/components/active-pie";

export default function Home() {
  return (
    <div className="font-sans justify-items-center p-8">
       <header className="mb-8 justify-items-center">
           <div className="mb-8 justify-items-center">
               <h1 className="text-xl md:text-2xl font-bold text-gray-800 text-center leading-relaxed ">Myanmar’s Key Stakeholders and their Perceptions <br/> of Sino-Myanmar Relations – A Survey (2024)</h1>
               <a className="text-xs md:text-sm text-center block font-bold cursor-pointer text-white mt-4 p-2 bg-red-500 w-1/3 rounded-md hover:bg-red-600" href="#main">5 Key Findings</a>
           </div>
           <div>
               <img src={'/hero.png'} alt={"Cover Image"} />
               <p><i>Photo: AFP</i></p>
           </div>
       </header>
      <main id="main" className={"md:w-3/4 lg:w-2/4"}>
        <div>
            <PieChartApp payload={data[3]}/>
            <PieChartApp payload={data[2]}/>
            <BarChartApp payload={data[0]}/>
            <PieChartApp payload={data[4]}/>
            <BarChartApp payload={data[1]}/>
        </div>
      </main>
      <footer className="justify-center mt-5 text-sm">
        <p>China Survey 2024 | ISP-Myanmar</p>
      </footer>
    </div>
  );
}
