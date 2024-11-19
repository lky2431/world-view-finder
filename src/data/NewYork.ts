import {TourInfo} from "@/types/levelInfo";

const NewYork: TourInfo ={
    name:"New York",
    initialView:{
        center: {lat: 40.7, lng: -74.00, altitude: 275.67605},
        range: 76227.27199,
        heading: 0,
        tilt: 0,
        roll: 0
    },
    attraction:[
        {
            image: "brooklyn-bridge",
            attribution: "Photo by <a href=\"https://unsplash.com/@davidemrich?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">David Emrich</a> on <a href=\"https://unsplash.com/photos/brooklyn-bridge-in-new-york-city-during-daytime-6EgydGB0GfY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>",
            name: "Brooklyn Bridge",
            description: "The Brooklyn Bridge is a hybrid cable-stayed/suspension bridge in New York City, spanning the East River between the boroughs of Manhattan and Brooklyn.",
            coordinate: {
                center: {
                    altitude: 12.21107,
                    lat: 40.703966,
                    lng: -73.994415,
                },
                range: 230.66481312918768,
                heading: 13.061289252809594,
                tilt: 80.72506513164542,
                roll: 0
            },
        },
        {
            image: "empire-state-building",
            attribution: "Photo by a href=httpsunsplash.com@cobblepotutm_content=creditCopyText&utm_medium=referral&utm_source=unsplashKit Sumana on a href=httpsunsplash.comphotosnew-york-city-view-during-daytime-M8SX2ecRfiQutm_content=creditCopyText&utm_medium=referral&utm_source=unsplashUnsplasha",
            name: "Empire State Building",
            description: "The Empire State Building is a 102-story Art Deco skyscraper in the Midtown South neighborhood of Manhattan in New York City. The building was designed by Shreve, Lamb & Harmon and built from 1930 to 1931. Its name is derived from \"Empire State\", the nickname of the state of New York.",
            coordinate: {
                center: {
                    altitude: 272.35727606692336,
                    lat: 40.713082179453906,
                    lng: -74.01281223492144,
                },
                range: 5890.521980007179,
                heading: -150.46202872352342,
                tilt: 89.92064346851203,
                roll: 0
            },
        },
        {
            image: "statue-of-liberty",
            attribution: "Photo by <a href=\"https://unsplash.com/@antonio_18_amado?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">António Amado</a> on <a href=\"https://unsplash.com/photos/the-statue-of-liberty-is-in-the-middle-of-the-water-SDR6dZugU8I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>",
            name: "Statue of Liberty",
            description: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor, within New York City. The copper-clad statue, a gift to the United States from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue was dedicated on October 28, 1886.",
            coordinate: {
                center: {
                    altitude: 36.30368690943163,
                    lat: 40.68921993659675,
                    lng: -74.04447507757364,
                },
                range: 221.56403603017685,
                heading: -51.860246202665756,
                tilt: 92.84507612456576,
                roll: 0
            },
        },



    ],
    bound:{
        north:40.8,
        south:40.5,
        west:-74.19,
        east:-73.78
    }
}

export default NewYork