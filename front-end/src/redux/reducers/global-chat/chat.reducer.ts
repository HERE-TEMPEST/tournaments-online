import { io, Socket } from 'socket.io-client'
import { serverConfig } from '../../config'
import { store } from '../../store'
import { ChatActions } from './actions/chat-actions.type'
import { createOnMessageToChatAction } from './actions/on-message.action'
import { ChatActionsTypes, ChatState } from './types'

const initialValue: ChatState = {
  messages: [],
  region: 'global',
  error: '',
}

let globalChatSocket: Socket | null = null

export const chatReducer = (
  state: ChatState = initialValue,
  action: ChatActions
): ChatState => {
  const { payload, type } = action

  switch (type) {
    case ChatActionsTypes.CREATE_CHAT_SOCKET_ACTION: {
      const { token } = payload

      if (!globalChatSocket) {
        globalChatSocket = io(
          `ws://${serverConfig.host}:${serverConfig.port}/chat`,
          {
            autoConnect: false,
            extraHeaders: {
              authorization: `Bearer ${token}`,
            },
          }
        )

        globalChatSocket.on('connect', () => {
          console.log('connect to chat')
        })

        globalChatSocket.on('disconnect', () => {
          console.log('disconnect from chat')
        })

        globalChatSocket.on('user.join', ({ profileUri, username, userId }) => {
          store.dispatch(
            createOnMessageToChatAction({
              body: `User ${username} joined`,
              profileUri,
              type: 'join',
              userId,
              username,
            })
          )
        })

        globalChatSocket.on(
          'user.leave',
          ({ userId, profileUri, username }) => {
            store.dispatch(
              createOnMessageToChatAction({
                body: `User ${username} left`,
                profileUri,
                type: 'left',
                userId,
                username,
              })
            )
          }
        )

        globalChatSocket.on('join', ({ id }) => {
          console.log('join', id)
        })

        globalChatSocket.on('leave', ({ id }) => {
          console.log('leave', id)
        })

        globalChatSocket.on(
          'message',
          ({ userId, body, profileUri, username }) => {
            store.dispatch(
              createOnMessageToChatAction({
                body: body,
                profileUri,
                type: 'message',
                userId,
                username,
              })
            )
          }
        )

        globalChatSocket.connect()
      }

      return {
        ...state,
        error: '',
      }
    }

    case ChatActionsTypes.CONNECT_TO_REGION_CHAT_ACTION: {
      const bFlag = payload.region !== state.region
      const messages = bFlag ? [] : state.messages

      if (globalChatSocket && bFlag) {
        const { profileUri, region, username } = payload

        globalChatSocket.emit('join', { region, profileUri, username })
      }
      return { ...state, region: payload.region, messages }
    }

    case 'SIGNOUT_USER_ACTION': {
      if (globalChatSocket) {
        globalChatSocket.disconnect()
        globalChatSocket = null
      }

      return { ...state, messages: [], error: '', region: '' as any }
    }

    case ChatActionsTypes.DISCONNECT_CHAT_ACTION: {
      if (globalChatSocket && globalChatSocket.connected) {
        globalChatSocket.disconnect()
        globalChatSocket = null
      }

      return { ...state, messages: [], error: '', region: '' as any }
    }

    case ChatActionsTypes.ON_MESSAGE_TO_CHAT_ACTION: {
      const { type, userId, body, profileUri, username } = payload

      return {
        ...state,
        messages: [
          ...state.messages,
          {
            userId,
            body,
            profileUri,
            username,
            id: state.messages.length,
            type,
          },
        ],
      }
    }

    case ChatActionsTypes.SEND_MESSAGE_ACTION: {
      if (globalChatSocket) {
        const { body, profileUri, username } = payload

        globalChatSocket.emit('message', { profileUri, username, body })
      }
      return state
    }

    default: {
      return state
    }
  }
}
