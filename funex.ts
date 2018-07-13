function f1(x: number): void;
function f1(s: string): void;
function f1(x: number, s: string): void;

function f1(n: any, s?: any): void {
    console.log(`value is ${n}. Type is ${typeof (n)}`);
    if (s) {
        console.log(`Second parameter is ${s}`);
    }
}

f1("srini");
f1(10);
f1(100, "PQR");

var marks: number[] = [60, 70, 66,565];
console.log(marks.length)
console.log(marks[3]);
var subjects: string[] = ["Java", "TypeScript", "Angular","react"];
for (var i = 0; i < subjects.length; i++)
console.log(subjects[i]);

var tup1 = [10, "Abc", true,56];
console.log(tup1[1]);
console.log(tup1.length);
var [i1, i2, i3, i4] = tup1;
console.log("Third Item : " + i3);
for (var v of tup1)
console.log(v);