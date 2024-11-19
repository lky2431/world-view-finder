import React, {ReactNode} from "react";

type variant = "one"|"two"|"three"



const BetterButton =({children, description, onClick,v}:{children:ReactNode,description: string, onClick:()=>void,v:variant})=>{
    let gradient = "from-[#12c2e9] to-[#f64f59] "
    if(v == "two"){
        gradient ="from-[#00F260] to-[#0575E6] "
    }else if(v == "three"){
        gradient ="from-[#f12711] to-[#f5af19] "
    }
    return (
        <button
            onClick={onClick}
            className="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base w-1/2"
        >
          <span
              className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"
          ></span>

            <span
                className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"
            ></span>

            <div
                className={gradient+"relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110"}
            >
                <span className="select-none">{description}</span>
                {children}
            </div>
        </button>
    )
}

export default BetterButton

