import {Fragment} from "react";
import {StackBarData} from "../library/data";

export const WrappedLabel = ({ x, y, payload } : {x:number, y:number, payload: StackBarData}) => {
    const value = payload.value;
    const words = value.split(' ');

    return (
        <g transform={`translate(${x},${y})`}>
            <foreignObject x={-50} y={10} width={100} height={40}>
                <div
                    style={{
                        textAlign: 'center',
                        wordWrap: 'break-word'
                    }}
                >
                    {words.map((word: string, index: number) => (
                        <Fragment key={index}>
                            {word}
                            {index <= words.length - 1 && ' '}
                        </Fragment>
                    ))}
                    {/*{value}*/}
                </div>
            </foreignObject>
        </g>
    );
};