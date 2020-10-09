// This contains all the Fish as objects with properties in the array fishCollections.
const fishCollection = [
    {
        image:"./images/Largemouth Bass.jpg",
        name: "Fred",
        species: "Largemouth Bass",
        length: 24,
        location: "Montgomery Bell State Park",
        diet: "smaller fish, snails, frogs, snakes, salamanders, bats, small water birds, and baby alligators."
    }, 
    {
        image:"./images/SmallmouthBass.jpg",
        name: "Frank",
        species: "Smallmouth Bass",
        length: 20,
        location:"Percy Priest",
        diet: "Plankton, small waterbugs, other smaller smallmouth bass."
    },    
    {
        image:"./images/Bluegill.jpg",
        name: "Bob",
        species: "Bluegill",
        length: 6,
        location: "Montgomery Bell State Park",
        diet: "small aquatic insects and fish"
    },    
    {
        image:"./images/Crappie.jpg",
        name: "Sasha",
        species: "Crappie",
        length: 8,
        location: "Montgomery Bell State Park",
        diet: "Insects, crustaceans, zooplankton, as well as the young fish of their predators."
    },
]

// This exports a copy of the array as a functinton. .slice is used to protect the fishCollection array from being tampered with inadvertently.
export const useFish = () => {
    return fishCollection.slice()
}

