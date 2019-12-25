import React, { Component } from 'react';
import './App.scss';

class App extends Component {
    render(){
        return(
            <div className="App">
                <div className="title">
                    Reminder Pro
                </div>
                <div className="form">
                    <input
                        className="form__input"
                        type="text"
                        placeholder="I have to..."
                    />
                    <button
                        className="form__button"
                        type="button"
                    >
                        Add Reminder
                    </button>
                </div>
            </div>
        )
    }
}

export default App;