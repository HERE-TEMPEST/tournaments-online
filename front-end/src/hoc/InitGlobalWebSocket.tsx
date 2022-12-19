import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'

import io, { Socket } from 'socket.io-client'
import { serverConfig } from '../config'

import { useAuth } from '../hooks'

export const InitGlobalWebSocket = () => {
  const socket = useRef<Socket | null>(null)
  const { token } = useAuth()

  useEffect(() => {
    socket.current = io(`ws://${serverConfig.host}:${serverConfig.port}/chat`, {
      autoConnect: false,
      extraHeaders: {
        authorization: `Bearer ${token}`,
      },
    })

    setEvents(socket.current)
    socket.current.connect()

    return () => {
      if (socket.current && socket.current.connected) {
        socket.current.removeAllListeners()
        socket.current.disconnect()
      }
      socket.current = null
    }
  }, [token])

  useEffect(() => {
    console.log('sdsda')
  }, [])

  return <Outlet />
}

function setEvents(socket: Socket) {
  socket.on('connect', () => {
    console.log('connected to global websocket')
  })
}
