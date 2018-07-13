class NumericOperations {
    
    add( intNumber1 : number, intNumber2 : number ): number {
        return intNumber1 + intNumber2;
    }

    subs = function(intNumber1 : number, intNumber2 ?:number ): number {
        return intNumber2 ? intNumber1 - intNumber2 : intNumber1 - 10 ;
    }
    totalMarks = function(...numbers : number[] ) :number {
        var asnwer = 0;
        for(let n of numbers ) {
            asnwer = n + asnwer;
        }
        return asnwer;
    }

}
    
var obj = new NumericOperations();
console.log( obj.add(10, 30) );
console.log( obj.subs( 50 ) );
console.log( obj.subs( 50,30 ) );
console.log( obj.totalMarks(1,2,3,4,5,6,7) );