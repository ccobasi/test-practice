class Calculator {

    add(a,b){
        if(a === undefined && b){
            return ('number a missing');
          } else if (b === undefined && a) {
            return ('b number not provided');
          } else if(a === undefined && b === undefined) {
            return ('both value missing')
          }
        else{
            return a+b;
        }
        
    }

    subtract(a,b){
        if(a === undefined){
            return ('number a missing');
          } else if (b === undefined) {
            return ('b number missing');
          } else {
            return a-b;
          }
    }

    multiply(a,b){
        if(a === undefined && b){
            return ('number a missing');
          } else if (b === undefined && a) {
            return ('b number not provided');
          } else if (a === undefined && b === undefined) {
            return ('both value missing')
          } else {
            return a*b;
          }
    }

    divide(a,b){
        if(a === undefined || a === 0){
            return ('number a missing or invalid number');
          } else if (b === undefined || b === 0) {
            return ('b number missing or invalid number');
          } else {
            return a/b;
          }
    }
}

module.exports = Calculator;