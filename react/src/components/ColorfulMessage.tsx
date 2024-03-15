type Props = {
    color: string;
    children: string;
};

export const ColorfulMessage = ({ color, children }: Props) => {
    console.log("--ColorfulMessage--");
    const contentStyleA = {
        color,
        fontSize: "18px"
    };
    return <p style={contentStyleA}>{children}</p>
};