import { useEffect, useRef, useState } from 'react'
import scss from './Chat.module.scss'
import { ChatMessage } from './Message'

const msgs = [
  {
    userId: 2,
    id: 1,
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem similique excepturi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem similique excepturi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem similique excepturi.',
    username: 'Ivan Ivanov',
    profileUri: location.origin + '/profile.png',
  },
  {
    userId: 1,
    id: 1,
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem similique excepturi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem similique excepturi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem similique excepturi.',
    username: 'Ivan Ivanov',
    profileUri: location.origin + '/profile.png',
  },
  {
    userId: 1,
    id: 1,
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem similique excepturi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem similique excepturi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem similique excepturi.',
    username: 'Ivan Ivanov',
    profileUri: location.origin + '/profile.png',
  },
  {
    userId: 22,
    id: 3,
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem similique excepturi.',
    username: 'Ivan Ivanov',
    profileUri: location.origin + '/profile.png',
  },
  {
    userId: 11,
    id: 2,
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem similique excepturi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem similique excepturi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem similique excepturi.',
    username: 'Ivan Ivanov',
    profileUri: location.origin + '/profile.png',
  },
  {
    userId: 12,
    id: 1,
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem similique excepturi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem similique excepturi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem similique excepturi.',
    username: 'Ivan Ivanov',
    profileUri: location.origin + '/profile.png',
  },
]

const me = 1

export const Chat = () => {
  const refInput = useRef<any>(null)
  const re = useRef<any>(null)
  const [messages, setMessages] = useState(msgs)
  const [messageBody, setMessageBody] = useState('')

  const postMessage = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      setMessages((currentMessages: Array<any>) => [
        ...currentMessages,
        {
          userId: 1,
          id: 1,
          body: messageBody,
          username: 'Ivan Ivanov',
          profileUri: location.origin + '/profile.png',
        },
      ])
      setMessageBody('')
    }
  }

  useEffect(() => {
    re.current.scrollTop = re.current.scrollHeight
  }, [messages])

  useEffect(() => {
    refInput.current.focus()
  }, [])

  return (
    <div className={scss.wrapper}>
      <div className={scss.chatPlace}>
        <div className={scss.chat} ref={re}>
          {messages.map((message) => (
            <ChatMessage
              message={message}
              key={message.id}
              isOwner={me === message.userId}
            />
          ))}
        </div>
      </div>
      <div className={scss.input}>
        <input
          ref={refInput}
          placeholder="Напишите сообщение..."
          value={messageBody}
          onKeyDown={(e) => postMessage(e)}
          onChange={(e) => setMessageBody(e.target.value)}
        />
      </div>
    </div>
  )
}
