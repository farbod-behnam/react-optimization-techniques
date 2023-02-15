import MyParagraph from "./MyParagraph";

interface Props {
    show: boolean;
}

export default function DemoOutput(props: Props) {
    console.log("DemoOutput");

    return (
        <MyParagraph>{props.show ? "This is new" : ""}</MyParagraph>
    )
}

