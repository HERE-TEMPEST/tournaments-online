import { useEffect, useRef, useState } from 'react'
import { ChatMessage } from '../../../components'
import {
  createSendMessageToTournamentAction,
  useAppDispatch,
  useAppSelector,
} from '../../../redux'
import scss from './Chat.module.scss'

export const Chat = () => {
  const re = useRef<any>(null)
  const messages = useAppSelector((state) => state.game.messages)
  const [messageBody, setMessageBody] = useState('')
  const user = useAppSelector((state) => state.user.user)
  const dispath = useAppDispatch()

  useEffect(() => {
    if (re.current) {
      re.current.scrollTop = re.current.scrollHeight
    }
  }, [messages])

  const postMessage = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      if (user) {
        dispath(
          createSendMessageToTournamentAction({
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
