import React, { Component } from 'react'
import { Header } from '../components'

interface MainLayoutProps {
  children:
    | Array<Component | HTMLElement>
    | Component
    | HTMLElement
    | React.ReactElement
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />

      {children}
    </>
  )
}
