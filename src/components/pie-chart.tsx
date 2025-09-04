'use client';
import {Cell, Legend, Pie, PieChart, ResponsiveContainer, Sector, SectorProps, Tooltip} from 'recharts';
import {Payload} from "../../library/data";
import {useState} from "react";

type Coordinate = {
    x: number;
    y: number;
};

type PieSectorData = {
    percent?: number;
    name?: string | number;
    midAngle?: number;
    middleRadius?: number;
    tooltipPosition?: Coordinate;
    value?: number;
    paddingAngle?: number;
    dataKey?: string;
    payload?: any;
};

type PieSectorDataItem = React.SVGProps<SVGPathElement> & Partial<SectorProps> & PieSectorData;

const renderActiveShape = ({
                               cx,
                               cy,
                               midAngle,
                               innerRadius,
                               outerRadius,
                               startAngle,
                               endAngle,
                               fill,
                               payload,
                               percent,
                               value,
                           }: PieSectorDataItem) => {
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * (midAngle ?? 1));
    const cos = Math.cos(-RADIAN * (midAngle ?? 1));
    const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
    const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
    const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
    const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} className={"text-sm"}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={(outerRadius ?? 0) + 6}
                outerRadius={(outerRadius ?? 0) + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" className={"text-sm md:text-base"}>{`${value} %`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" className={"text-xs"}>
                {/*{`(Rate ${((percent ?? 1) * 100).toFixed(2)}%)`}*/}
                {payload.name}
            </text>
        </g>
    );
};

export default function PieChartApp({payload}:{payload: Payload}) {
    // const [activeIndex, setActiveIndex] = useState(0);
    // const onPieEnter = (_:any, index:number) => {
    //     setActiveIndex(index);
    // };
    //
    // const onPieLeave = () => {
    //     setActiveIndex(-1);
    // };

    return (
        <div className={"mb-5"}>
            <div className="mb-4">
                <span className="font-semibold text-sm inline-block bg-amber-200 p-1 rounded-lg">{payload?.name}</span>
                <h3 className="font-semibold text-md md:text-lg text-gray-700 my-3">{payload?.title}</h3>
                <p>
                    {payload?.description}
                </p>
            </div>
            <div className="h-[350] p-3 border-y border-gray-300">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={500} height={500}>
                        <Pie
                            activeShape={renderActiveShape}
                            data={payload.data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            fill="#8884d8"
                            dataKey="value"
                            // onMouseEnter={onPieEnter}
                            // onMouseLeave={onPieLeave}
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
    );
}