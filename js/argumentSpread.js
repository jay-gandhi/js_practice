
function greet(name , address, city){
   if(arguments.length === 0){
       console.log('Missing Parameter');
    }
    else{
        name = name || 'Jay';
        address = address || 'Bengaluru';
        city = city || 'BangBangLutru'
        console.log(name);
        console.log(address);
        console.log(city);
        console.log(arguments.length);
    }
                   
                   
}

greet('Jay','Rajkot','Gujarat');

console.log('-------------');
greet();