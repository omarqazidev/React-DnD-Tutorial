import React, { Component } from 'react';
import '../css/App.css';
import Item from './Item';
import Target from './Target';

class App extends Component {
    state = {
        items: [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' },
            { id: 4, name: 'Item 4' },
        ],
        cards: [
            {
                id: 1,
                text: 'Write a cool JS library',
            },
            {
                id: 2,
                text: 'Make it generic enough',
            },
            {
                id: 3,
                text: 'Write README',
            },
            {
                id: 4,
                text: 'Create some examples',
            },
            {
                id: 5,
                text:
                    'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
            },
            {
                id: 6,
                text: '???',
            },
            {
                id: 7,
                text: 'PROFIT',
            },
        ],
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">React-DnD Tutorial</h1>
                </header>
                <div className="App-intro">
                    <div className="app-container">
                        <div className="item-container">
                            {this.state.items.map((item, index) => (
                                <Item key={item.id} item={item} />
                            ))}
                        </div>

                        <Target />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
