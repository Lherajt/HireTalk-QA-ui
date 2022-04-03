
import { useQuery } from '@apollo/client'
import React from 'react'
import { FeatureType } from '../../components/Types'
import { FEATURES } from './features.graphql'
import { FEATURE } from './features.graphql'
import { useAddFeature, useRemoveFeature, useUpdateFeature } from './features.hooks'

  
  export type FeatureInput = Partial<FeatureType>
  
  type FeatureData = {
    features: FeatureType[]
  }


export const useFeatures = () => {
    const { loading, error, data } = useQuery<FeatureData>(FEATURES)
    const { loading: featureLoading, error: featureError, data: feature } = useQuery<FeatureType>(FEATURE, {
        variables: {
            id: '',
            },
            })

    const { addFeature, loading: addFeatureLoading, error: addFeatureError } = useAddFeature()
    const { updateFeature, loading: updateFeatureLoading, error: updateFeatureError } = useUpdateFeature()
    const { removeFeature, loading: deleteFeatureLoading, error: deleteFeatureError } = useRemoveFeature()
  
    return (
        {
          featureLoading,
          featureError,
          feature,
        loading,
        error,
        features: data?.features || [],
        addFeature,
        addFeatureLoading,
        addFeatureError,
        updateFeature,
        updateFeatureLoading,
        updateFeatureError,
        removeFeature,
        deleteFeatureLoading,
        deleteFeatureError,
    }
    )

  }