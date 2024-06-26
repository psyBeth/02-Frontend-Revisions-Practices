const initialState = {
    count: 10,
};

//? declare types as CONSTANTS
export const INC = "INC";
export const DEC = "DEC";
export const CLR = "CLR";

//? declare the action creator functions
export const increment = () => {
    return { type: INC }
};

export const decrement = () => ({ type: DEC });
export const clear = () => ({ type: CLR });

//? REDUCER
export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return { count: state.count + 1 }

        case DEC:
            return { count: state.count - 1 }

        case CLR:
            return { count: 0 }

        default:
            return state;

        //! The reducer function must return a state object. Even if a wrong type is received, it should return the initial version of the state.
    }
};