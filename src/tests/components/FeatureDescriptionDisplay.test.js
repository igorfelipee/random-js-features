import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { FeatureDescriptionDisplay } from '../../components/FeatureDescriptionDisplay'

Enzyme.configure({ adapter: new Adapter() })

describe('FeatureNameDisplay should', () => {
    test('Render a p tag with the same featureDescription as passed by props', () => {
        const featureNameDisplay = Enzyme.shallow(
            <FeatureDescriptionDisplay featureDescription="Awesome description" />
        )
        expect(featureNameDisplay.find('p').text()).toEqual(
            'Awesome description'
        )
    })
})
