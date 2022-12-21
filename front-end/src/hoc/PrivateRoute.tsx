import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { LOGIN_PAGE_ROUTE } from '../constants'
import { useAuth, useHome, useUser } from '../hooks'
import { useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'
import { serverConfig } from '../config'
import { GlobalSocketContext, GlobalSocketContextInterface } from '../contexts'
import { IChatMessage } from '../models'

const initialContext: GlobalSocketContextInterface = {
  sendMessage: () => {
    console.log('error in sending message to chat')
  },
}

export const PrivateRoute = () => {
  const [context, setContext] = useState(initialContext)
  const location = useLocation()
  const [socket, setSocket] = useState<Socket | null>(null)
  const { token, isAuth } = useAuth()
  const { addNewMessage, region } = useHome()
  const { user } = useUser()

  useEffect(() => {
    if (isAuth && user) {
      const conntection = io(
        `ws://${serverConfig.host}:${serverConfig.port}/chat`,
        {
          autoConnect: false,
          extraHeaders: {
            authorization: `Bearer ${token}`,
          },
        }
      )

      const { sendMessage } = setEvents(
        conntection,
        {
          username: `${user.name || ''} ${user.surname || ''}`.trim(),
          region,
          profileUri:
            user.profile?.uri ||
            window.location.origin + '/default-profile.png',
        },
        { addNewMessage }
      )
      setContext((prev) => ({ ...prev, sendMessage }))

      conntection.connect()

      setSocket(() => conntection)
    }

    return () => {
      if (socket && socket.connected) {
        socket.removeAllListeners()
        socket.disconnect()
      }
      setSocket(null)
    }
  }, [user, isAuth])

  useEffect(() => {
    if (user && socket && socket.connected) {
      socket.emit('join', {
        username: `${user.name || ''} ${user.surname || ''}`.trim(),
        region,
        profileUri:
          user.profile?.uri || window.location.origin + '/default-profile.png',
      })
    }
  }, [region])

  useEffect(() => {
    return () => {
      if (socket && socket.connected) {
        socket.removeAllListeners()
        socket.disconnect()
      }
      setSocket(null)
    }
  }, [])

  if (!isAuth) {
    return <Navigate to={LOGIN_PAGE_ROUTE} state={{ from: location }} />
  }

  return (
    <GlobalSocketContext.Provider value={context}>
      <Outlet />
    </GlobalSocketContext.Provider>
  )
}

function setEvents(
  socket: Socket,
  joinPayload: any,
  { addNewMessage }: { addNewMessage: (msg: IChatMessage) => void }
) {
  socket.on('connect', () => {
    console.log('connected to global websocket')

    socket.emit('join', joinPayload)
  })

  socket.on('disconnect', () => {
    console.log('disconnected from global websocket')
  })

  socket.on('join', ({ id }) => {
    console.log('join', id)
  })

  socket.on('leave', ({ id }) => {
    console.log('leave', id)
  })

  socket.on('message', (msg) => {
    addNewMessage({ ...msg, type: 'message' })
  })

  socket.on('user.join', (msg) => {
    addNewMessage({
      ...msg,
      body: `User ${msg.username} joined`,
      type: 'join',
    })
  })

  socket.on('user.leave', (msg) => {
    addNewMessage({ ...msg, body: `User ${msg.username} left`, type: 'left' })
  })

  const sendMessage = (input: string) => {
    socket.emit('message', { body: input })
  }

  return {
    sendMessage,
  }
}
