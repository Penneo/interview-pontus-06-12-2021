import React from 'react';
import WeatherIcon from 'components/WeatherIcon';
import WeatherDetails from 'components/WeatherDetails';
import {WeatherApiClient} from 'utils/WeatherApiClient';

type Props = {
    city: string;
    countryCode: string;
    advanced: boolean;
    toggleDisplayAdvanced: () => void;
};

type State = {
    data: any;
    isLoaded: boolean;
};

class WeatherDay extends React.Component<Props, State> {
    private apiClient = new WeatherApiClient();

    constructor(props: Props) {
        super(props);

        this.state = {
            data: null,
            isLoaded: false
        };
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const {city, countryCode} = this.props;

        const query = {
            q: `${city},${countryCode}`,
            units: 'metric'
        };

        const response = await this.apiClient.get('/weather', query);

        this.setState({
            data: response,
            isLoaded: true
        });
    }

    render() {
        const {data, isLoaded} = this.state;
        const unit = '°';

        if (!isLoaded) {
            return <h1>Loading...</h1>;
        }

        const [primaryWeather] = data.weather;

        return (
            <div className="WeatherDay">
                <h3>Weather in</h3>

                <div>
                    {this.props.city}, {this.props.countryCode}
                </div>

                <WeatherIcon icon={primaryWeather.icon} />
                <WeatherDetails weather={primaryWeather} />

                {data.main.temp}{unit}


                <div>
                    <button onClick={this.props.toggleDisplayAdvanced}>
                        {this.props.advanced ?
                            <span>Show more information</span>
                            :
                            <span>Hide extra information</span>
                        }
                    </button>
                </div>
            </div>
        );
    }
}


export default WeatherDay;
