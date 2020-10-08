
import {  useFish  } from './FishDataProvider.js';
import {  Fish  } from './Fish.js';


export const FishList = () => {
    // grabs the HTML element and stores it in fishes variable
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
      fishHTMLRepresentations += Fish(fish)
        
    }

    contentElement.innerHTML += `
        <div class="fishList">
            ${fishHTMLRepresentations}
        </div>
        `
}
