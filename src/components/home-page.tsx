import React from "react";
import {useGameStore} from "@/src/stores";
import {TourInfo} from "@/types/levelInfo";
import NewYork from "@/src/data/NewYork";
import Paris from "@/src/data/Paris";
import { motion } from "framer-motion";

const HomePage=()=>{
    return (
        <div className={"h-full w-full bg-hero bg-cover"}>
            <div className="h-full container flex flex-col items-center justify-between">
                <div></div>

                <h1 className="text-white font-bold text-8xl">City Explorer</h1>

                <div className="rounded-md flex items-center flex-col">
                    <p className="text-md text-neutral-200 mb-3">Find a city to explore</p>
                    <div className="flex"
                    >
                        <TourEntry place={"New Work"} textcolor={"text-blue-500"} icon={"newyork"} tour={NewYork} rotate={-4}/>
                        <TourEntry place={"Paris"} textcolor={"text-violet-400"} icon={"paris"} tour={
                            Paris
                        } rotate={5}/>
                    </div>
                </div>
            </div>
        </div>
    )

}

const TourEntry =({place, textcolor,icon, tour, rotate}:{place:string,textcolor:string,icon:string, tour:TourInfo, rotate:number})=> {
    const setTourDetail = useGameStore((state) => state.setTourDetail)
    return <motion.div
        key={place}
        style={{
            rotate: rotate,
        }}
        whileHover={{
            scale: 1.2,
            rotate: 0,
            zIndex: 100,
        }}
        whileTap={{
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        }}
        onClick={() => {
            setTourDetail(tour)
        }}
        className="h-40 w-48 bg-white shadow-2xl flex flex-col items-center justify-center gap-3 rounded-2xl">
        <img className={"w-10 h-10"} src={`./images/${icon}-icon.png`} alt=""/>
        <p  className={"text-xl text-center w-full font-bold mt-4 hover:text-2xl " + textcolor}>
            {place}
        </p>
    </motion.div>

}


export default HomePage;