class Product {
    readonly name1 ="srini";
    protected name: string;
    protected price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    print1(): void {
        console.log(this.name);
        console.log(this.price);
    }
}
//var per1 = new Product("iPhone7 Plus", 70000);
//per1.print1();
//console.log(per1.name);
//per1.name1 ="";//not possible

class TaxProduct extends Product {
    protected tax: number;
    constructor(name: string, price: number, tax: number) {
        super(name, price);
        this.tax = tax;
    }
    print(): void {
        super.print1();
        console.log(this.tax);
    }
    getNetPrice(): number {
        return this.price + this.price * this.tax / 100;
    }
}
var tp = new TaxProduct("Dell Laptop", 65000, 10);
tp.print();
console.log("Net Price : " + tp.getNetPrice());