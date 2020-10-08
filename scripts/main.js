// This logs all the properties of all the objects from fishCollection

import {  useFish  } from './FishDataProvider.js';
import {  FishList  } from './FishList.js';

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()