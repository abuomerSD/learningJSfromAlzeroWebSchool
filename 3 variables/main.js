// JavaScript is a lossley type language
// JavaScript is case senstive
// JavaScript uses camelCase do identefy the variables
// every var variable will be in the window object
// search about variable scope drama

/*
=============================================
*/

// var username = "Eltayeb";

// console.log(username);
// console.log(username);
// console.log(username);
// console.log(hello);

// hello.innerHTML = username ;

// let password = "113123ddsd";

// const email =  "saseew@yahoo.com";

/*
=============================================
*/
//characters scape sequence in js

// console.log('elzero');
// console.log("elzero \\ web \"school\"");
// console.log("elzero \\ web \"school\"");

/*
=============================================
*/
// concatenation

// let a = "we love";
// let b = "javascript";

// document.write(a +" "+ b);

/*
=============================================
    Template Literals (Template Strings)
*/

let a = "we love";
let b = "javascript";
let c = "and";
let d = "programming";

console.log(a + " " +b+" "+c+" "+d);

//backtick
console.log(`${a} "" ${b} 
${c} 
${d}`);

let contactsTitle = "contact us";
let phone = "+88296832382";
let email = "aesd@yahoo.com";

let htmlTags = `
    <div class = "Contacts">
        <h1>${contactsTitle}</h1>
        <p>phone: ${phone}</p>
        <p>email: ${email}</p>
    </div>
`;

document.write(htmlTags);