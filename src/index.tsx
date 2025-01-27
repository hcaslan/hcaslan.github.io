import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterPage from "./RouterPage";
import {Provider} from "react-redux";
import store from "./store";
import VisitorNotifier from './components/molecules/VisitorNotifier';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <VisitorNotifier />
        <RouterPage/>
    </Provider>
);