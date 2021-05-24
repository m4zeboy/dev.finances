const Modal = {
    open(){
        // Abrir modal
        // Adcionar a class .active ao modal
        document.querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close() {
        // fechar modal
        // remover a class .active do modal
        document.querySelector('.modal-overlay')
            .classList
            .remove('active')
    },

    toggleActive() {
        document   
            .querySelector('.modal-overlay')
            .classList
            .toggle('active')
    }
}

const transactions = [
    {
        id:0,
        description: "Energia Elétrica",
        amount: -30076,
        date: '07/04/2021'
    },
    {
        id:1,
        description: "Água",
        amount: -23475,
        date: '08/04/2021'
    },
    {
        id:2,
        description: "Trabalho",
        amount: 378657,
        date: '08/04/2021'
    },
]

const Transaction = {
    all: transactions,
    add(transaction) {
        Transaction.all.push(transaction)
        console.log(Transaction.all)
    },
    incomes() {
        // Somar as entradas
        let income = 0;
        Transaction.all.forEach(transaction =>{
            if (transaction.amount > 0) {
                income += transaction.amount;
            }
        })
        return income;
    },

    expense() {
        // Somar as saídas
        let expense = 0;
        Transaction.all.forEach(transaction =>{
            if (transaction.amount < 0) {
                expense += transaction.amount;
            }
        })
        return expense;
    },
    total() {
        // entradas - saídas
        return Transaction.incomes() + Transaction.expense()
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0? "-": "";

        value = String(value).replace(/\D/g, '')
        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
        return signal + value;
    }
}

const DOM = {
    transactionsContainer: document.querySelector('table#data-table tbody'),
    addTransaction(transaction, index){
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);
        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? 'income' : 'expense';

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
            `;
        return html;
    },
    updateBalance(){
        document
            .querySelector('#incomeDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.incomes()) 

        document
            .querySelector('#expenseDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.expense())
        document
            .querySelector('#totalDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.total())
    }
}

transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})

DOM.updateBalance()

Transaction.add({
    id: 3,
    description: "Tenis de corrida",
    amount: -23423,
    date: "23/05/2021"
})