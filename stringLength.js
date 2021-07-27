const stringLength = string => {
    if(string.length >= 1 && string.length <= 10){
        return string.length;
    }else{
        return ('Error: Enter text between 1-10');
    }
    }

module.exports = stringLength;
// Next, expand your function to make it check 
// if the string is at least 1 character long and not longer than 10 characters. 
// Throw errors if those conditions are not met.