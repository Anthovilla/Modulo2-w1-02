"use strict";
let pizze = [];
pizze.sort((a, b) => {
    return a.prezzo - b.prezzo;
});
console.log(pizze);
