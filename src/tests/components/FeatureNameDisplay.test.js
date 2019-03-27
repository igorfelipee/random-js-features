import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { FeatureNameDisplay } from '../../components/FeatureNameDisplay'

Enzyme.configure({ adapter: new Adapter() })

describe('FeatureNameDisplay should', () => {
    test('Render the same featureName as passed by props', () => {
        const featureNameDisplay = Enzyme.shallow(
            <FeatureNameDisplay featureName="Async/Await" />
        )
        expect(featureNameDisplay.text()).toEqual('Async/Await')
    })
})
