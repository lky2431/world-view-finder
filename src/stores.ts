import { create } from 'zustand'
import {TourInfo} from "@/types/levelInfo";
import {immer} from "zustand/middleware/immer";

export enum Page{
    home,
    game
}


interface TourDetail{
    complete:boolean,
    question:number,
    tourinfo?: TourInfo
}

export interface GameState{
    page:Page,
    tourDetail?: TourDetail,
    setTourDetail:(tour:TourInfo)=>void,
    quitTour:()=>void,
    nextQuestion:()=>void,
    complete: ()=>void
}

export const useGameStore = create<GameState>()(
    immer((set) => ({
        page:Page.home,
        setTourDetail:(tourInfo:TourInfo) => set({
            tourDetail:{
                tourinfo: tourInfo,
                question:0,
                complete:false
            },
            page:Page.game
        }),
        quitTour:()=>set({
            tourDetail:undefined,
            page:Page.home
        }),
        nextQuestion: () =>
            set((state) => {
                state.tourDetail!.question = state.tourDetail!.question+1
            }),
        complete: () =>
            set((state) => {
                state.tourDetail!.complete = true
            }),
    }))
)
