import scss from './Chat.module.scss'

interface ChatMessageProps {
  isOwner: boolean
  message: {
    userId: number
    id: number
    body: string
    username: string
    profileUri: string
  }
}

export const ChatMessage = ({ message, isOwner }: ChatMessageProps) => {
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
