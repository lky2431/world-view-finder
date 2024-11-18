
import React from "react";
import {Button} from "@/components/ui/button";
import {useGameStore} from "@/src/stores";
import {TourInfo} from "@/types/levelInfo";
import NewYork from "@/src/data/NewYork";
import Paris from "@/src/data/Paris";

const HomePage=()=>{
    return (
        <div className={"h-full w-full bg-hero bg-cover"}>
            <div className="h-full container flex flex-col items-center justify-between">
                <div></div>

                <h1 className="text-white font-bold text-8xl">View Finder</h1>

                <div className="rounded-md flex items-center flex-col">
                    <p className="text-md text-neutral-200 mb-3">Find a place to go</p>
                    <div className="flex gap-12"
                    >
                        <TourEntry place={"New Work"} textcolor={"text-blue-500"} icon={"newyork"} tour={NewYork}/>
                        <TourEntry place={"Paris"} textcolor={"text-violet-400"} icon={"paris"} tour={
                            Paris
                        }/>


                    </div>

                </div>
            </div>

        </div>
    )

}

const TourEntry =({place, textcolor,icon, tour}:{place:string,textcolor:string,icon:string, tour:TourInfo})=> {
    const setTourDetail = useGameStore((state)=>state.setTourDetail)
    return <div className="rounded-t-lg h-40 w-48 bg-neutral-50 shadow-2xl opacity-95 flex flex-col items-center justify-center gap-3">
        <img className={"w-10 h-10"} src={`./images/${icon}-icon.png`} alt=""/>
        <p onClick={()=>{
            setTourDetail(tour)
        }} className={"text-xl text-center w-full font-bold mt-4 hover:text-2xl "+textcolor}>
            {place}
        </p>
    </div>
}


export default HomePage;