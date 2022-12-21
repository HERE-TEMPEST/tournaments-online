import React, { useEffect, useRef, useState } from 'react'

import { ChatMessage, Loader } from '../../../components'
import { IChatMessage, IUser } from '../../../models'

import scss from './Chat.module.scss'

interface ChatProps {
  messages: Array<IChatMessage>
  onMessage: (message: string) => void
  me: IUser | undefined
}

export const Chat: React.FC<ChatProps> = ({
  messages,
  onMessage,
  me,
}: ChatProps) => {
  const re = useRef<any>(null)
  const [messageBody, setMessageBody] = useState('')

  useEffect(() => {
    if (re.current) {
      re.current.scrollTop = re.current.scrollHeight
    }
  }, [messages])

  const sendMessage = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onMessage(messageBody)
      setMessageBody('')
    }
  }

  if (!me) {
    return (
      <div className={scss.wrapper}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={scss.wrapper}>
      <div className={scss.chatPlace} ref={re}>
        <div className={scss.chat}>
          {messages.map((message) => (
            <ChatMessage
              message={message}
              key={message.id}
              isOwner={me?._id === message.userId}
            />
          ))}
        </div>
      </div>
      <div className={scss.input}>
        <input
          placeholder="Напишите сообщение..."
          value={messageBody}
          onKeyDown={(e) => sendMessage(e)}
          onChange={(e) => setMessageBody(e.target.value)}
        />
      </div>
    </div>
  )
}
