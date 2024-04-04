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
    total: 0,
    login: ["Admin", "User1", "User2"],
    loginDet: ""
}

const reducer = (state = initData, action) => {
    console.log(action);
    if(action.type === "ADD") {
        return {
            ...state,
            cart: [...state.cart, action.payLoad],
            total: state.total + action.payLoad.price
        }
    }

    if(action.type === "REMOVE") {
        return {
            ...state,
            cart: state.cart.filter((value, index) => index !== action.payLoad.index),
            total: state.total - action.payLoad.price
        }
    }

    if(action.type === "USERADD") {
        return {
            ...state,
            loginDet: action.payLoad
        }
    }
    return state;
}

const store = createStore(reducer);

export default store;