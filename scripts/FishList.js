// imports functions and arrays from other JS files
import {  useFish  } from './FishDataProvider.js';
import {  Fish  } from './Fish.js';


export const FishList = () => {
    // grabs the HTML class .fishList and stores it the variable contentElement
    const contentElement = document.querySelector(".fishList")

    // stores the useFish function in a variable
    const fishes = useFish()

    // This creates a variable that converts all its contents into a string.
    let fishHTMLRepresentations = ""

    // uses the new variable fish to iterate over the copy of the fishCollection array inside of useFish(),
    // then passes each object through the Fish() function that extracts all properties of the objects in fishCollection
    // and stores and appends them into the variable fishHTMLRepresentation. 
    for (const fish of fishes) {
      fishHTMLRepresentations += Fish(fish)
        
    }

    // this inserts the string that is inside the varable fishHTMLRepresentations into the location specified by the contentElement variable.
    contentElement.innerHTML += `
            ${fishHTMLRepresentations}
        `
}
