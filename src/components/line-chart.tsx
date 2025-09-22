'use client';
import {LineChartData} from "../../library/data";
import {CartesianGrid, Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {CustomTooltip} from "../../util/custom-tooltip";
import useIsMobile from "../../util/useIsMobile";

export default function LineChartApp({payload}:{payload: LineChartData})
{
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
                    <LineChart
                        width={500}
                        height={300}
                        data={payload?.data}
                        margin={
                            {
                                top: 20, right: 0, left: 0, bottom: 20
                            }
                        }
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" className={"text-xs"} padding={{ left: 30, right: 30 }}/>
                        {/*<YAxis className={isMobile ? "text-xs hidden" : 'text-xs'}>*/}
                        {/*    <Label angle={-90} value={"Townships"} position="insideLeft" style={{ textAnchor: 'middle', fontWeight: 'bold' }} />*/}
                        {/*</YAxis>*/}
                        {!isMobile && (
                            <YAxis className={"text-xs"}>
                                <Label angle={-90} value={"Townships"} position="insideLeft" style={{ textAnchor: 'middle', fontWeight: 'bold' }} />
                            </YAxis>
                        )}
                        { /* @typescript-eslint/ban-ts-comment */ }
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