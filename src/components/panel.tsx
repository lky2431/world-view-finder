import {Map3DCameraProps} from "@/src/map-3d";
import React from "react";

const Panel = ({props, onClick}:{props:Map3DCameraProps,onClick:()=>void})=>{
    return <div className="w-32 h-32">
        <p>lat: {props.center.lat}</p>
        <p>lng: {props.center.lng}</p>
        <p>alt: {props.center.altitude}</p>
        <p>range: {props.range}</p>
        <p>Heading: {props.heading}</p>
        <p>tilt: {props.tilt}</p>
        <p>roll: {props.roll}</p>
        <button onClick={onClick}>Click</button>
    </div>
}

export default Panel