import './main.scss';
const loan = require('loanjs');


const account_input = document.querySelector('.transfer__account');
const description_input = document.querySelector('.transfer__description');
const amount_input = document.querySelector('.transfer__amount');
const amount_input_loan = document.querySelector('.loan__amount');
const years_input_loan = document.querySelector('.loan__period');


const form_transfer = document.querySelector('.transfer')
const form_loan = document.querySelector('.loan')



const Transfer = class {
    constructor(amount, type = 'wyplata', account, description) {
        this.date = new Date;
        this.account = account;
        this.description = description;
        this.amount = amount;
        this.type = type;

    }

}

const App = class {
    #state = {
        transfers: [],
        total: 0,
        loan: [],
    };

    constructor() {
        form_transfer.addEventListener('submit', this.newTransfer.bind(this));
        form_loan.addEventListener('submit', this.getLoan.bind(this));

    }


    newTransfer(e) {

        e.preventDefault()
        const accNumber = account_input.value;
        const description = description_input.value;
        const amount = amount_input.value * -1;

        const transfer = new Transfer(amount, 'wypłata', accNumber, description)
        this.#state.transfers.push(transfer);
        account_input.value = description_input.value = amount_input.value = "";
        this.sumTotal();
        this.renderTransfer(transfer);


    }
    getLoan(e) {

        e.preventDefault();
        const amount = amount_input_loan.value * 1;
        const years = years_input_loan.value * 1;
        const months = years * 12;
        const intrest = 5;
        const diminishing = false;


        // credit
        const newLoan = new loan.Loan(amount, months, intrest, diminishing);
        this.#state.loan.push(newLoan);
        console.log(this.#state)


        // new transfer
        const transfer = new Transfer(amount, 'wpłata', undefined, 'pożyczka')
        this.#state.transfers.push(transfer);
        // console.log(this.#state)

        // clear inputs
        years_input_loan.value = amount_input_loan.value = "";

        this.sumTotal()
        this.renderTransfer(transfer);
        this.renderSchedule()

    }

    sumTotal() {
        const transferAmount = this.#state.transfers.map((e) => e.amount).reduce((acc, value, index, arr) => acc + value, 0)
        this.#state.total = transferAmount;


    }
    renderTransfer(transfer) {
        //render date
        const { date } = transfer;
        console.log(date)

        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, 0)
        const day = `${date.getDate()}`.padStart(2, 0);
        const hour = date.getHours();
        const min = date.getMinutes();
        const dateHtml = `${day}/${month}/${year}`;

        //render transfer
        const transferList = document.querySelector('.history__list')
        const html = `<li class="history__item">
        <div class="history__date">${dateHtml}</div>
        <div class="history__titel">${transfer.type}</div>
        <div class="history__description">${transfer.description}</div>
        <div class="history__amount">${transfer.amount}</div>
        </li>`
        transferList.insertAdjacentHTML("afterbegin", html);

        //render total
        const total = document.querySelector('.total__amount');
        total.textContent = this.#state.total


    }
    renderSchedule() {
        const scheduleBox = document.querySelector('.schedule');
        this.#state.loan[0].installments.map((e) => {
            const html = `<div class="schedule__box">
            <div class="schedule__date">12.12.2003</div>
            <div class="schedule__payment">${e.installment}</div>
            <div class="schedule__left">${e.remain.toFixed(2)}</div>
        </div>`
            scheduleBox.insertAdjacentHTML('beforeend', html)

        })
    }

}

const app = new App()