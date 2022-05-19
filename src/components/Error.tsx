import React from 'react'
import { useFeatures } from '../features/features/useFeatures'
import { useTestCases } from '../testCases/useTestCases'

interface Props {
    featureId?: any
    testCaseId?: any
}

export const Error: React.FC<Props> = (props) => {
    const { featureId, testCaseId } = props
  const { featureError, error  } = useFeatures(featureId?.toString())

  const {
    addTestCaseError,
    updateTestCaseError,
  } = useTestCases(testCaseId?.toString())


  const errorMessage = () => {
    if (featureError && featureId) {
        return `Feature Error: ${featureError}`
    }
    if (error) {
        return `Features Error: ${error}`
    }
    if (addTestCaseError) {
        return `Add Test Case Error: ${addTestCaseError}`
    }
    if (updateTestCaseError) {
        return `Update Test Case Error: ${updateTestCaseError}`
    }
    return ''
    }

  return (
    <p>{errorMessage()}</p>
  )
}
