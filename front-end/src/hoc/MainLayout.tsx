import React, { Component } from 'react'
import { Header, Loader, Portal, TournamentsEvents } from '../components'
import { useAuth } from '../hooks'

interface MainLayoutProps {
  children:
    | Array<Component | HTMLElement>
    | Component
    | HTMLElement
    | React.ReactElement
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { loading } = useAuth()

  return (
    <>
      <Header />

      <Portal>
        <TournamentsEvents />
      </Portal>

      {loading ? <Loader /> : children}
    </>
  )
}
