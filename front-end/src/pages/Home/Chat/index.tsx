import { useEffect, useRef, useState } from 'react'
import { Loader } from '../../../components'
import {
  createSendMessageToChatAction,
  connectToChatAction,
  createChatSocketAction,
  fetchUserInfo,
  useAppDispatch,
  useAppSelector,
} from '../../../redux'
import scss from './Chat.module.scss'
import { ChatMessage } from './Message'

export const Chat = () => {
  const re = useRef<any>(null)
  const messages = useAppSelector((state) => state.chat.messages)
  const [messageBody, setMessageBody] = useState('')
  const user = useAppSelector((state) => state.user.user)
  const isLoading = useAppSelector((state) => state.user.loading)
  const dispath = useAppDispatch()

  useEffect(() => {
    if (!user) {
      dispath(fetchUserInfo())
    }
  }, [])

  useEffect(() => {
    if (user) {
      dispath(createChatSocketAction())
      dispath(connectToChatAction())
    }
  }, [user])

  useEffect(() => {
    if (re.current) {
      re.current.scrollTop = re.current.scrollHeight
    }
  }, [messages])

  const postMessage = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      if (user) {
        dispath(
          createSendMessageToChatAction({
            body: messageBody,
            profileUri:
              user.profile?.uri || location.origin + '/default-profile.png',
            username: user?.surname,
          })
        )
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
