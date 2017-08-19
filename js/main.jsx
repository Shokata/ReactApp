import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {

    class Child extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: '',
                state: '',
                startDate: '',
                endDate: '',
                value: ''
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event) {
            this.setState({value: event.target.value});
        }

        handleSubmit(event) {
            event.preventDefault();
            console.log('Pokazuję procedurę');
        }

        render() {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Wybierz procedurę:
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="fundament">1. Procedura budowy fundamentów</option>
                                <option value="dach">2. Procedura budowy dachu</option>
                            </select>
                        </label>
                        <input type="submit" value="Wyświetl"/>
                    </form>
                </div>
            );
        }
    }
    class ShowHide extends React.Component {
        constructor() {
            super();
            this.state = {
                childVisible: false,
                checked: false
            }
        }

        render() {
            return(
                <div>
                    <div>
                        <button onClick={() => this.onClick()}>{this.state.checked ? 'Ukryj Procedury' : 'Dodaj' +
                            ' Procedury'}</button>
                    </div>
                    {
                        this.state.childVisible
                            ? <Child />
                            : null
                    }
                </div>
            )
        }
        onClick() {
            this.setState({
                childVisible: !this.state.childVisible,
                checked: !this.state.checked
            });
        }
    };

    class App extends React.Component {
        render() {
            return (
                <div>
                    <ShowHide/>
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app'));
});
