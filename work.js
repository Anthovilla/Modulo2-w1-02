"use strict";
class SonAccount {
    constructor() {
        this.balanceInit = 0;
    }
    oneDeposit(amount) {
        this.balanceInit += amount;
    }
    oneWithDraw(amount) {
        if (this.balanceInit >= amount) {
            this.balanceInit -= amount;
        }
        else {
            console.log('niente cash');
        }
    }
    saldo() {
        return this.balanceInit;
    }
}
class MotherAccount extends SonAccount {
    addInterest() {
        const interest = this.balanceInit * 0.1; //il calcolo rappresenta l'interesse che verrà aggiunto al saldo.
        this.balanceInit += interest; // il saldo iniziale viene incrementato 'interesse calcolato'
    }
}
//Parte Form
function motherSon(event) {
    event.preventDefault(); // Inpedisci il comportamento di default del form 'di ricaricare di nuovo la pg'
    const sonAccount = new SonAccount();
}
