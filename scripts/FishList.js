// imports functions and arrays from other JS files
import {  useFish, mostHolyFish, soldierFish, nonHolyFish  } from './FishDataProvider.js';
import {  Fish  } from './Fish.js';


export const FishList = () => {
    // grabs the HTML class .fishList and stores it the variable contentElement
    const contentElement = document.querySelector(".fishList")

    // -OLD- stores the useFish function in a variable
    // const fishes = useFish()

    // This stores the fish objects whos lenth property is divisible by 3
    const theHolyFish = mostHolyFish()
    const armyFish = soldierFish()
    const peasantFish = nonHolyFish()

    // -OLD- This creates a variable that converts all its contents into a string.
    // let fishHTMLRepresentations = ""

    let holyFishHTMLRep = ""
    let soldierFishHTMLRep = ""
    let nonHolyFishHTMLRep = ""

    // -OLD- uses the new variable fish to iterate over the copy of the fishCollection array inside of useFish(),
    // then passes each object through the Fish() function that extracts all properties of the objects in fishCollection
    // and stores and appends them into the variable fishHTMLRepresentation. 
    // for (const fish of fishes) {
    //   fishHTMLRepresentations += Fish(fish)
    // }

    for (const holiest of theHolyFish) {
        holyFishHTMLRep += Fish(holiest)
    }

    for (const hardiest of armyFish) {
        soldierFishHTMLRep += Fish(hardiest)
    }

    for (const workingClass of peasantFish) {
        nonHolyFishHTMLRep += Fish(workingClass)
    }
    
    // -OLD- this inserts the string that is inside the varable fishHTMLRepresentations into the location specified by the contentElement variable.
    // contentElement.innerHTML += `
    //         ${fishHTMLRepresentations}
    //     `

    contentElement.innerHTML += `
      ${holyFishHTMLRep}
      ${soldierFishHTMLRep}
      ${nonHolyFishHTMLRep}
    `

  }

