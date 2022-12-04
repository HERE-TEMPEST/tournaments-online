import { io, Socket } from 'socket.io-client'
import { store } from '../../store'
import { GameActions } from './actions'
import { GameActionsTypes, GameState } from './types'

const initialValue: GameState = {
  error: '',
  tournament: null,
  loading: false,
}

let gameSocket: Socket | null = null

export const gameReducer = (
  state: GameState = initialValue,
  action: GameActions
): GameState => {
  const { payload, type } = action

  switch (type) {
    case GameActionsTypes.JOIN_TO_TOURNAMENT_ACTION: {
      if (!gameSocket) {
        gameSocket = io('ws://127.0.0.1:3000/tournaments', {
          autoConnect: false,
          extraHeaders: {
            authorization: `Bearer ${token}`,
          },
        })

        gameSocket.on('connect', () => {
          console.log('connect to chat')
        })

        gameSocket.on('disconnect', () => {
          console.log('disconnect from chat')
        })

        gameSocket.on('user.join', ({ profileUri, username, userId }) => {
          // store.dispatch(
          //   createOnMessageToChatAction({
          //     body: `User ${username} joined`,
          //     profileUri,
          //     type: 'join',
          //     userId,
          //     username,
          //   })
          // )
        })

        gameSocket.on('user.leave', ({ userId, profileUri, username }) => {
          // store.dispatch(
          //   createOnMessageToChatAction({
          //     body: `User ${username} left`,
          //     profileUri,
          //     type: 'left',
          //     userId,
          //     username,
          //   })
          // )
        })

        gameSocket.on('join', ({ id }) => {
          console.log('join', id)
        })

        gameSocket.on('leave', ({ id }) => {
          console.log('leave', id)
        })

        gameSocket.on('message', ({ userId, body, profileUri, username }) => {
          // store.dispatch(
          //   createOnMessageToChatAction({
          //     body: body,
          //     profileUri,
          //     type: 'message',
          //     userId,
          //     username,
          //   })
          // )
        })

        gameSocket.connect()
      }

      return {
        error: '',
        loading: false,
        tournament: {
          ...payload,
          profile: {
            key: payload?.profile?.key || '',
            uri: payload?.profile?.uri || location.origin + '/1.jpg',
          },
        },
      }
    }

    case GameActionsTypes.LEAVE_FROM_TOURNAMENT_ACTION: {
      return {
        ...state,
        loading: false,
        error: '',
        tournament: null,
      }
    }

    case GameActionsTypes.ERROR_FETCH_TOURNAMENT_INFO_ACTION: {
      return {
        ...state,
        loading: false,
        error: payload,
        tournament: null,
      }
    }

    case GameActionsTypes.INIT_TOURNAMENT_PROFILE_ACTION: {
      if (state.tournament) {
        return {
          ...state,
          loading: false,
          error: '',
          tournament: {
            ...state.tournament,
            profile: payload,
          },
        }
      }

      return state
    }

    case GameActionsTypes.FETCH_TOURNAMENT_INFO_ACTION: {
      return {
        tournament: null,
        error: '',
        loading: true,
      }
    }

    default: {
      return state
    }
  }
}
