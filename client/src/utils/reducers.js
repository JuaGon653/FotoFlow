import { LOGIN_USER, LOGOUT_USER } from "./actions";

export const initialState = { user: null };

export const reducer = (state, action) => {
    console.log('action: ', action);
    switch (action.type) {
        case LOGIN_USER: {
            const newUser = { ...action.payload };

            return { user: newUser.data };
        }
        case LOGOUT_USER: {
            return { user: null };
        }
        default: {
            return state;
        }
    }
};