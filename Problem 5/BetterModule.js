
const Operation = (firstVal, secondVal, thirdVal) => {

    if(secondVal == 0) {
        return 1;
    } else if(secondVal == 1) {
        return firstVal%thirdVal;
    } else {
        let fourthVal = Operation(((firstVal*firstVal)%thirdVal), Math.floor(secondVal/2), thirdVal);
    	if(secondVal % 2 == 1) {
            return (firstVal*fourthVal)%thirdVal;
        } else {
            return fourthVal;
        }
    }
};

module.exports = Operation;