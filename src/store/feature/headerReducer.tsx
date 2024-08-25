// reducer.ts
import { SET_HEADER_OUT_OF_VIEW } from './actions';

const initialState = {
    isHeaderOutOfView: false,
};

const headerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_HEADER_OUT_OF_VIEW:
            return {
                ...state,
                isHeaderOutOfView: action.payload,
            };
        default:
            return state;
    }
};

export default headerReducer;
