// Code your solution in this file!

const returnFirstTwoDrivers=(drivers=['Antonia', 'Nuru', 'Amari', 'Mo'])=>{return drivers.slice(0,2)};
returnFirstTwoDrivers;

const returnLastTwoDrivers=(drivers=['Antonia', 'Nuru', 'Amari', 'Mo'])=>{return drivers.slice(2,drivers.length)};

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
selectingDrivers[0];
selectingDrivers[1];

function createFareMultiplier(fare){
    return fareMultiplier=(fare)=>fare *fare;
};
createFareMultiplier(2)

function fareDoubler(fare){
    return fare*2;
}
fareDoubler(10);

const fareTripler=(fare)=> fare*3;
fareTripler(12);


function selectDifferentDrivers(drivers,returnLastFirstDrivers){
    return returnLastFirstDrivers(drivers);
}

function selectDifferentDrivers(drivers,returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers);
}
