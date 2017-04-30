import "./sass/app.scss";
const calc = document.querySelector(".time");

const inputs = document.querySelectorAll("input[type=radio]");
const prices = {
    day: 3,
    three: 2,
    week: 1,
}
// const rates = {
//     fast: {
//         price: 3,
//         term: "В течении дня"
//     },
//     standart: {
//         price: 2,
//         term: "От 3 до 4 дней"
//     },
//     econom: {
//         price: 1,
//         term: "Неделя"
//     }
// };
const rates = {
    day: {
        price: 3,
        term: "В течении дня"
    },
    three: {
        price: 2,
        term: "От 3 до 4 дней"
    },
    week: {
        price: 1,
        term: "Неделя"
    }
};
const term = document.querySelector("#term");
const priceCont = document.querySelector("#price");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", e => {
        console.log(e.target)
        let id = e.target.id;
        let price = rates[id].price
        priceCont.innerHTML = `${price} rub`
        term.innerHTML = rates[id].term;
    })
}


// accroditon

class Accord {
    constructor() {
        this.container = document.querySelector(".accordion");
        this.items = this.container.querySelectorAll(".accordion_item");
        this._init();
    }
    _init() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].addEventListener("click", e => {
                this._hideOther(i);
                const item = this.items[i];
                // const content = item.querySelector(".item_content");
                item.classList.toggle("open");
            });
        }
    }
    _hideOther(id) {
        for (let i = 0; i < this.items.length; i++) {
            if (id === i)
                continue;
            const item = this.items[i];
            item.classList.toggle("open", false);
            // const content = item.querySelector(".item_content");
            // content.classList.toggle("open", false);
        }
    }
}
new Accord();