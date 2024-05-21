"use strict";

//Input
const locationCategory = document.getElementById("locationCategory");
const parkTypeCategory = document.getElementById("parkTypeCategory");
// const byLocatiion = document.getElementById("byLocation");
const byParkType = document.getElementById("byParkType");
//output


window.onload = function(){
    //locationCategory.onchange = onChangeLocationCategory;
    // console.log("hi");
    // addNewNationalParks();
    //addDropdownOptions(locationsArray, parkTypesArray);
    populateLocationCategory();
    populateParkTypeCategory();
}

function populateLocationCategory(){
    for(let i = 0; i < locationsArray.length; i++){
        let locationOptions = document.createElement("option");
        locationOptions.value = locationsArray[i];
        locationOptions.innerHTML = locationsArray[i];

        locationCategory.appendChild(locationOptions);
    }
}
function populateParkTypeCategory(){
    for(let i = 0; i < parkTypesArray.length; i++){
        let parkTypeOptions = document.createElement("option");
        parkTypeOptions.value = parkTypesArray[i];
        parkTypeOptions.innerHTML = parkTypesArray[i];
    
        parkTypeCategory.appendChild(parkTypeOptions)
    }
}


////

function showParkTypeDiv(){

}

function hideParkTypeDiv(){

}

function showLocationDiv(){

}

function hideLocationDiv(){

}

function clearResults(){

};

// //when user selects a location
// // function onChangeLocationCategory(){
// //     // console.log("hi");
// // }
// //Created dropdown options for both loction and parktype 
// function createOptionsToDropdowns(locationName, parkType){
//     let locationOptions = document.createElement("option");
//     let parkTypeOptions = document.createElement("option");

//     locationOptions.value = locationName;
//     locationOptions.innerHTML = locationName;

//     parkTypeOptions.value = parkType;
//     parkTypeOptions.innerHTML = parkType;
// // console.log(parkTypeOptions);
// console.log(locationOptions);
//     locationCategory.appendChild(locationOptions);
//     parkTypeCategory.appendChild(parkTypeOptions);
// }

// function addDropdownOptions(arrayType){
//     for(let i = 0; i < arrayType.length; i++){
//         createOptionsToDropdowns(arrayType[i])
//     }
// }















// //Created the options for the dropdown
// function createNewOptions(locationName){
//     let newParkOptions = document.createElement("option");
//     newParkOptions.value = locationName;
//     newParkOptions.innerHTML = locationName;
//     // console.log(newParkOptions);

//     locationCategory.appendChild(newParkOptions);
// }

// //populates the dropDown
// function addNewNationalParks(){
//     for(let i = 0; i < locationsArray.length; i++){
//         // console.log(nationalParksArray[i].LocationID);
//         createNewOptions(locationsArray[i]);
//     }
// }
 
// function pickedSearchType(){
//     let locationPicked = byLocatiion.checked;
//     let parkTypePicked = byParkType.checked;
//     if(locationPicked){
//         console.log(locationPicked);
//     }
// }

// function findParkMatch(){
//     let locationName = locationCategory.value;
//     for(let i = 0; i < locationsArray.length; i++){
//         // console.log(locationsArray[i]);
//         if(locationsArray[i] == locationName){

//         }
//     }
// }