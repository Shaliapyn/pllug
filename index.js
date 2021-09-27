function changeStrRegister(str="tEST"){
    let strResult = "";
    for (let i = 0; i < str.length; i++){
        if (str[i].toUpperCase() == str[i]){
            strResult += str[i].toLowerCase()
        } else { strResult += str[i].toUpperCase() }
    }
    return strResult;
}


console.log(changeStrRegister('ASdsASDS'))