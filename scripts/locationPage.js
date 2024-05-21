"use strict";

//Input
const locationCategory = document.getElementById("locationCategory");

//output


window.onload = function(){
    locationCategory.onchange = onChangeLocationCategory;
    // console.log("hi");
    addNewNationalParks();
}

function onChangeLocationCategory(){
    // console.log("hi");
}

function createNewOptions(locationName){
    let newParkOptions = document.createElement("option");
    newParkOptions.value = locationName;
    newParkOptions.innerHTML = locationName;
    // console.log(newParkOptions);

    locationCategory.appendChild(newParkOptions);
}

function addNewNationalParks(){
    for(let i = 0; i < locationsArray.length; i++){
        // console.log(nationalParksArray[i].LocationID);
        createNewOptions(locationsArray[i]);
    }
}

function findParkMatch(){
    let locationName = locationCategory.value;
    for(let i = 0; i < locationsArray.length; i++){
        // console.log(locationsArray[i]);
        if(locationsArray[i] == locationName){
            
        }
    }
}