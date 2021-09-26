function createEmployeeRecord(emplArray) {
    let emplObj = { 
        firstName: emplArray[0], 
        familyName: emplArray[1], 
        title: emplArray[2], 
        payPerHour: emplArray[3], 
        timeInEvents: [], 
        timeOutEvents: [], 
    }
    return emplObj;
} 

function createEmployeeRecords(arrOfArrays) {
    //map over inner arrays, destructure 
    // return arrOfArrays.map(innerArr => {
    //     const [firstName, familyName, title, payPerHour] = innerArr; 
    //     return {firstName, familyName, title, payPerHour}; 
    // })
    return arrOfArrays.map((employee) => createEmployeeRecord(employee))
}
function createTimeInEvent(recordObj, dateStamp) {
    const [date, hour] = dateStamp.split(" ")
    let newObj = {
        type: "TimeIn",
        hour: parseInt(hour, 10),   //dont need : if the name is the same for key and its value 
        date
    }; 
    recordObj.timeInEvents.push(newObj)
    return recordObj; 
}

function createTimeOutEvent(recordObj, dateStamp) {
    const [date, hour] = dateStamp.split(" ")
    let newObj = {
        type: "TimeOut",
        hour: parseInt(hour, 10), 
        date
    }; 
    recordObj.timeOutEvents.push(newObj);
    return recordObj; 
}

function hoursWorkedOnDate(emplRecordObj, date) {
    const timeIn = emplRecordObj.timeInEvents.find(event => event.date === date).hour
    const timeOut = emplRecordObj.timeOutEvents.find(event => event.date === date).hour
    return (timeOut-timeIn)/100; 
    // for (date of emplRecordObj) {    //how do i grab emplRecordObj by date? 
    // for (date of emplRecordObj) {    //how do i grab emplRecordObj by date? 

    //    return emplRecordObj.reduce; 
        
    // }
    
}
function wagesEarnedOnDate(emplRecordObj, date) {
        return emplRecordObj.payPerHour * hoursWorkedOnDate(emplRecordObj, date);
    
}
function allWagesFor(emplRecordObj) {
    const wagesTotal = emplRecordObj.timeInEvents.map((event) => wagesEarnedOnDate(emplRecordObj, event.date))
      return wagesTotal.reduce((total, amount) => total + amount)
}

function calculatePayroll(emplRecordsArr) {
    const calcPay = emplRecordsArr.map((employee) => { 
        return employee.timeInEvents.map((event) => wagesEarnedOnDate(employee, event.date))
    })
    //rewrite calcpayroll using allwagesfor 
    
    return calcPay.map((employee) => {
       let totalVar = 0; 
       return totalVar += employee.reduce((total, amount) => total + amount)
    }).reduce((amount, total) => amount + total)

}