const removeFromArray = function(arr = [], ...theArgs) {
    let Args = theArgs;
    for(let i=0; i <= arr.length; i++ ){
        for(let j=0; j<= Args.length; j++){
            if ( arr[i]=== Args[j]){
                arr = arr.filter(item => Args.indexOf(item) === -1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
