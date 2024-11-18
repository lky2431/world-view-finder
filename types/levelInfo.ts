import { Map3DCameraProps} from "@/src/map-3d";


export interface TourInfo{
    name: string
    attraction:Attraction[],
    initialView:Map3DCameraProps
    bound? :google.maps.LatLngBoundsLiteral
}


interface Attraction{
    image:string
    attribution:string
    name:string
    description:string
    coordinate: Map3DCameraProps
}