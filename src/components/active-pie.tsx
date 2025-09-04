'use client'
import {Cell, Legend, Pie, PieChart, ResponsiveContainer, Sector} from "recharts";
import {Payload} from "../../library/data";
import {useState} from "react";

const renderActiveShape = (props: { cx: any; cy: any; innerRadius: any; outerRadius: any; startAngle: any; endAngle: any; fill: any; }) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

    return (
        <g>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius - 10} // Makes the active slice larger or smaller
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
        </g>
    );
};
export default function ActivePie({payload}:{payload: Payload}) {
    return (
        <div className={"mb-5"}>
            <div className="mb-4">
                <span className="font-semibold text-sm inline-block bg-amber-200 p-1 rounded-lg">Active Pie</span>
                <h3 className="font-semibold text-md md:text-lg text-gray-700 my-3">{payload?.title}</h3>
                <p>
                    {payload?.description}
                </p>
            </div>
            <div className="h-[350] p-3 border-y border-gray-300">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={500} height={500}>
                        <Pie
                            data={payload.data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            fill="#8884d8"
                            dataKey="value"
                            // @ts-ignore
                            activeShape={renderActiveShape}
                        >
                            {payload?.data?.map((entry, index) => (
                               <Cell key={`cell-${index}`} cursor="pointer" fill={entry.color}/>
                            ))}
                        </Pie>
                        {/*<Tooltip/>*/}
                        <Legend wrapperStyle={{ fontSize: '14px' }} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}