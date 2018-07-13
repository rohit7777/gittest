var marks: number[] = [30, 40, 50, 65, 75];
for (var idx in marks) {
    console.log(`Marks for student ${idx} are ${marks[idx]}`);
}
for (var m of marks) {
    console.log(m);
}

function add(n1: number, n2: number = 50): number {
    if (n2) {
        return n1 + n2;
    } else {
        return n1 + 50;
    }

}
console.log(add(20, 30));
console.log(add(50));
//console.log(add(50, 40, 45, 34, 3, 4));
//console.log(add(50, 40, 45, 34));

let sub = function (a, b) {
    return a - b;
}
console.log(sub(50, 20));

let mul = (n: number) => (n % 2 == 0) ? n + 20 : n + 5;
console.log(mul(40));
console.log(mul(43));

function print2(message: string, ...names: string[]) {
    for (let n of names)
        console.log(message + " " + n);
}
print2("Hello", "Ben", "Joe");
print2("Hi ", "Scott", "Anders", "Tom");
print2("hai ", "Scott", "Anders", "Tom","welcome");