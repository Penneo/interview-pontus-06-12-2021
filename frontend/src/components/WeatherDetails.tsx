import React from 'react';

type Props = {
    weather: any,
    advanced: boolean;
};

type State = {
};

class WeatherDescription extends React.Component<Props, State> {
    public static defaultProps = {
        advanced: false
    };

    render() {
        return (
            <div className="WeatherDescription">
                {this.props.advanced}
            </div>
        );
    }
}


export default WeatherDescription;
