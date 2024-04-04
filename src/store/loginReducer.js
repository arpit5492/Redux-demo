const initData = {
    login: ["Admin", "User1", "User2", "Manager"],
    loginDet: ""
}

const loginReducer = (state = initData, action) => {
    console.log(action);
    if(action.type === "USERADD") {
        return {
            ...state,
            loginDet: action.payLoad
        }
    }
    return state;
}

export default loginReducer;