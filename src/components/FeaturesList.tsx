import React, { useState } from 'react'
import FeatureCard from './FeatureCard'
import AddFeatureModal from './AddFeatureModal'
import { Button } from 'react-bootstrap'
import { useFeatures } from '../features/features/useFeatures'
import { Error } from './Error'
import { Loading } from './Loading'

export const FeaturesList: React.FC = () => {
  const [show, setShow] = useState(false)
  const [selectedFeatureId, setSelectedFeatureId] = useState<number | undefined>(undefined)

  const modalToggle = () => setShow(!show)

  const {features } = useFeatures()

  return (
    <div className='container mt-5'>
      <h1 className='text-center m-5'>Features</h1>
      <Button
        onClick={() => {
          setSelectedFeatureId(undefined)
          setShow(true)
        }}
        className='p-3 my-4 shadow'
      >
        Add Feature
      </Button>

      <div className={'row'}>
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            setShow={setShow}
            setSelectedFeatureId={setSelectedFeatureId}
          />
        ))}
      </div>

      <AddFeatureModal modalToggle={modalToggle} id={selectedFeatureId} show={show} />

      <Error />
      <Loading />
    </div>
  )
}

export default FeaturesList
