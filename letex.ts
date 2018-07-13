function abc() {
    let a = 10;
    console.log(a); // output 10
    if (true) {
        let a = 20;
        console.log(a); // output 20
    }
    console.log(a); // output 10
}
abc();

var counter:number = 33;
console.log((<String>counter).length);
