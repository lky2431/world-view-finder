import React from "react";

const baseli = "flex w-12 items-center"
const baseSpan = "flex items-center justify-center rounded-full w-10 h-10"
const active = " font-black"
const pending = " bg-neutral-200"
const done = " bg-blue-200"

const  Stepper = ({total,question}:{total:number,question:number})=>{
    return (
        <ol className="flex items-center w-full p-3 gap-2">
            {
                [...Array(total).keys()].map((e)=>{
                    return <li className={baseli}>
                            <span
                                className={baseSpan +(question==e?active:" font-light")+(e<=question?done:pending)}>
                                {e+1}
                            </span>
                    </li>
                })
            }
        </ol>

)
}

export default Stepper