import {createStore} from "redux";

const initData = {
    products: [
        {pName: "Apples", price: 1.45},
        {pName: "Bananas", price: 1.67},
        {pName: "Grapes", price: 2.32},
        {pName: "Oranges", price: 7.89},
        {pName: "Mangoes", price: 2.34}
    ],
    cart: [],
    total: 0
}

const reducer = (state = initData, action) => {
    return state;
}

const store = createStore(reducer);

export default store;