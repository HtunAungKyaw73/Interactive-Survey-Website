export type Data = {
    name: string;
    value: number;
    pv: number;
    amt: number;
    color: string;
};
export type Payload = {
    id: number;
    // type: string; // for chart type
    layout: string;
    name: string;
    title: string;
    description: string;
    data: Data[];
}

export const data: Payload[] = [
    {
        id: 1,
        layout: "horizontal",
        name: "Key Finding-3",
        title: "China’s efforts in Myanmar’s crisis seen as protection of its strategic interests",
        description: "A\tmajority\tof\trespondents—63\tpercent— believed that China’s increased involvement in Myanmar’s crisis stems primarily\tfrom\tthe\tattacks\ton,\tand\tseizure\tof,\tits\tstrategic\tprojects.\tMilitary\tgains by the Three Brotherhood Alliance (3BHA)\twere\talso\tcited\tby\t58\tpercent\tof\trespondents as a key factor. Meanwhile, 37\tpercent\tattributed\tChina’s\tgrowing\tattention\tto\tthe\trising\tunity\tamong\tMyanmar’s opposition forces.",
        data: [
            {
                name: "China's strategic projects being attacked and seized",
                value: 63,
                pv: 2400,
                amt: 2400,
                color: "#3295A5",
            },
            {
                name: '3BHA has seen successful military outcomes',
                value: 58,
                pv: 1398,
                amt: 2210,
                color: "#F58735",
            },
            {
                name: 'Opposition groups are now more unified',
                value: 37,
                pv: 9800,
                amt: 2290,
                color: "#61C0A6",
            },
            {
                name: 'Ethnic armed groups are no longer interested in Hong Kong-Model regional-based conflict resolution dialogues',
                value: 33,
                pv: 3908,
                amt: 2000,
                color: "#A1BB79",
            },
            {
                name: 'The safety of Chinese nationals in Myanmar being compromised',
                value: 31,
                pv: 4800,
                amt: 2181,
                color: "#C3B69B",
            },
            {
                name: 'The SAC holds a rigid and uncompromising stance',
                value: 27,
                pv: 3800,
                amt: 2500,
                color: "#DC5848",
            },
            {
                name: 'The National Unity Government (NUG) holds a relatively conciliatory stance toward China.',
                value: 9,
                pv: 4300,
                amt: 2100,
                color: "#FBB458",
            },
        ]
    },
    {
        id: 2,
        layout: "vertical",
        name: "Key Finding-5",
        title: "Chinese firms’ consultations on project continuations",
        description: "Half\tof\trespondents\t(50\tpercent)\twho\twere contacted by Chinese companies involved in the China-Myanmar Economic Corridor\t(CMEC)\tsaid\tthe\tmain\treason\tthey were contacted was to request cooperation\tto\tcontinue\tproject\timplementation. Many also reported being warned against disrupting China’s initiatives.",
        data: [
            {
                name: "To cooperate in the continuation of ongoing projects",
                value: 50,
                pv: 2400,
                amt: 2400,
                color: "#3295A5",
            },
            {
                name: 'Other reasons',
                value: 30,
                pv: 3908,
                amt: 2000,
                color: "#A1BB79",
            },
            {
                name: 'To warn stakeholders not to disrupt or harm CMEC projects',
                value: 25,
                pv: 1398,
                amt: 2210,
                color: "#F58735",
            },
            {
                name: 'To offer new trade or investment opportunities',
                value: 20,
                pv: 9800,
                amt: 2290,
                color: "#61C0A6",
            },
        ]
    },
    {
        id: 3,
        layout: "",
        name: "Key Finding-2",
        title: "China's Democracy Model unfit for Myanmar",
        description: "When asked whether a model of democracy with Chinese characteristics was suitable for Myanmar, 90 percent of respondents said it was not, while seven percent supported the idea. The group disfavoring the Chinese model has grown by three percentage points since the 2022 and 2023 surveys. Support, meanwhile, has declined—by one point compared to 2022 and two points compared to 2023.",
        data: [
            {
                name: "Agree",
                value: 7,
                pv: 2400,
                amt: 2400,
                color: "#3295A5",
            },
            {
                name: 'Disagree',
                value: 90,
                pv: 3908,
                amt: 2000,
                color: "#F58735",
            },
            {
                name: 'Do not know',
                value: 1,
                pv: 1398,
                amt: 2210,
                color: "#A1BB79",
            },
            {
                name: 'Refuse to answer ',
                value: 2,
                pv: 9800,
                amt: 2290,
                color: "#61C0A6",
            },
        ]
    },
    {
        id: 4,
        layout: "",
        name: "Key Finding-1",
        title: "Elections considered unlikely to resolve Myanmar’s conflict in the long run",
        description: "A\tstrong\tmajority\tof\trespondents—81\tpercent—viewed the State Administration\tCouncil’s\t(SAC)\tproposed elections, as encouraged by China as a path toward political settlement,\tas\tunlikely\tto\thelp\tresolve\tMyanmar’s\tconflicts\tin\tthe\tlong\trun.\tThis\treflects\tan\teight\tpercentage point rise from last year, when 73 percent held a similar perspective. Only 16 percent believe the election could pave a constructive path.",
        data: [
            {
                name: "Not helpful at all",
                value: 47,
                pv: 2400,
                amt: 2400,
                color: "#ff4a4a",
            },
            {
                name: 'Not helpful',
                value: 34,
                pv: 3908,
                amt: 2000,
                color: "#F58735",
            },
            {
                name: 'Helpful',
                value: 14,
                pv: 1398,
                amt: 2210,
                color: "#A1BB79",
            },
            {
                name: 'Very helpful',
                value: 2,
                pv: 9800,
                amt: 2290,
                color: "#61C0A6",
            },
        ]
    },
    {
        id: 5,
        layout: "",
        name: "Key Finding-4",
        title: "Negative views of China continue to rise",
        description: "Three-quarters of respondents said their views of China have become more negative—a trend that has grown steadily year by year.",
        data: [
            {
                name: "Very bad",
                value: 75,
                pv: 2400,
                amt: 2400,
                color: "#ff4a4a",
            },
            {
                name: 'Very good',
                value: 11,
                pv: 3908,
                amt: 2000,
                color: "#028e8c",
            },
            {
                name: 'Do not know',
                value: 2,
                pv: 1398,
                amt: 2210,
                color: "#A1BB79",
            },
            {
                name: 'Refuse to answer',
                value: 13,
                pv: 9800,
                amt: 2290,
                color: "rgb(220,176,42)",
            },
        ]
    },
]
