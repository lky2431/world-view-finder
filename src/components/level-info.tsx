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
    useModal,
    ModalBody,
    ModalContent,
    ModalFooter
} from "@/components/ui/animated-modal";
import BetterButton from "@/components/ui/better-button";


const LevelInfo = ({viewProps, onHint, onAnswer}:{viewProps:Map3DCameraProps,onHint:(coordinate:Map3DCameraProps)=>void,onAnswer:(coordinate: Map3DCameraProps)=>void})=>{
    const question = useGameStore(state=>state.tourDetail!.question)
    const attractions = useGameStore(state=>state.tourDetail!.tourinfo!.attraction)
    const nextQuestion = useGameStore(state=>state.nextQuestion)
    const attraction = attractions[question]
    const quitTour = useGameStore(state=>state.quitTour)
    //const [openDialog, setOpenDialog] = useState<boolean>(false)
    const modal = useModal()



    const takeImage = ()=>{
        if(isViewRight()){
            //setOpenDialog(true)
            modal.setOpen(true)
        }else{
            toast.error("The view you took is not right.")
        }
    }

    const isViewRight=():boolean=>{
        const range:number = attraction.coordinate.range
        if(Math.abs(viewProps.center.lat-attraction.coordinate.center.lat)>0.002/200*range){
            console.log("lat not right")
            return false
        }
        if(Math.abs(viewProps.center.lng-attraction.coordinate.center.lng)>0.002/200*range){
            console.log("lng not right")
            return false
        }
        if(Math.abs(viewProps.heading-attraction.coordinate.heading)>15){
            console.log("heading not right")
            return false
        }
        if(Math.abs(viewProps.center.altitude-attraction.coordinate.center.altitude)>200){
            console.log("altitude not right")
            return false
        }
        return true
    }


    return (

            <div className={"flex flex-col w-1/2 items-center gap-4"}>
                <Stepper total={attractions.length} question={question}/>
                <div className={"flex justify-center h-1/2"}>
                    <img className={"h-full"} src={`./images/${attraction.image}.jpg`}/>
                </div>
                <p className={"text-xs text-neutral-400 p-1 text-center"}>attribution: {attraction.attribution}</p>
                <BetterButton description={"Take Photo"} onClick={takeImage} v={"one"}>
                    <Camera/>
                </BetterButton>
                <BetterButton description={"Hint"} v={"two"} onClick={() => {
                    onHint(attraction.coordinate)
                }}>
                    <View/>
                </BetterButton>

                <BetterButton description={"Reveal"} v={"three"} onClick={() => {
                    onAnswer(attraction.coordinate)
                    setTimeout(() => {
                        modal.setOpen(true)
                        //setOpenDialog(true)
                    }, 3000)
                }}>
                    <Eye/>
                </BetterButton>


                <ModalBody className={"h-min"}>
                    <ModalContent>
                        <div className={"flex flex-col"}>
                            <h1 className={"text-2xl font-black mb-4"}>{attraction.name}</h1>
                            <p className={"text-sm"}>{attraction.description}</p>
                        </div>
                    </ModalContent>
                    <ModalFooter>
                        <Button onClick={() => {
                            modal.setOpen(false)
                            if (question == attractions.length - 1) {
                                quitTour()
                            } else {
                                nextQuestion()
                            }
                        }}>OK</Button>
                    </ModalFooter>
                </ModalBody>
            </div>
    )
}

export default LevelInfo