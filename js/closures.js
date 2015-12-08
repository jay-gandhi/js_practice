function hey(hello){

    return function(name){
        document.write('<h1>'+hello + ' ' + name+'</h1>');
    }

}

// hey('Hello')('Jay');  // Function is retruning and calling

var greet = hey('Hello...'); // Function is returning
greet('Jay');  // calling that function.

function buildFunction(){
    var array = [];
    
    for(var i = 0; i<3;i++){
        array.push(
            function(){
                console.log(i);
            }
        )
    }
    return array;
}

var fs = buildFunction();

fs[0](); //3
fs[1](); //3
fs[2](); //3


function buildFunction2(){
    var array = [];
    
    for(var i = 0; i<3;i++){
        array.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i))
        )
    }
    return array;
}

var fs = buildFunction2();

fs[0](); //3
fs[1](); //3
fs[2](); //3


