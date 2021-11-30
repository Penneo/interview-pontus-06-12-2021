import React from 'react';
import WeatherDay from 'components/WeatherDay';
import './App.scss';

// @todo: CityPicker. Add a way to choose more than just Copenhagen as a city

type Props = {};
type State = {
    advanced: boolean;
};

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            advanced: false
        };
    }

    toggleDisplayAdvanced = () => {
        this.setState({advanced: !this.state.advanced});
    };

    render() {
        return (
            <div className="App">
                <div className="App-container">
                    <WeatherDay
                        city={'Copenhagen'}
                        countryCode={'DK'}
                        toggleDisplayAdvanced={this.toggleDisplayAdvanced}
                        advanced={this.state.advanced}
                    />
                </div>
            </div>
        );
    }
}

export default App;
