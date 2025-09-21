'use client';
import {LineChartData} from "../../library/data";
import {CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {CustomTooltip} from "../../util/custom-tooltip";

export default function LineChartApp({payload}:{payload: LineChartData})
{
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
                    <LineChart
                        width={500}
                        height={300}
                        data={payload?.data}
                        margin={
                            {
                                top: 20, right: 30, left: 0, bottom: 20
                            }
                        }
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" className={"text-xs"} padding={{ left: 30, right: 30 }}/>
                        <YAxis className={"text-xs"}>
                            <Label angle={-90} value={"Townships"} className={"hidden md:block"} position="insideLeft" style={{ textAnchor: 'middle', fontWeight: 'bold' }} />
                        </YAxis>
                        { /* @ts-ignore */ }
                        <Tooltip content={<CustomTooltip/>}/>
                        <Line type="monotone" dataKey="Drought" stroke="#3295A5" strokeWidth={1.5} activeDot={{ r: 5 }}/>
                        <Line type="monotone" dataKey="Water Scarcity" stroke="#C3B69B" strokeWidth={1.5} activeDot={{ r: 5 }}/>
                        <Line type="monotone" dataKey="Heavy Rainfall" stroke="#8884d8" strokeWidth={1.5} activeDot={{ r: 5 }} />
                        <Line type="monotone" dataKey="Flood" stroke="#DC5848" strokeWidth={1.5} activeDot={{ r: 5 }} />
                        <Line type="monotone" dataKey="Extreme Heat" stroke="#F58735" strokeWidth={1.5} activeDot={{ r: 5 }}/>
                        <Line type="monotone" dataKey="Extreme Cold" stroke="#A1BB79" strokeWidth={1.5} activeDot={{ r: 5 }}/>
                        <Line type="monotone" dataKey="Earthquake" stroke="#FBB458" strokeWidth={1.5} activeDot={{ r: 5 }} />
                        <Line type="monotone" dataKey="Heavy Winds" stroke="#61C0A6" strokeWidth={1.5} activeDot={{ r: 5 }} />
                        <Line type="monotone" dataKey="Land Erosion" stroke="#C1856D" strokeWidth={1.5} activeDot={{ r: 5 }}/>
                        <Line type="monotone" dataKey="Severe Pollution" stroke="#5682B1" strokeWidth={1.5} activeDot={{ r: 5 }}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}