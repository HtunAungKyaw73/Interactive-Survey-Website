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
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
        data: [
            {
                name: "Lorem ipsum dolor sit amet consectetur adipiscin",
                value: 63,
                pv: 2400,
                amt: 2400,
                color: "#3295A5",
            },
            {
                name: "Lorem ipsum dolor sit amet consectetur adipiscin",
                value: 58,
                pv: 1398,
                amt: 2210,
                color: "#F58735",
            },
            {
                name: "Lorem ipsum dolor sit amet consectetur adipiscin",
                value: 37,
                pv: 9800,
                amt: 2290,
                color: "#61C0A6",
            },
            {
                name: "Lorem ipsum dolor sit amet consectetur adipiscin",
                value: 33,
                pv: 3908,
                amt: 2000,
                color: "#A1BB79",
            },
            {
                name: "Lorem ipsum dolor sit amet consectetur adipiscin",
                value: 31,
                pv: 4800,
                amt: 2181,
                color: "#C3B69B",
            },
            {
                name: "Lorem ipsum dolor sit amet consectetur adipiscin",
                value: 27,
                pv: 3800,
                amt: 2500,
                color: "#DC5848",
            },
            {
                name: "Lorem ipsum dolor sit amet consectetur adipiscin",
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
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
        data: [
            {
                name: "Lorem ipsum dolor sit amet consectetur adipiscin",
                value: 50,
                pv: 2400,
                amt: 2400,
                color: "#3295A5",
            },
            {
                name: "Lorem ipsum dolor sit amet consectetur adipiscin",
                value: 30,
                pv: 3908,
                amt: 2000,
                color: "#A1BB79",
            },
            {
                name: "Lorem ipsum dolor sit amet consectetur adipiscin",
                value: 25,
                pv: 1398,
                amt: 2210,
                color: "#F58735",
            },
            {
                name: "Lorem ipsum dolor sit amet consectetur adipiscin",
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
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
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
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
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
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
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
