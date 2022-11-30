import React, { Component } from 'react'
import { Header } from '../components'
import { useAppSelector } from '../redux'

interface MainLayoutProps {
  children:
    | Array<Component | HTMLElement>
    | Component
    | HTMLElement
    | React.ReactElement
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const isAuth = useAppSelector((state) => state.auth.auth?.isAuth || false)

  return (
    <>
      <Header isAuth={isAuth} />

      {children}
    </>
  )
}
