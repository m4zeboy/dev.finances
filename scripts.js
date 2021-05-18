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

const DOM = {
    innerHTMLTransaction() {
        const html = `
        <tr>
            <td class="description">Energia Elétrica</td>
            <td class="expense">- R$ 500,00</td>
            <td class="date">09/02/2021</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
        </tr>
    `
    }
}