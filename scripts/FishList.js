
import {  useFish  } from './FishDataProvider.js';

export const FishList = () => {
    // grabs the HTML element and 
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    contentElement.innerHTML += `
        <div class="fishList">
            All the fish go here!
        </div>
        `
}
