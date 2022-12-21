import React from 'react'

export interface GlobalSocketContextInterface {
  sendMessage: (input: string) => void
}

export const GlobalSocketContext =
  React.createContext<GlobalSocketContextInterface | null>(null)
