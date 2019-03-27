import React, { Component } from 'react'
import { FeatureNameDisplay } from './components/FeatureNameDisplay'
import { FeatureDescriptionDisplay } from './components/FeatureDescriptionDisplay'
import { features } from './features'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = { feature: {} }
    }
    componentWillMount() {
        this.setState({ feature: this.sortFeature(features) })
    }
    sortFeature(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }
    render() {
        return (
            <section className="App">
                <FeatureNameDisplay featureName={this.state.feature.title} />
                <FeatureDescriptionDisplay
                    featureDescription={this.state.feature.description}
                />
                <a className="featureLink" href={this.state.feature.link}>
                    Learn more
                </a>
            </section>
        )
    }
}

export default App
