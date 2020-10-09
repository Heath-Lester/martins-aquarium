

import {   useFish  } from './FishDataProvider.js';
import {  FishList  } from './FishList.js';

// This places the copy of the array fishCollection into a variable allTheFish
const allTheFish = useFish()

// This logs all the properties of all the objects from fishCollection
// for (const fish of allTheFish) {
//     console.log(fish)
// }

//this calls the function FishList that combines both FishDataProvider.js and Fish.js and renders them to HTML
FishList()

