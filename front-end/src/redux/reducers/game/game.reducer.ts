import { io, Socket } from 'socket.io-client'
import { serverConfig } from '../../config'
import { store } from '../../store'
import {
  createFinishTournamentAction,
  createOnMessageToTournamentAction,
  createStartTournamentAction,
  createUserJoinToTournamentAction,
  createUserLeaveFromTournamentAction,
  GameActions,
} from './actions'
import { createJoinedToTournamentAction } from './actions/joined-to-chat'
import { createNotJoinedToTournamentAction } from './actions/not-joined-to-chat'
import { GameActionsTypes, GameState } from './types'

const initialValue: GameState = {
  error: '',
  messages: [],
  gameState: {
    gameIsStarted: false,
    gameIsFinished: false,
    notJoined: false,
    downed: 0,
    missed: 0,
    score: 0,
  },
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
      const { token, tournament, user } = payload
      if (!gameSocket) {
        gameSocket = io(
          `ws://${serverConfig.host}:${serverConfig.port}/tournaments`,
          {
            autoConnect: false,
            extraHeaders: {
              authorization: `Bearer ${token}`,
            },
          }
        )

        gameSocket.on('connect', () => {
          console.log('connect to tournament')
        })

        gameSocket.on('disconnect', () => {
          console.log('disconnect from tournament')
        })

        gameSocket.on('user.join', ({ profileUri, username, userId }) => {
          console.log('user.join')
          store.dispatch(createUserJoinToTournamentAction(undefined))
          store.dispatch(
            createOnMessageToTournamentAction({
              body: `User ${username} joined`,
              profileUri,
              type: 'join',
              userId,
              username,
            })
          )
        })

        gameSocket.on('user.left', ({ userId, profileUri, username }) => {
          console.log('user.left')
          store.dispatch(createUserLeaveFromTournamentAction(undefined))
          store.dispatch(
            createOnMessageToTournamentAction({
              body: `User ${username} left`,
              profileUri,
              type: 'left',
              userId,
              username,
            })
          )
        })

        gameSocket.on('message', ({ userId, profileUri, username, body }) => {
          store.dispatch(
            createOnMessageToTournamentAction({
              body: body,
              profileUri,
              type: 'message',
              userId,
              username,
            })
          )
        })

        gameSocket.on('join', () => {
          store.dispatch(createJoinedToTournamentAction(undefined))
        })

        gameSocket.on('finish', () => {
          console.log('finish')
          store.dispatch(createFinishTournamentAction(undefined))
        })

        gameSocket.on('start', () => {
          console.log('start')
          store.dispatch(createStartTournamentAction(undefined))
        })

        gameSocket.on('not_join', () => {
          console.log('not_join')
          store.dispatch(createNotJoinedToTournamentAction(undefined))
        })

        gameSocket.on('leave', () => {
          console.log('leave')
        })

        gameSocket
          .connect()
          .emit('join', { tournamentId: tournament.id, ...user })
      }

      return {
        ...state,
        error: '',
        loading: true,
        gameState: {
          gameIsStarted: false,
          gameIsFinished: false,
          notJoined: false,
          downed: 0,
          missed: 0,
          score: 0,
        },
        tournament: {
          ...tournament,
          profile: {
            key: tournament.profile?.key || '',
            uri: tournament.profile?.uri || location.origin + '/1.jpg',
          },
        },
      }
    }

    case GameActionsTypes.LEAVE_FROM_TOURNAMENT_ACTION: {
      if (!state.gameState.gameIsStarted || state.gameState.gameIsFinished) {
        if (gameSocket && gameSocket.connected) {
          gameSocket.emit('leave')
          gameSocket.disconnect()
          gameSocket = null
        }

        return {
          ...state,
          gameState: {
            gameIsStarted: false,
            gameIsFinished: false,
            notJoined: false,
            downed: 0,
            missed: 0,
            score: 0,
          },
          messages: [],
          loading: false,
          error: '',
          tournament: null,
        }
      }
      return state
    }

    case GameActionsTypes.JOINED_TO_TOURNAMENT: {
      return {
        ...state,
        loading: false,
        gameState: {
          ...state.gameState,
          notJoined: false,
        },
      }
    }

    case GameActionsTypes.NOT_JOINED_TO_TOURNAMENT: {
      return {
        ...state,
        error: '',
        gameState: {
          ...state.gameState,
          notJoined: true,
        },
        loading: false,
      }
    }

    case GameActionsTypes.ERROR_FETCH_TOURNAMENT_INFO_ACTION: {
      return {
        ...state,
        gameState: {
          ...state.gameState,
          notJoined: false,
        },
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
        ...state,
        gameState: {
          ...state.gameState,
          notJoined: false,
        },
        tournament: null,
        error: '',
        loading: true,
      }
    }

    case GameActionsTypes.ON_MESSAGE_TO_TOURNAMENT_ACTION: {
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

    case GameActionsTypes.START_GAME_ACTION: {
      if (state.tournament) {
        return {
          ...state,
          gameState: {
            ...state.gameState,
            gameIsStarted: true,
            gameIsFinished: false,
          },
        }
      }

      return state
    }

    case GameActionsTypes.FISNISH_GAME_ACTION: {
      if (state.tournament) {
        return {
          ...state,
          gameState: {
            ...state.gameState,
            gameIsStarted: true,
            gameIsFinished: true,
          },
        }
      }

      return state
    }

    case GameActionsTypes.SEND_MESSAGE_TO_TOURNAMENT_ACTION: {
      if (gameSocket) {
        const { body, profileUri, username } = payload

        gameSocket.emit('message', { profileUri, username, body })
      }
      return state
    }

    case GameActionsTypes.USER_JOIN_ACTION: {
      if (state.tournament) {
        return {
          ...state,
          tournament: {
            ...state.tournament,
            currentAmount: state.tournament?.currentAmount + 1,
          },
        }
      }

      return state
    }

    case GameActionsTypes.USER_LEAVE_ACTION: {
      if (state.tournament) {
        return {
          ...state,
          tournament: {
            ...state.tournament,
            currentAmount: state.tournament?.currentAmount - 1,
          },
        }
      }

      return state
    }

    case GameActionsTypes.ADD_SCORE_ACTION: {
      if (state.tournament) {
        return {
          ...state,
          gameState: {
            ...state.gameState,
            downed: state.gameState.downed + 1,
            score: state.gameState.score + payload.score,
          },
        }
      }
    }

    case GameActionsTypes.ADD_MISSED_ELEMENT_ACTION: {
      if (state.tournament) {
        return {
          ...state,
          gameState: {
            ...state.gameState,
            missed: state.gameState.missed + 1,
          },
        }
      }
    }

    case GameActionsTypes.SEND_TOURNAMENT_RESULT_ACTION: {
      if (gameSocket && gameSocket.connected) {
        gameSocket.emit('result', { score: state.gameState.score })
      }
    }

    case GameActionsTypes.SIGNOUT_USER_ACTION: {
      if (gameSocket && gameSocket.connected) {
        gameSocket.emit('leave')
        gameSocket.disconnect()
        gameSocket = null
      }

      return {
        ...state,
        gameState: {
          gameIsStarted: false,
          gameIsFinished: false,
          notJoined: false,
          downed: 0,
          missed: 0,
          score: 0,
        },
        messages: [],
        loading: false,
        error: '',
        tournament: null,
      }
    }

    default: {
      return state
    }
  }
}
