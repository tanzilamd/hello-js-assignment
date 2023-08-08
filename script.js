function cubeNumber(number) {
    if(typeof number != "number"){
        const errorMessage = "Provide a valid number!";
        return errorMessage;
    }
    else {
        const cube = number * number * number;

        return cube;
    }
}



function matchFinder(string1, string2) {
    if((typeof string1 != "string") || (typeof string2 != "string")){
        const errorMessage = "Enter valid string!";
        return errorMessage;
    }

    else {

        if(string1.includes(string2)) {
            return true;
        } 
        else {
            return false;
        }
    }    
}


function sortMaker(arr) {
    if((arr[0] < 0) || (arr[1] < 0)){
        const errorMessage = "Invalid Input";
        return errorMessage;
    }

    else {
        if(arr[0] === arr[1]){
            return "equal";
        }

        else if (arr[0] < arr[1]){
            let temp = arr[1];
            arr[1] = arr[0];
            arr[0] = temp;
    
            return arr;
        } 

        else {
            return arr;
        }
    }
}


function findAddress(obj) {
    let streetInfo = obj.street;
    let houseInfo = obj.house;
    let societyInfo = obj.society;

    if(streetInfo === undefined){
        streetInfo = "__";
        
        if(houseInfo === undefined) {
            houseInfo = "__"
        }

        if(societyInfo === undefined){
            societyInfo = "__";
        }

    }

    else if(houseInfo === undefined) {
        houseInfo = "__"

        if(societyInfo === undefined){
            societyInfo = "__";
        }
    }
    else if(societyInfo === undefined){
        societyInfo = "__";
    }
    
    const address = streetInfo + "," + houseInfo + ", " + societyInfo;
    return address;
    
}


function canPay(changeArray, totalDue) {
    if(changeArray.length < 1){
        const errorMessage = "Array is empty. Fill it!"
        return errorMessage;
    }
    else {
        let myTotalMoney = 0;

        for(let i=0; i < changeArray.length; i++){
            const eachMoney = changeArray[i];
            myTotalMoney += eachMoney;
        }

        if(myTotalMoney >= totalDue) {
            return true;
        }
        else {
            return false;
        }
    }

}


