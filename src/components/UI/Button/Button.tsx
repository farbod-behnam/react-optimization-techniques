import React from "react";
import { ComponentPropsWithoutRef } from "react"
import classes from './Button.module.css';

interface Props extends ComponentPropsWithoutRef<"button"> {
}

function Button(props: Props) {

    console.log("Button RUNNING");
    

    return (
        <button
            type={props.type || 'button'}
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default React.memo(Button);