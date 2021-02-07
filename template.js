const firstName = 'Mina';
const age = '23';
const job = 'Web Developer';
const city = 'Seoul';
let html;

html = '<ul><li>Name: ' + 
        name + 
        '</li><li>Age ' + 
        age
        '</li><li>job ' + 
        job
        '</li><li>city ' + 
        city
        '</li></ul>'
// With template strings

function hello() {
    return 'Hello World!'
}

// Ternary operator
html= `
        <ul> 
            <li>Name: ${name} </li>
            <li>Age: ${age} </li>
            <li>Job: ${job} </li>
            <li>City: ${city} </li>
            <li>${ 5 + 4 } </li>
            <li>${hello()} </li>
            <li> ${age > 20 ? 'Over 20' : "Under 20"} </li>
        </ul>
    `;

    document.body.innerHTML = html;

console.log(val);
