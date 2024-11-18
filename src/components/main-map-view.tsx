import {Map3D, Map3DCameraProps} from "@/src/map-3d";
import React, {useCallback, useMemo, useRef, useState} from "react";
import {MapMouseEvent} from "@vis.gl/react-google-maps";
import Panel from "./panel";
import LevelInfo from "./level-info";
import {GameState, useGameStore} from "@/src/stores";
import { Toaster } from "@/components/ui/sonner"

const MainMapView = () => {
    //const {bounds} = useGameStore(selector)
    const bounds= useGameStore(state=>state.tourDetail?.tourinfo?.bound)
    const initialView = useGameStore(state=>state.tourDetail!.tourinfo!.initialView)
    const [viewProps, setViewProps] = useState(initialView);

    const [lineCoordinate, setLineCoordinate] = useState<Iterable<google.maps.LatLngLiteral>>([]);


    const handleCameraChange = useCallback((props: Map3DCameraProps) => {
        setViewProps(oldProps => ({...oldProps, ...props}));
    }, []);


    const ref = useRef<google.maps.maps3d.Map3DElement>(null);

    type xy = [number,number]

    const onHint = useCallback((coordinate:Map3DCameraProps)=>{
        const ratio:number = 0.3
        let startPoint:xy =  [(coordinate.center.lat+viewProps.center.lat)/2, (coordinate.center.lng+viewProps.center.lng)/2]
        let endPoint:xy = [viewProps.center.lat, viewProps.center.lng]
        let translated:xy = [endPoint[0]-startPoint[0],endPoint[1]-startPoint[1]]
        let x:number = translated[0]
        let y:number = translated[1]
        const cos:number = Math.cos(0.5)
        const sin:number = Math.sin(0.5)
        let leftOne:xy=[(x*cos-y*sin)*ratio+startPoint[0],(x*sin+y*cos)*ratio+startPoint[1]]
        let rightOne:xy=[(x*cos+y*sin)*ratio+startPoint[0],(-x*sin+y*cos)*ratio+startPoint[1]]
        setLineCoordinate([
            {lat:leftOne[0],lng:leftOne[1]},
            {lat:startPoint[0],lng:startPoint[1]},
            {lat:endPoint[0],lng:endPoint[1]},
            {lat:startPoint[0],lng:startPoint[1]},
            {lat:rightOne[0],lng:rightOne[1]},
        ])
    },[viewProps])

    const onAnswer = useCallback((coordinate:Map3DCameraProps)=>{
        ref.current?.flyCameraTo({
            endCamera: coordinate,
            durationMillis: 2000
        });
    },[ref.current])

    return (
        <>
            <Map3D
                {...viewProps}
                onCameraChange={handleCameraChange}
                defaultLabelsDisabled
                ref={ref}
                lineCoordinates={lineCoordinate}
                boundary={bounds}
            >
            </Map3D>
            <LevelInfo viewProps={viewProps} onHint={onHint} onAnswer={onAnswer}/>
            <Toaster/>
        </>
    );
};


export default MainMapView




/*
* <Panel props={viewProps} onClick={()=>{
                setLineCoordinate([
                    {lat: viewProps.center.lat-0.1, lng: viewProps.center.lng-0.1},
                    {lat: viewProps.center.lat+0.1, lng: viewProps.center.lng+0.1},
                ])
            }}/>*/