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
function showPrice(id) {
    let price = rates[id].price
    priceCont.innerHTML = `${price} BYN`
    term.innerHTML = rates[id].term;
}
const term = document.querySelector("#term");
const priceCont = document.querySelector("#price");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", e => {
        let id = e.target.id;
        showPrice(id);
    })
}
showPrice("three");




// accroditon

class Accord {
    constructor() {
        this.container = document.querySelector(".accordion");
        this.items = this.container.querySelectorAll(".accordion_item");
        this._init();
    }
    check(item, index) {
        this._hideOther(index);
        item.classList.toggle("open");
    }
    _init() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].addEventListener("click", e => {
                this.check(this.items[i], i)
            });
        }
    }
    _hideOther(index) {
        for (let i = 0; i < this.items.length; i++) {
            if (index === i)
                continue;
            const item = this.items[i];
            item.classList.toggle("open", false);
            // const content = item.querySelector(".item_content");
            // content.classList.toggle("open", false);
        }
    }
}
const accord = new Accord();
// accord.check(document.querySelectorAll(".accordion_item")[0],0)


/// header 
function getPosition(element) {
    var rect = element.getBoundingClientRect();
    // console.log(rect.top, rect.right, rect.bottom, rect.left);
    return { top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left }
}
const header = document.querySelector("#main_menu");
header.addEventListener("click", e => {
    console.log(e);
});

window.addEventListener("hashchange", e => {
    // console.log(document.location.hash);
    e.preventDefault();
    let hash = document.location.hash.replace("#", "");
    console.log(hash);
    const pos = getPosition(document.querySelector(`.${hash}`));
    console.log(pos.top);
    window.scrollTo(0, pos.top)
})

console.log("llalala")
