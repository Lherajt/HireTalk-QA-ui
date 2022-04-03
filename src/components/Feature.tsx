import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { FeatureType } from './Types'
import { useFeatures } from '../features/features/useFeatures'


// type FeatureCardProps = {
//   feature: FeatureType
// }

// interface FeatureProp {
//     id: number
// }

export const Feature: React.FC = () => {
{/* <FeatureCardProps> */}
// const {
//     id,
//     name,
//     description,
//     // duration,
//     // expectedResult,
//     // operatingSystems,
//     // prerequisites,
//     // testSteps,

// }   = props.feature

const { id } = useParams();

const {
    featureLoading,
          featureError,
          feature,
    loading,
        error,
        features,
        addFeature,
        updateFeature,
        removeFeature,
  } = useFeatures()

  console.log({feature})

//   const selectedFeature = feature(id)

//   const selectedFeature = features.find(feature => feature.id === {id})

    return (
        <>
        <div>
            {id}
            {/* {feature} */}
        </div>
        </>
    )
}

export default Feature

const featureExample = [{

    id: 2,
        name: 'new test case',
        description: '',
        duration: 0,
        expectedResult: '',
        operatingSystems: '',
        prerequisites: '',
        testSteps: [
          {
            id: 4,
            name: 'second test step',
          },
        ],
}
]