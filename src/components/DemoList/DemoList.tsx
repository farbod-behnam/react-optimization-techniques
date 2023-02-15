import React, { useMemo } from 'react'

import classes from "./DemoList.module.css";

interface Props {
    title: string;
    items: number[];
}

function DemoList(props: Props) {

    const sortedList: number[] = useMemo(() => {
        console.log("Items sorted");
        return props.items.sort((a, b) => a - b);
    }, [props.items]);

    console.log("DemoList RUNNING");


    return (
        <div className={classes.list}>
            <h2>{props.title}</h2>
            <ul>
                {sortedList.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default React.memo(DemoList);
