
const firstName = 'William';
const lastName = 'Johnson';
const age = '30';
const str = 'Hello there my friend';
const tags = 'Web Development, Web Design, Progamming';

let val; 

val = firstName + lastName;
// Concatination
val = firstName + ' ' + lastName;


// Append
val = 'Happy ';
val += 'Mina';

val = 'Hello there my name is' + ' ' + firstName + ' and I am ' + age + 'years old'

// Escaping
val = "That's awesome, I cant wait to see you " 

// Length 
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// get value by index
val = firstName[3];

// indexOf
val = firstName.indexOf('a'); 
val = firstName.lastIndexOf('l'); 

// chartAt
val  = firstName.charAt('3')

// substring
val = firstName.substring(0,4) 

// Slice
val = firstName.slice(2,4);
val = lastName.slice(-3);

// Split
val = str.split(' ');
val = str.split('-');

// Replace
val = str.replace('Happy', 'Mina');

// includes
val = str.includes('is');


console.log(val);


