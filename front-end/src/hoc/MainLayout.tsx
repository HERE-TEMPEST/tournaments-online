import React, { Component } from 'react'
import { Header, Portal, TournamentsEvents } from '../components'

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

      <Portal>
        <TournamentsEvents />
      </Portal>
      {children}
    </>
  )
}
