export const USERADD = "USERADD";
export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const validateUser = (text) => {
    return dispatch => {
        setTimeout(() => {
            dispatch({type: USERADD, payLoad: text});
        }, 2000);
    }
}