import * as React from 'react';
import CollectorNavigation from './collectorNavigation';

export default class CollecttorScreen extends React.Component {
    static navigationOptions = {
        title: 'Collector Screen',
    };

    render() {
        return (          
            <CollectorNavigation />
        );
    }
}
