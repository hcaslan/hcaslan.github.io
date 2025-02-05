import {configureStore} from "@reduxjs/toolkit";
import {
    headerReducer,
    scrollReducer

} from "./feature";

import {useSelector} from "react-redux";


const store = configureStore({
    reducer: {
        headerReducer: headerReducer,
        scroll: scrollReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();
export default store;