import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}


export default function MyParagraph(props: Props) {
    console.log("MyParagraph");

    return (
        <p>{props.children}</p>
    )
}
