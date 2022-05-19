import React from 'react'
import { useFeatures } from '../features/features/useFeatures'
import { useTestCases } from '../testCases/useTestCases'

interface Props {
    featureId?: any
    testCaseId?: any
}

export const Loading: React.FC<Props> = (props) => {
    const { featureId, testCaseId } = props
  const { featureLoading, loading } = useFeatures(featureId?.toString())
  const {
    addTestCaseLoading,
    updateTestCaseLoading,
  } = useTestCases(testCaseId?.toString())

  const loadingMessage = () => {
    if (featureLoading && featureId) {
        return `Feature Loading: ${featureLoading}`
    }
    if (loading) {
        return `Features Loading: ${loading}`
    }
    if (addTestCaseLoading) {
        return `Add Test Case Loading: ${addTestCaseLoading}`
    }
    if (updateTestCaseLoading) {
        return `Update Test Case Loading: ${updateTestCaseLoading}`
    }
    return ''
    }

  return (
    <p>{loadingMessage()}</p>
  )
}
