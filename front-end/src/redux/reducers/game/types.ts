import { IChatMessage, ITournament } from '../../../models'

export interface GameState {
  tournament: ITournament | null
  messages: Array<IChatMessage>
  gameState: {
    gameIsStarted: boolean
    gameIsFinished: boolean
    notJoined: boolean
    score: number
    missed: number
    downed: number
  }
  error: string
  loading: boolean
}

export enum GameActionsTypes {
  JOIN_TO_TOURNAMENT_ACTION = 'JOIN_TO_TOURNAMENT_ACTION',
  LEAVE_FROM_TOURNAMENT_ACTION = 'LEAVE_FROM_TOURNAMENT_ACTION',
  INIT_TOURNAMENT_PROFILE_ACTION = 'INIT_TOURNAMENT_PROFILE_ACTION',
  FETCH_TOURNAMENT_INFO_ACTION = 'FETCH_TOURNAMENT_INFO_ACTION',
  ERROR_FETCH_TOURNAMENT_INFO_ACTION = 'ERROR_FETCH_TOURNAMENT_INFO_ACTION',
  NOT_JOINED_TO_TOURNAMENT = 'NOT_JOINED_TO_TOURNAMENT',
  JOINED_TO_TOURNAMENT = 'JOINED_TO_TOURNAMENT',
  ON_MESSAGE_TO_TOURNAMENT_ACTION = 'ON_MESSAGE_TO_TOURNAMENT_ACTION',
  SEND_MESSAGE_TO_TOURNAMENT_ACTION = 'SEND_MESSAGE_TO_TOURNAMENT_ACTION',
  USER_JOIN_ACTION = 'USER_JOIN_ACTION',
  USER_LEAVE_ACTION = 'USER_LEAVE_ACTION',
  START_GAME_ACTION = 'START_GAME_ACTION',
  FISNISH_GAME_ACTION = 'FISNISH_GAME_ACTION',
  ADD_SCORE_ACTION = 'ADD_SCORE_ACTION',
  ADD_MISSED_ELEMENT_ACTION = 'ADD_MISSED_ELEMENT_ACTION',
  SEND_TOURNAMENT_RESULT_ACTION = 'SEND_TOURNAMENT_RESULT_ACTION',
  SIGNOUT_USER_ACTION = 'SIGNOUT_USER_ACTION',
}
