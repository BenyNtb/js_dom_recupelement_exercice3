// 1

// let div1 = document.getElementsByTagName('div')[2]
// let child = div1.firstElementChild
// console.log(div1);

// let premiereD = document.getElementsByTagName('div')[0];
// let enfant = premiereD.firstElementChild;
// console.log(enfant);


// 2


// let div1 = document.getElementsByTagName('div')[2]
// let child = div1.lastElementChild
// console.log(child);


// 3





// CORRECTION



let dernierD = document.getElementsByTagName('div')[2];

// 1 
let premierEnfant = dernierD.firstElementChild;
console.log(premierEnfant);

// 2 
let dernierEnfant = dernierD.lastElementChild;
console.log(dernierEnfant);

// 3 

let elem = dernierD.getElementsByTagName('p')[0];
let elemI = elem.firstElementChild;
console.log(elemI);

// 4 
let p = dernierD.lastElementChild; 
console.log(p.firstElementChild);

// 4 (methode 2 )
let b = document.getElementsByTagName('b')[0]; 
console.log(b); 

// 5 
let i = dernierD.getElementsByTagName('i')[0]; 
console.log(i.parentElement); // parentNode; 

// 6 
console.log(b.parentNode); 

// 7 
console.log(premierEnfant.nextElementSibling); 


