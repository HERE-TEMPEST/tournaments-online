import { IChatMessage } from '../../models'
import scss from './ChatMessage.module.scss'

interface ChatMessageProps {
  isOwner: boolean
  message: IChatMessage
}

export const ChatMessage = ({ message, isOwner }: ChatMessageProps) => {
  if (message.type !== 'message') {
    return (
      <div className={scss.message} style={{ alignSelf: 'center' }}>
        <div className={scss.notification}>{message.body}</div>
      </div>
    )
  }

  return (
    <div
      className={scss.message}
      style={{ alignSelf: isOwner ? 'flex-end' : 'flex-start' }}
    >
      {!isOwner && (
        <div className={scss.profile}>
          <img src={message.profileUri} alt="" />
        </div>
      )}
      <div className={scss.info}>
        <div
          className={scss.username}
          style={{ alignSelf: isOwner ? 'flex-end' : 'flex-start' }}
        >
          {message.username}
        </div>
        <div
          className={scss.messageBody}
          style={{
            alignSelf: isOwner ? 'flex-end' : 'flex-start',
            textAlign: isOwner ? 'right' : 'left',
          }}
        >
          {message.body}{' '}
        </div>
      </div>
      {isOwner && (
        <div className={scss.profile}>
          <img src={message.profileUri} alt="" />
        </div>
      )}
    </div>
  )
}
