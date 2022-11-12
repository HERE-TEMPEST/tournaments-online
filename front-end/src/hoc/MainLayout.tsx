import React, { Component } from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../components'
import { IStore } from '../redux/store'

interface MainLayoutProps {
  children:
    | Array<Component | HTMLElement>
    | Component
    | HTMLElement
    | React.ReactElement
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const isAuth = useSelector((state: IStore) => !!state.user.token)

  return (
    <>
      <Header isAuth={isAuth} />

      {children}
    </>
  )
}
