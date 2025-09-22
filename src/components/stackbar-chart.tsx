'use client'
import {StackBarData} from "../../library/data";
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import useIsMobile from "../../util/useIsMobile";

const CustomTooltip = ({ active, payload }: {active: boolean, payload: any}) => {
    const isVisible = active && payload && payload.length;
    const hoveredSegment = payload[0];
    return (
        <div className="custom-tooltip" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
            {isVisible && (
                <div className="label bg-gray-100 p-3 text-sm opacity-95">
                    <p className="font-bold mb-2">{`${payload[0].payload.name}`}</p>
                    {/*{payload.map((pld:any, index:number) => (*/}
                    {/*    <p className={" mb-1"} key={index} >*/}
                    {/*        {`${pld.name}:`} {<span style={{ color: pld.color, fontWeight: "bold" }}>{pld.value}</span>}*/}
                    {/*    </p>*/}
                    {/*))}*/}
                    {/*<p style={{ color: hoveredSegment.color }}>*/}
                    {/*    {`${hoveredSegment.name}: ${hoveredSegment.value}`}*/}
                    {/*</p>*/}
                    <p className={" mb-1"} >
                        {`${hoveredSegment.name}:`} {<span style={{ color: hoveredSegment.color, fontWeight: "bold" }}>{hoveredSegment.value}</span>}
                    </p>
                    <p className={"mt-2 text-xs font-bold"}>
                        <svg width="20" height="20" style={{ cursor: "pointer",display: "inline-block" }}>
                            <rect x="3" y="3" width="10" height="10" fill="red">
                            </rect>
                        </svg> Townships
                    </p>
                </div>
            )}
        </div>
    );
};

export default function StackBarChartApp({payload}: {payload: StackBarData}) {
    const isMobile = useIsMobile();
    return (
        <div className="mb-5">
            <div className="mb-4">
                <span className="font-semibold text-sm inline-block bg-amber-200 p-1 rounded-lg">{payload?.name}</span>
                <h3 className="font-semibold text-md md:text-lg text-gray-700 my-3">{payload?.title}</h3>
                <p>
                    {payload?.description}
                </p>
            </div>
            <div className="h-[550] py-3 border-y border-gray-300">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        //@typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        layout={payload?.layout}
                        width={500}
                        height={450}
                        data={payload?.data}
                        margin={{
                            top: 25,
                            right: 10,
                            left: 10,
                            bottom: 25,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        {/*@typescript-eslint/ban-ts-comment*/}
                        {payload?.layout == "horizontal"? (!isMobile && <XAxis dataKey="name" className={"text-xs font-bold"} />) : <XAxis type="number" hide/>}
                        {payload?.layout == "vertical"? <YAxis type="category" hide/> : <YAxis type="number" hide/>}
                        {/*@typescript-eslint/ban-ts-comment*/ /*@ts-ignore*/}
                        <Tooltip content={<CustomTooltip/>} shared={false} />
                        <Bar dataKey="Mar" fill={"#5e92cd"} stackId="1" cursor="pointer" barSize={70}></Bar>
                        <Bar dataKey="Apr" fill={"#a3caed"} stackId="1" cursor="pointer" barSize={70}></Bar>
                        <Bar dataKey="May" fill={"#7ab399"} stackId="1" cursor="pointer" barSize={70}></Bar>
                        <Bar dataKey="Jun" fill={"#b5c4a6"} stackId="1" cursor="pointer" barSize={70}></Bar>
                        <Bar dataKey="Jul" fill={"#eeb990"} stackId="1" cursor="pointer" barSize={70}></Bar>
                        <Bar dataKey="Aug" fill={"#ee8774"} stackId="1" cursor="pointer" barSize={70}></Bar>
                        <Bar dataKey="Sep" fill={"#dd83af"} stackId="1" cursor="pointer" barSize={70}></Bar>
                        <Bar dataKey="Oct" fill={"#9e93c6"} stackId="1" cursor="pointer" barSize={70}></Bar>
                        <Bar dataKey="Nov" fill={"#cbbba0"} stackId="1" cursor="pointer" barSize={70}></Bar>
                        <Bar dataKey="Dec" fill={"#7b6a58"} stackId="1" cursor="pointer" barSize={70}></Bar>
                        <Bar dataKey="Jan" fill={"#3295A5"} stackId="1" cursor="pointer" barSize={70}></Bar>
                        <Bar dataKey="Feb" fill={"#3295A5"} stackId="1" cursor="pointer" barSize={70}></Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}