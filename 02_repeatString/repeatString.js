const repeatString = function(string, num) {
  var i = 1;
    var str = new String();
  do{
        if (num === 0){
            return "";
        }
        else if (num < 0){
            return "ERROR";
        }
        else {
            return str= string.repeat(num);
        }
    }while (i < num)
    
};

// Do not edit below this line
module.exports = repeatString;
