import {TourInfo} from "@/types/levelInfo";

const Paris: TourInfo ={
    name:"Paris",
    initialView:{
        center: {lat: 48.85905, lng: 2.34667, altitude: 275.67605},
        range: 76227.27199,
        heading: 0,
        tilt: 0,
        roll: 0
    },
    attraction:[
        {
            image: "arc-de-triomphe",
            attribution: "Photo by Antonio Conte: https://www.pexels.com/photo/arc-de-triomphe-4028795/",
            name: "Arc de Triomphe de l'Étoile",
            description: "The Arc de Triomphe de l'Étoile, often called simply the Arc de Triomphe, is one of the most famous monuments in Paris, France, standing at the western end of the Champs-Élysées at the centre of Place Charles de Gaulle, formerly named Place de l'Étoile—the étoile or \"star\" of the juncture formed by its twelve radiating avenues.",
            coordinate: {
                center: {
                    altitude: 80.42482304436098,
                    lat: 48.873684,
                    lng: 2.295132913760305,
                },
                range: 167.5968617177023,
                heading: -46.9294534836395,
                tilt: 73.97601466861279,
                roll: 0
            },
        },
        {
            image: "la-tour-eiffel",
            attribution: "Photo by Pixabay: https://www.pexels.com/photo/eiffel-tower-paris-532826/",
            name: "Eiffel Tower",
            description: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower from 1887 to 1889.",
            coordinate: {
                center: {
                    altitude: 129.5257588306192,
                    lat:48.85851448377479,
                    lng: 2.2944795096194914,
                },
                range: 441.1793458613829,
                heading: 131.33189021455325,
                tilt: 94.02938094188755,
                roll: 0
            },
        },
        {
            image: "notre-dame-de-paris",
            attribution: "Photo by Sergio Scandroglio: https://www.pexels.com/photo/the-notre-dame-cathedral-paris-france-17108606/",
            name: "Notre-Dame de Paris",
            description: "Notre-Dame de Paris is a medieval Catholic cathedral on the Île de la Cité, in the 4th arrondissement of Paris, France. The cathedral, dedicated in honour of the Virgin Mary (Our Lady), is considered one of the finest examples of French Gothic architecture.",
            coordinate: {
                center: {
                    altitude: 50.27247633965125,
                    lat: 48.85321341206705,
                    lng: 2.3490556069449497,
                },
                range: 221.56403603017685,
                heading: 113.08110013191842,
                tilt: 78.9181423076758,
                roll: 0
            },
        },
        {
            image: "palais-de-louvre",
            attribution: "Photo by Chait Goli: https://www.pexels.com/photo/glass-building-1796725/",
            name: "Louvre Palace",
            description: "The Louvre Palace is an iconic French palace located on the Right Bank of the Seine in Paris, occupying a vast expanse of land between the Tuileries Gardens and the church of Saint-Germain l'Auxerrois. Originally a defensive castle, it has served several government-related functions in the past.",
            coordinate: {
                center: {
                    altitude: 33.21139295898154,
                    lat: 48.86120987913031,
                    lng: 2.3358320116582987,
                },
                range: 109.9944663664428,
                heading: 135.7732638443736,
                tilt: 77.1205425948389,
                roll: 0
            },
        },
    ],
    bound:{
        north:48.9,
        south:48.81,
        west:2.23,
        east:2.44159
    }
}

export default Paris