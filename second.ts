var g: number = 1;
class Test {
    static sv: number = 2;
    iv: number = 3;
    print1(): void {
        var i: number = 4;
        console.log("Local : " + i);
        console.log("Instance variable : " + this.iv);
        console.log("Static variable: " + Test.sv);
        console.log("Global Variable: " + g);
    }
    
}

var obj = new Test();
obj.print1();