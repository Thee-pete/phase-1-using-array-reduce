const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function reducer(accumalator, batteryValue){
    return accumalator += batteryValue;
}
const totalBatteries = batteryBatches.reduce(reducer);



