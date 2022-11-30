import { useEffect, useRef, useState } from 'react'
import { Loader } from '../../../components'
import { fetchUserInfo, useAppDispatch, useAppSelector } from '../../../redux'
import scss from './Chat.module.scss'
import { ChatMessage } from './Message'
import { io, Socket } from 'socket.io-client'

export const Chat = () => {
  const re = useRef<any>(null)
  const [messages, setMessages] = useState<Array<any>>([])
  const [messageBody, setMessageBody] = useState('')
  const user = useAppSelector((state) => state.user.user)
  const region = useAppSelector((state) => state.tournaments.region)
  const token = useAppSelector((state) => state.auth.auth.token)
  const isLoading = useAppSelector((state) => state.user.loading)
  const dispath = useAppDispatch()
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    re.current.scrollTop = re.current.scrollHeight
  }, [messages])

  useEffect(() => {
    dispath(fetchUserInfo())
  }, [])

  useEffect(() => {
    if (user) {
      socketRef.current = io('ws://127.0.0.1:3000/chat', {
        extraHeaders: {
          authorization: `Bearer ${token}`,
        },
      })

      socketRef.current.on('connect', () => {
        if (socketRef.current) {
          socketRef.current.removeAllListeners()

          socketRef.current.on('joined', ({ id }) => {
            console.log('joined', id)
          })
          socketRef.current.on(
            'user.joined',
            ({ region, profileUri, username, userId }) => {
              console.log('user.joined', {
                region,
                profileUri,
                username,
                userId,
              })
            }
          )
          socketRef.current.on('user.leaved', ({ userId }) => {
            console.log('user.leaved', { userId })
          })

          socketRef.current.on(
            'message',
            ({ userId, body, profileUri, username }) => {
              setMessages((currentMessages: Array<any>) => [
                ...currentMessages,
                {
                  userId,
                  id: currentMessages.length,
                  body: body,
                  username: username,
                  profileUri:
                    profileUri || location.origin + '/default-profile.png',
                },
              ])
            }
          )

          socketRef.current?.emit('join', {
            region,
            profileUri: user.profile?.uri,
            username: `${user?.name || ''} ${user?.surname || ''}`,
          })
        }
      })
    }
  }, [user])

  const postMessage = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      if (socketRef.current) {
        socketRef.current.emit('message', { body: messageBody })
      }
      setMessageBody('')
    }
  }

  if (isLoading) {
    return (
      <div className={scss.wrapper}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={scss.wrapper}>
      <div className={scss.chatPlace}>
        <div className={scss.chat} ref={re}>
          {messages.map((message) => (
            <ChatMessage
              message={message}
              key={message.id}
              isOwner={user?._id === message.userId}
            />
          ))}
        </div>
      </div>
      <div className={scss.input}>
        <input
          placeholder="Напишите сообщение..."
          value={messageBody}
          onKeyDown={(e) => postMessage(e)}
          onChange={(e) => setMessageBody(e.target.value)}
        />
      </div>
    </div>
  )
}
