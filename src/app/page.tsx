import {lineChart, stackBarChart} from "../../library/data";
import Image from "next/image";
import LineChartApp from "@/components/line-chart";
import StackBarChartApp from "@/components/stackbar-chart";

export default function Home() {
  return (
    <div className="font-sans p-5">
      <header className="mb-8">
           <div className="mb-8 flex flex-col items-center border-b border-gray-300">
               <h1 className="text-xl md:text-3xl font-bold text-gray-800 text-center leading-relaxed ">
                   ISP Research Network: Climate Crisis Findings
               </h1>
               <h3 className={"font-medium"}>Mar 2024 - Feb 2025</h3>
               <a className="text-xs md:text-sm text-center block mb-3 font-bold cursor-pointer text-white mt-4 p-2 bg-red-500 md:w-1/3 rounded-md hover:bg-red-600" href="#main">ISP Socioeconomic Studies</a>
           </div>
           <div>
               {/*<img src={'/hero.jpg'} height={"700px"} alt={"Cover Image"} />*/}
               <Image src={'/hero.jpg'} width={1000} height={700} alt={"Hero Image"} />
               {/*<div className={"hero"}>Interactive Survey Website</div>*/}
               <p className="text-xs"><i>Photo: AFP</i></p>
           </div>
       </header>
      <main id="main" className={"flex flex-col items-center"}>
        <section className={"lg:w-3/4"}>
            <LineChartApp payload={lineChart[0]}/>
            <StackBarChartApp payload={stackBarChart[0]}/>
            <StackBarChartApp payload={stackBarChart[1]}/>
        </section>
        <section className="lg:w-3/4">
            <div>
                <h1 className={"text-xl font-bold my-4"}>Survey Methodology</h1>
                <p className="text-gray-800 mb-4">
                    The Research Network program conducts monthly studies on Myanmar’s socioeconomic conditions and trends. The research covers 110 townships, representing one-third of the country’s 330 townships since May 2023 using the observatory method to conduct research and analysis on socioeconomic conditions in Myanmar.
                </p>
                <p className="text-gray-800 mb-4">
                    For the selection of townships, district townships were prioritized because SAC’s offices, such as the General Administrative Department, are typically located there. This allows for a more comprehensive assessment of service provision levels. Consequently, our study selected 75 district townships. The remaining 35 townships were selected based on population density and economic importance. The selected townships span all states and regions, including the Naypyitaw Union Territory.
                </p>
                <p className="text-gray-800 mb-4">
                    The research survey aimed to examine the trends in daily challenges and changes in socioeconomic conditions affecting the population, assess the adverse effects of drug abuse and gambling, and evaluate SAC’s governance effectiveness at the local level. To achieve these three goals, 92 questions were formulated. The questionnaire development and technical implementation were conducted in collaboration with the People’s Alliance on Credible Elections (PACE). Focus group discussions were also conducted regularly online during the data collection period. Data validation was conducted by analyzing and cross-checking between the monthly local field data and the contents recorded in focus group discussions. Data collection adhered strictly to the security protocol established by ISP-Myanmar, with respective team leaders ensuring the data collectors followed these guidelines meticulously.
                </p>
                <p className="text-gray-800 mb-4">
                    The collected data was securely stored in compliance with ISP-Myanmar’s data storage and security policies and procedures.
                </p>
            </div>
        </section>

        <section className="md:w-2/3">
            <div>
                <h1 className={"text-xl font-bold my-4 border-b border-gray-300"}>Related Materials</h1>
                <Image src={'/related-1.jpg'} width={500} height={100} alt={"Survey Report"} className={"mb-2"} />
                <Image src={'/30min.jpg'} width={500} height={100} alt={"30min with ISP"}/>
            </div>
        </section>
      </main>
      <footer className="flex flex-col items-center mt-5 text-sm">
        <div className="md:w-2/3">
            <Image src={'/contact.jpg'} width={500} height={100} alt={'contact'} className={"flex"}/>
            <p className={"mt-4 text-center border-y border-gray-300 p-3"}> &copy; ISP-Myanmar <b>Socioeconomic Studies</b> | <b>Research Network Program</b></p>
        </div>
      </footer>
    </div>
  );
}