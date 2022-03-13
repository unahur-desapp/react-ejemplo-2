import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ToastContainer } from "react-toastify";
import './index.css';
import './indexPruebaFlexbox.css';
import 'react-toastify/dist/ReactToastify.css';
import "./toast.css";

ReactDOM.render(
    <>
        <ToastContainer toastClassName="react_toastify_toast_wrapper" autoClose={1500} hideProgressBar position="top-left" />
        <App />
    </>,
    document.getElementById('root')
);
