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
        amount: -30000,
        date: '07/04/2021'
    },
    {
        id:1,
        description: "Água",
        amount: -22000,
        date: '08/04/2021'
    },
    {
        id:2,
        description: "Trabalho",
        amount: 320000,
        date: '08/04/2021'
    },
]

const Transaction = {
    incomes() {
        // Somar as entradas
    },

    expense() {
        // Somar as saídas
    },
    total() {
        // entradas - saídas
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0? "-": "";
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
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
            `;
        return html;
    }
}

transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})