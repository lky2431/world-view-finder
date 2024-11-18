import {useGameStore} from "@/src/stores";
import React, {useEffect, useState} from "react";
import {Map3DCameraProps} from "@/src/map-3d";
import {Button} from "@/components/ui/button";
import {Camera} from "lucide-react"
import {Eye} from "lucide-react";
import {ArrowBigLeft} from "lucide-react";
import Stepper from "@/components/ui/stepper";
import {View} from "lucide-react";
import { toast } from "sonner"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

const LevelInfo = ({viewProps, onHint, onAnswer}:{viewProps:Map3DCameraProps,onHint:(coordinate:Map3DCameraProps)=>void,onAnswer:(coordinate: Map3DCameraProps)=>void})=>{
    const question = useGameStore(state=>state.tourDetail!.question)
    const attractions = useGameStore(state=>state.tourDetail!.tourinfo!.attraction)
    const nextQuestion = useGameStore(state=>state.nextQuestion)
    const attraction = attractions[question]
    const quitTour = useGameStore(state=>state.quitTour)
    const [openDialog, setOpenDialog] = useState<boolean>(false)


    const takeImage = ()=>{
        if(isViewRight()){
            setOpenDialog(true)
        }else{
            toast("The view you took is not right.")
        }
    }

    const isViewRight=():boolean=>{
        return true
        if(Math.abs(viewProps.center.lat-attraction.coordinate.center.lat)>0.002){
            return false
        }
        if(Math.abs(viewProps.center.lng-attraction.coordinate.center.lng)>0.002){
            return false
        }
        if(Math.abs(viewProps.heading-attraction.coordinate.heading)>15){
            return false
        }
        if(Math.abs(viewProps.center.altitude-attraction.coordinate.center.altitude)>200){
            return false
        }
        return true
    }


    return (
        <div className={"flex flex-col w-1/2"}>
            <Stepper total={attractions.length} question={question}/>
            <div className={"flex justify-center h-1/2"}>
                <img className={"h-full"} src={`./images/${attraction.image}.jpg`}/>
            </div>
            <p className={"text-xs text-neutral-400 p-1 text-center"}>{attraction.attribution}</p>
                <div className={"flex justify-around py-6"}>
                <Button className={"w-32"} onClick={takeImage} size={"lg"}>
                    <Camera/> Take Photo
                </Button>
                <Button className={"w-32"} variant={"secondary"} size={"lg"} onClick={() => {
                    onHint(attraction.coordinate)
                }}>
                    <View/> Hint
                </Button>
                    <Button className={"w-32"} variant={"destructive"} size={"lg"} onClick={() => {
                        onAnswer(attraction.coordinate)
                        setTimeout(()=>{
                            setOpenDialog(true)
                        },3000)
                    }}>
                        <Eye/> Reveal
                    </Button>

            </div>
            <Dialog open={openDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{attraction.name}</DialogTitle>
                        <DialogDescription>
                            {attraction.description}
                        </DialogDescription>
                    </DialogHeader>
                    <Button size={"default"} onClick={() => {
                        setOpenDialog(false)
                        if (question == attractions.length - 1) {
                            quitTour()
                        } else {
                            nextQuestion()
                        }
                    }}>OK</Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}


export default LevelInfo