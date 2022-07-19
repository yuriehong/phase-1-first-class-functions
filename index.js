function callback(){
    return "call home";
}
function receivesAFunction(callback){
    return callback();
}

function add(x,y){
    return x+y;
}
function returnsANamedFunction(){
    return function hi() {
        console.log(`hi`);
      };
}
function returnsAnAnonymousFunction(){
    return functionx=> {console.log(x)};
    
}