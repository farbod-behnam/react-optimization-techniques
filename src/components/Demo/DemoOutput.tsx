import React from "react";
import MyParagraph from "./MyParagraph";

interface Props {
    show: boolean;
}

function DemoOutput(props: Props) {
    console.log("DemoOutput");

    return (
        <MyParagraph>{props.show ? "This is new" : ""}</MyParagraph>
    )
}

export default React.memo(DemoOutput);

