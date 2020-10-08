
const fishCollection = [
    {
        image:"https://i.pinimg.com/originals/6a/66/41/6a6641a2e7275ca9764e3335d2e755c8.jpg",
        name: "Fred",
        species: "Largemouth Bass",
        length: 24,
        location: "Montgomery Bell State Park",
        diet: "Bait fish, scuds, shrimp, shad, nails, crawfish, frogs, snakes, salamanders, bats, small water birds, mammals, and baby alligators."
    }, 
    {
        image:"https://freshwaterfishingadvice.com/wp-content/uploads/2018/12/storyblocks-close-up-of-a-smallmouth-bass-with-a-lake-in-the-background_HVYE7RXWX_1_900x.jpg",
        name: "Frank",
        species: "Smallmouth Bass",
        length: 20,
        location:"Percy Priest",
        diet: "Plankton, small waterbugs, other smaller smallmouth bass."
    },    
    {
        image:"https://i.ytimg.com/vi/gnkJSWSv77I/maxresdefault.jpg",
        name: "Bob",
        species: "Bluegill",
        length: 6,
        location: "Montgomery Bell State Park",
        diet: "small aquatic insects and fish"
    },    
    {
        image:"https://bloximages.chicago2.vip.townnews.com/kokomotribune.com/content/tncms/assets/v3/editorial/4/09/40979d6e-5e2d-11e9-aafa-1f0d242e1f32/5cb24ae420704.image.jpg?resize=1200%2C900",
        name: "Sasha",
        species: "Crappie",
        length: 8,
        location: "Montgomery Bell State Park",
        diet: "Insects, crustaceans, zooplankton, as well as the young fish of their predators."
    },
]


export const useFish = () => {
    return fishCollection.slice()
}

