import React from 'react'

export const FeatureDescriptionDisplay = props => (
    <article className="featureDescription">
        <span className="featureDescriptionTitle">Description</span>
        <p className="featureDescriptionText">{props.featureDescription}</p>
    </article>
)
