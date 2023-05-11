import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { App } from './App';
import './index.css';
import './indexPruebaFlexbox.css';
import "./toast.css";
import { customMuiTheme, customMuiTheme2 } from './muiTheme';

ReactDOM.render(
    <ThemeProvider theme={customMuiTheme}>
        <BrowserRouter>
            <ToastContainer toastClassName="react_toastify_toast_wrapper" autoClose={1500} hideProgressBar position="top-left" />
            <App />
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);
