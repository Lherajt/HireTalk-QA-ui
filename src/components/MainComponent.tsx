import React from 'react'
import MainNavbar from './MainNavbar'
import FeaturesList from './FeaturesList'
import Feature from './Feature'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GraphqlExample from './graphqlExample'

export default function MainComponent() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<FeaturesList />} />
        <Route path='/features/:id' element={<Feature />} />

      </Routes>

      {/* <GraphqlExample /> */}
    </BrowserRouter>
  )
}
