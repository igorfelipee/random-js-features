import React, { Component } from 'react'
import { FeatureNameDisplay } from './components/FeatureNameDisplay'
import { FeatureDescriptionDisplay } from './components/FeatureDescriptionDisplay'
import { features } from './features'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = { feature: {} }
        this.getFeature = this.getFeature.bind(this)
    }
    componentWillMount() {
        this.getFeature()
    }
    sortFeature(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }
    getFeature() {
        this.setState({ feature: this.sortFeature(features) })
    }
    render() {
        return (
            <section className="App">
                <div>
                    <FeatureNameDisplay
                        featureName={this.state.feature.title}
                    />
                    <FeatureDescriptionDisplay
                        featureDescription={this.state.feature.description}
                    />
                    <a className="featureLink" href={this.state.feature.link}>
                        Learn more
                    </a>
                </div>
                <button className="featureButton" onClick={this.getFeature}>
                    Give me another one!
                </button>
            </section>
        )
    }
}

export default App
