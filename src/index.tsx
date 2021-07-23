import React from 'react';
import ReactDOM from 'react-dom';
import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import './css/index.css';
import App from './components/App';

const root = document.querySelector('#root');

ReactDOM.render(
    <DndProvider backend={Backend}>
        <App />
    </DndProvider>,
    root
);
