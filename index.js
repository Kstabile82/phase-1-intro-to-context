function createEmployeeRecord(famArray) {
    let famObj = { 
        firstName: famArray[0], 
        familyName: famArray[1], 
        title: famArray[2], 
        payPerHour: famArray[3], 
        timeInEvents: [], 
        timeOutEvents: [], 
    }; 
    return famObj; 
    //could i have done this as famArray.map(famObj => famObj.key = famArray.idx)
    //or forEach.famArray.index(famObj.key => famObj.key = famArray.index)
}
// function createEmployeeRecord (famArray) {
//     let famObj =  {
//         firstName: "",
//         familyName: "", 
//         title: "", 
//         payPerHour: 0, 
//     }
//     const familyRecord = famArray.map(family => {
//         Object.assign(...famArray);
//     });
//     famObj.timeInEvent = []; 
//     famObj.timeOutEvent = []; 
// }

function createEmployeeRecords(arrOfArrays) {
    //map over inner arrays, destructure 
    return arrOfArrays.map(innerArr => {
        const [firstName, familyName, title, payPerHour] = innerArr; 
        return {firstName, familyName, title, payPerHour}; 
    })
    
}
function createTimeInEvent(recordObj, dateStamp) {
    const [date, hour] = dateStamp.split(" ")
    let newObj = {
        type: "TimeIn",
        hour, 
        date
    }; 
    recordObj.timeInEvents.push(newObj);
    return recordObj; 
}
function createTimeOutEvent(recordObj, dateStamp) {
    let newObj = {
        type: "TimeOut",
        hour: dateStamp.hour,//derived from arg
        date: dateStamp.date//derived from arg
    }; 
    let timeOutArr = recordObj.timeOutEvents;
    timeOutArr.push(newObj);
    return timeOutArr; 
}