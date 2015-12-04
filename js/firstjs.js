console.log("Hello World");

var person = {
    address : 'My world',
    rules : 'mah rulez'
};


console.log(person.address + person.rules);

var anonFunc = function(a){
    console.log(a);
    console.log(a.firstName)
};

anonFunc({
   firstName : 'JavaScript' 
});

console.log(person.address + person.rules);

