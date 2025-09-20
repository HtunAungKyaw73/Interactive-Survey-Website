export const CustomTooltip = ({ active, payload, label }: {active: boolean, payload: any, label: string}) => {
    const isVisible = active && payload && payload.length;
    // console.log("Payload", payload);
    return (
        <div className="custom-tooltip" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
            {isVisible && (
                <div className="label bg-gray-100 p-3 text-sm opacity-95">
                    <p className={"mb-2 font-bold"}>{`${label}`}</p>
                    {payload.map((pld:any, index:number) => (
                        <p className={" mb-1"} key={index} >
                            {`${pld.name}:`} {<span style={{ color: pld.color, fontWeight: "bold" }}>{pld.value}</span>}
                        </p>
                    ))}
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