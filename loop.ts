var intArray : number[] = [1, 2, 3, 4, 5];
var counter : number =0;
while ( counter < intArray.length ) {
    console.log( intArray[counter] );
    counter++;
}
console.log( counter );
do {
    counter --;
    console.log( intArray[counter] );  
}while(counter > 0 );

for( var ind in intArray ) {
    console.log( `${parseInt(ind) + 1} of ${intArray[counter]}` ); 
}
//ask Type Assertion means change datatype is not working.
//what is let?

var counter1:any = 10;
console.log(<string>counter1);

