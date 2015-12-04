function a(){
    console.log(this);
    this.newVariable = 'hello';
}

a();

var b = function(){
    console.log(this);
}

console.log(newVariable);
b();


var c = {
    name : 'the c object',
    log : function(){
        this.name = 'Updated C Object'
        console.log(this);
        
        var setName = function(){
            this.name = 'Hey! Updated Again';
            console.log(this);
        }
        setName();
    }
}

c.log();