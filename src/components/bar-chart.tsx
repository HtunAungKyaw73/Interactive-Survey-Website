'use client';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    LabelList,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {useState} from "react";

const getIntroOfPage = (label:string) => {
    if (label === 'Page A') {
        return "Page A is about men's clothing";
    }
    if (label === 'Page B') {
        return "Page B is about women's dress";
    }
    if (label === 'Page C') {
        return "Page C is about women's bag";
    }
    if (label === 'Page D') {
        return 'Page D is about household goods';
    }
    if (label === 'Page E') {
        return 'Page E is about food';
    }
    if (label === 'Page F') {
        return 'Page F is about baby food';
    }
    return '';
};

const CustomLabel = (props: { x: number; y: number; value: number; width: number; height: number; layout: string; }) => {
    const { x, y, width, height, value, layout } = props;
    const radius = 10;

    if (layout === 'vertical') {
        return (
            <text
                x={x + width + 5} // Adjust x to be inside and near the right edge
                y={y + height / 2} // Center vertically
                fill="#000"
                textAnchor="start" // start for outside, end for inside
                dominantBaseline="middle" // Vertically center the text
                className={"text-xs"}
            >
                {value + "%"}
            </text>
        );
    } else {
        return (
            <text
                x={x + width / 2}
                y={y - radius}
                fill="#000"
                textAnchor="middle"
                dominantBaseline="middle"
                className={"text-xs"}
            >
                {value + "%"}
            </text>
        );
    }
};
const CustomTooltip = ({ active, payload, label }: {active: boolean, payload: any, label: string}) => {
    const isVisible = active && payload && payload.length;
    // console.log(isVisible, payload, label);
    return (
        <div className="custom-tooltip" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
            {isVisible && (
                <>
                    <p className="label bg-gray-100 p-3 text-sm opacity-95">{`${payload[0].payload.name} : `}{<span className={"font-bold"}>{payload[0].value}%</span>}</p>
                    {/*<p className="intro">{getIntroOfPage(label)}</p>*/}
                    {/*<p className="desc">Anything you want can be displayed here.</p>*/}
                </>
            )}
        </div>
    );
};

export default function BarChartApp({payload}:{payload: any}) {
    // const [activeIndex, setActiveIndex] = useState(0);
    //
    // const handleClick = (index:any) => {
    //     setActiveIndex(index);
    // };

    return (
        <div className="mb-5">
            <div className="mb-4">
                <span className="font-semibold text-sm inline-block bg-amber-200 p-1 rounded-lg">{payload?.name}</span>
                <h3 className="font-semibold text-md md:text-lg text-gray-700 my-3">{payload?.title}</h3>
                <p>
                    {payload?.description}
                </p>
            </div>
            <div className="h-[350] p-3 border-y border-gray-300">
                <ResponsiveContainer width="100%" height="100%">
                    {/*@ts-ignore*/}
                    <BarChart layout={payload?.layout} data={payload?.data} >
                        <CartesianGrid strokeDasharray="3 3" />
                        {/*axisLine={false} tickLine={false} tick={false}*/}
                        {payload?.layout == "horizontal"? null : <XAxis type="number"  hide/>}
                        {payload?.layout == "vertical"? <YAxis type="category" hide /> : null}
                        {/*@ts-ignore*/}
                        <Tooltip content={CustomTooltip} />
                        {/*<Legend />*/}
                        {/*<Bar dataKey={"value"} fill="#8884d8" />*/}
                        {/*@ts-ignore*/}
                        {/*label={payload?.layout == "vertical"? null : <CustomLabel/>}*/}
                        {/*{position={payload?.layout == "vertical"? "right" : "top"}}*/}
                        <Bar dataKey="value" fill="#8884d8" barSize={50} >
                            {/*@ts-ignore*/}
                            {<LabelList dataKey="value" content={<CustomLabel layout={payload?.layout}/>} />}
                            {
                                payload?.data?.map((entry: any, index: number) => (
                                    <Cell key={`cell-${index}`} cursor="pointer" fill={entry.color} />
                                ))
                            }
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}