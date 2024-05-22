"use strict";

//Input
const locationCategory = document.getElementById("locationCategory");
const parkTypeCategory = document.getElementById("parkTypeCategory");
//location radio buttons
const byLocation = document.getElementById("byLocation");
const locationDiv = document.getElementById("locationDiv");
//park type radio buttons
const byParkType = document.getElementById("byParkType");
const parkTypeDiv = document.getElementById("parkTypeDiv");
//output
//table data
const nationalParkTable = document.getElementById("nationalParkTable");

//asign varibles with input values
let parkTypeSelected = byParkType.checked;
let locationSelected = byLocation.checked;

window.onload = function(){
    locationCategory.onchange = onChangeLocationCategory;
    parkTypeCategory.onchange = onChangeParkTypeCategory;
    // console.log("hi");
    // addNewNationalParks();
    //addDropdownOptions(locationsArray, parkTypesArray);
    populateLocationCategory();
    populateParkTypeCategory();
    byLocation.onclick = showOrHideDropdowns;
    byParkType.onclick = showOrHideDropdowns;
    showOrHideDropdowns();
    // nationalParkDataTable(nationalParksArray);
}

function onChangeLocationCategory(){
    console.log("hi");
    // clear stuff before

    let selectedLocation = locationCategory.value;

    // clearTable()
    // console.log(selectedLocation);
    let parkFilteredByState = getParksByState(selectedLocation);
    nationalParkDataTable(parkFilteredByState);
    // getParksByState(selectedLocation);
}

function onChangeParkTypeCategory(){
    let selectedParkType = parkTypeCategory.value;
    getParksByParkType(selectedParkType);
}

//.... created a function to clear the table   ...
function clearTable(){
    // I want my table to be be empty every single time this function run
    nationalParkTable.innerHTML = '';
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
function showOrHideDropdowns(){
    // console.log("showOrHideDropdowns");

    if(byLocation.checked){
        showLocationDiv();
        hideParkTypeDiv();
    }
    else if(byParkType.checked){
        console.log("park type")
        showParkTypeDiv();
        hideLocationDiv();
    }
}
function showParkTypeDiv(){
        // console.log("hi");
        parkTypeDiv.style.display = "block";
}
function hideParkTypeDiv(){
        parkTypeDiv.style.display = "none";
}
function showLocationDiv(){
    locationDiv.style.display = "block";
}
function hideLocationDiv(){
        locationDiv.style.display = "none";
}
function example(){
    // console.log("hi");
}
//output
function nationalParkDataTable(parks){
    for(let i = 0; i < parks.length; i++){
        //creates table row
        let row = nationalParkTable.insertRow(-1);
        
        //creates table cell and add them to the data
        let cell = row.insertCell(0);
        cell.innerHTML = parks[i].LocationID;

        let cell2 = row.insertCell(1);
        cell2.innerHTML = parks[i].LocationName;

        let cell3 = row.insertCell(2);
        cell3.innerHTML = parks[i].Address;

        let cell4 = row.insertCell(3);
        cell4.innerHTML = parks[i].City;

        let cell5 = row.insertCell(4);
        cell5.innerHTML = parks[i].State;

        let cell6 = row.insertCell(5);
        cell6.innerHTML = parks[i].Phone;
    }
}
function getParksByState(state){
    // initializing an empty array
    let parksResult = [];
    //this will look through the global array of all parks, 
    //and return a results array that only has parks that 
    //match the location.
    for(let i = 0; i < nationalParksArray.length; i++){
        if(nationalParksArray[i].State === state){
            parksResult.push(nationalParksArray[i]);
        }
    }
    //this function would not directly interact with the UI
    // console.log(parksResult);
    return parksResult;
}
function getParksByParkType(parkType){
    //similar to above but different serach criteria;
    let parkTypeResult = [];

    for(let i = 0; i < nationalParksArray.length; i++){
        if(nationalParksArray[i].LocationName === parkType){
            parkTypeResult.push(nationalParksArray[i]);
        }
    }
    console.log(parkTypeResult);
    return parkTypeResult;
}
function clearResults(){

};

