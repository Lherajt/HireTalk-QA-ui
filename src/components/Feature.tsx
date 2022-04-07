import React from 'react'
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useFeatures } from '../features/features/useFeatures'


export const Feature: React.FC = () => {

  const { id } = useParams()

  const { feature } = useFeatures(id)

  const [show, setShow] = React.useState(false)

  const modalToggle = () => setShow(!show)

  const name = feature?.name
  const description = feature?.description
  const testCases = feature?.testCases

  return (
    <>
      <div>
        {id}
      </div>
      <h1>{name}</h1>
      <h3>{description}</h3>
      <Button
      onClick={modalToggle}
      >
        Add test case
      </Button>
      <p>
        {testCases?.map((testCase) => (
          <div key={testCase.id}>
            <h4>{testCase.name}</h4>
            <p>{testCase.description}</p>
            <p>{testCase.duration}</p>
            <p>{testCase.expectedResult}</p>
            <p>{testCase.operatingSystems}</p>
            <p>{testCase.prerequisites}</p>
          </div>
            ))}
      </p>

      <Modal show={show} onHide={modalToggle}>
      <Modal.Header closeButton>
        <Modal.Title>Add Feature</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup size='sm' className='mb-3'>
          <InputGroup.Text id='inputGroup-sizing-sm'>Name:</InputGroup.Text>
          <FormControl
            aria-label='Small'
            aria-describedby='inputGroup-sizing-sm'
            // value={testCases?.name} 
            // onChange={(e) => setFeature({ name: e.currentTarget.value })}
          />
        </InputGroup>
        <InputGroup size='sm' className='mb-3'>
          <InputGroup.Text id='inputGroup-sizing-sm'>Description:</InputGroup.Text>
          <FormControl
            aria-label='Small'
            aria-describedby='inputGroup-sizing-sm'
            // value={feature?.description} 
            // onChange={(e) => setFeature({ description: e.currentTarget.value })}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='primary'
          onClick={() => {
            modalToggle()
            // saveFeature()
          }}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default Feature

