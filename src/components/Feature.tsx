import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
// import { FeatureType } from './Types'
import { useFeatures } from '../features/features/useFeatures'


export const Feature: React.FC = () => {


  const { id } = useParams()

  const { feature } = useFeatures(id)

  const featureCopy = {...feature}


  console.log('feature: ', feature)
  console.log('id: ', featureCopy.id)



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

const featureExample = [
  {
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
  },
]
