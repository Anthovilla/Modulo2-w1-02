console.log('hola')

class SonAccount {
    balanceInit: number
    constructor() {
        this.balanceInit = 0
    }

    oneDeposit(amount: number): void {
        this.balanceInit += amount
    }
    oneWithDraw(amount: number): void {
        if(this.balanceInit >= amount) {
            this.balanceInit -= amount
        } else {
            console.log('niente cash')
        }
    } 
    saldo() {
        return this.balanceInit
    }
}
const figlioAcc = new SonAccount();
figlioAcc.oneDeposit(100);
figlioAcc.oneWithDraw(50);

console.log(figlioAcc);
console.log(`Saldo attuale dell'SonAccount: ${figlioAcc.saldo()}`);


class MotherAccount extends SonAccount {
    addInterest(): void {
        const interest:number = this.balanceInit * 0.1 //il calcolo rappresenta l'interesse che verrà aggiunto al saldo.
        this.balanceInit += interest  // il saldo iniziale viene incrementato 'interesse calcolato'
    }
    twoDeposit(amount: number): void {
        this.balanceInit += amount
    }

    twoWithDraw(amount: number): void {
        if (this.balanceInit >= amount) {
            this.balanceInit -= amount
        } else {
            console.log('poco saldo')
        }
    }
    saldo2(): void {
        document.getElementById('saldoMother')!.textContent = `saldo attuale "mother": ${this.balanceInit}`
    }
}

const sonAccount = new SonAccount();
sonAccount.oneDeposit(100);
sonAccount.oneWithDraw(50);
sonAccount.saldo(); // Saldo attuale dell'SonAccount: 50

console.log(sonAccount)

const motherAccount = new MotherAccount();
motherAccount.oneDeposit(200);
motherAccount.oneWithDraw(50);
motherAccount.twoDeposit(300);
motherAccount.twoWithDraw(100);
motherAccount.addInterest();
motherAccount.saldo2(); // Saldo attuale dell'MotherAccount: 660

console.log(motherAccount)




//Parte Form

function motherSon(event: Event): void {
    event.preventDefault() // Inpedisci il comportamento di default del form 'di ricaricare di nuovo la pg'


    const sonAccount = new SonAccount()
}