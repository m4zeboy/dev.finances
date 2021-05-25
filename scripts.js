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

const Transaction = {
    all: [
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
        {
            id:3,
            description: "Tenis de corrida",
            amount: -18764,
            date: '25/05/2021'
        },
    ],
    add(transaction) {
        Transaction.all.push(transaction)
        App.reload()
    },
    remove(index) {
        Transaction.all.splice(index, 1);
        App.reload()
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
    },
    clearTransations() {
        DOM.transactionsContainer.innerHTML = "";
    }
}

const Form = {
    spanError: document.querySelector('span#error'),
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),
    getValues() {
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value
        }
    },
    validateFields(){
        const { description, amount, date } = Form.getValues()

        if (description.trim() === "" || amount.trim() === "" ||date.trim() === "") {
            throw new Error("Por favor preencha todos os campos")
        }
    },
 
    submit(event) {
        event.preventDefault()    

        try {
            // verificar se os campos foram preenchidos
            Form.validateFields()  
            // formatar os dados para salvar
            // salvar
            // fechar o modal
            // atualizar a aplicação
        } catch (error) {
            this.spanError.classList.add('active')
            this.spanError.innerHTML = error.message
            // alert(error.message)
        }
        
    }
}

const App = {
    init() {
        Transaction.all.forEach(transaction => DOM.addTransaction(transaction))

        DOM.updateBalance()

    },
    reload() {
        DOM.clearTransations()
        App.init()
    }
}

App.init()
