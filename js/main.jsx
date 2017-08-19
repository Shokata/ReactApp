import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {

    class Fundament extends React.Component {
        render() {
            return (
                <div>
                    <p>Fundament</p>
                </div>
            )
        }
    }

    class Dach extends React.Component {
        render() {
            return (
                <div>
                    <p>Dach</p>
                </div>
            )
        }
    }

    class Child extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: '',
                state: '',
                startDate: '',
                endDate: '',
                value: 'fundament'
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event) {
            this.setState({
                value: event.target.value
            });
            console.log('zmieniono procedurę...')
        }

        handleSubmit(event) {
            event.preventDefault();
            console.log('Wyświetlam procedurę')
            if (this.state.value === 'fundament') {
                <Fundament/>
            } else if (this.state.value === 'dach') {
                <Dach/>
            }
        }

        render() {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Wybierz procedurę:
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option disabled defaultValue>Wybierz poniżej</option>
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
        constructor(props) {
            super(props);
            this.state = {
                childVisible: false,
                checked: false
            }
        }

        render() {
            return (
                <div>
                    <div>
                        <button onClick={() => this.onClick()}>{this.state.checked ? 'Ukryj Procedury' : 'Dodaj' +
                            ' Procedury'}</button>
                    </div>
                    {
                        this.state.childVisible ? <Child/> : null
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
    }

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
