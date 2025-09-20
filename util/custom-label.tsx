export const CustomLabel = (props: { x: number; y: number; value: number; width: number; height: number; layout: string; }) => {
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