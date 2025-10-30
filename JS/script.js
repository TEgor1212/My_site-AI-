function squere(a){
    return a * a;
}
function isEven(a){
    if (a % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
function greet(name, greet = "Hello"){
    if (name != null){
        return `${greet}, ${name}`;
    }
    else {
        return `${greet}, no-name`;
    }
}

function SummArr(arr){
    let a = arr.reduce((acc, x) => acc + x,0)
    console.log(a)
    return a;
}
function doubleArr(arr){
    return arr.map(x => x * 2);
}
function foo(users){
    let a = users.filter(users => users.age >= 18);
    a = a.map(a => a.name);
    return a;
}
class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    distanceTo(point){
        return Math.sqrt((this.x - point.x)*(this.x - point.x) + (this.y - point.y)*(this.y - point.y));
    }
    static origin(){
        return new Point(0, 0);
    }
}
