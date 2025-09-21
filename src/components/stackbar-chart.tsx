'use client'
import {StackBarData} from "../../library/data";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Label,
    LabelList, Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const renderCustomizedLabel = (props: any) => {
    // console.log("Props",props);
    const { x, y, width, height, value } = props;
    const labelX = x + width / 2;
    const labelY = y + height / 2;

    return (
        <text x={labelX} y={labelY} fill="#fff" textAnchor="middle" dominantBaseline="middle" className={"text-xs"}>
            {value}
        </text>
    );
};

const CustomTooltip = ({ active, payload, label }: {active: boolean, payload: any, label: string}) => {
    const isVisible = active && payload && payload.length;
    const hoveredSegment = payload[0];
    // console.log(isVisible, payload, label);
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
    return (
        <div className="mb-5">
            <div className="mb-4">
                <span className="font-semibold text-sm inline-block bg-amber-200 p-1 rounded-lg">{payload?.name}</span>
                <h3 className="font-semibold text-md md:text-lg text-gray-700 my-3">{payload?.title}</h3>
                <p>
                    {payload?.description}
                </p>
            </div>
            <div className="h-[450] py-3 border-y border-gray-300">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        //@ts-ignore
                        layout={payload?.layout}
                        width={500}
                        height={450}
                        data={payload?.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 30,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        {payload?.layout == "horizontal"? null : <XAxis type="number"  hide/>}
                        {payload?.layout == "vertical"? <YAxis type="category" hide /> : null}
                        {/*@ts-ignore*/}
                        <Tooltip content={<CustomTooltip/>} shared={false}/>
                        <Bar dataKey="Mar" fill={"#5e92cd"} stackId="1" cursor="pointer" barSize={40}></Bar>
                        <Bar dataKey="Apr" fill={"#a3caed"} stackId="1" cursor="pointer" barSize={40}></Bar>
                        <Bar dataKey="May" fill={"#7ab399"} stackId="1" cursor="pointer" barSize={40}></Bar>
                        <Bar dataKey="Jun" fill={"#b5c4a6"} stackId="1" cursor="pointer" barSize={40}></Bar>
                        <Bar dataKey="Jul" fill={"#eeb990"} stackId="1" cursor="pointer" barSize={40}></Bar>
                        <Bar dataKey="Aug" fill={"#ee8774"} stackId="1" cursor="pointer" barSize={40}></Bar>
                        <Bar dataKey="Sep" fill={"#dd83af"} stackId="1" cursor="pointer" barSize={40}></Bar>
                        <Bar dataKey="Oct" fill={"#9e93c6"} stackId="1" cursor="pointer" barSize={40}></Bar>
                        <Bar dataKey="Nov" fill={"#cbbba0"} stackId="1" cursor="pointer" barSize={40}></Bar>
                        <Bar dataKey="Dec" fill={"#7b6a58"} stackId="1" cursor="pointer" barSize={40}></Bar>
                        <Bar dataKey="Jan" fill={"#3295A5"} stackId="1" cursor="pointer" barSize={40}></Bar>
                        <Bar dataKey="Feb" fill={"#3295A5"} stackId="1" cursor="pointer" barSize={40}></Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}