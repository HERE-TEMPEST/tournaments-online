import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { ITournament } from '../../../../models'
import { RootState } from '../../../typings'
import { createAddTournamentWinnerAction } from '../actions'

interface AddTournamentWinnerActionAsyncParams {
  tournament: ITournament
  winner: {
    memberId: string
    score: number
    tournament: ITournament
  }
}

export function createAddTournamentWinnerActionAsync({
  tournament,
  winner,
}: AddTournamentWinnerActionAsyncParams): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> {
  return async (dispatch, getState) => {
    try {
      const state = getState()
      if (state.user.user) {
        const user = state.user.user

        if (user._id === winner.memberId) {
          dispatch(
            createAddTournamentWinnerAction({
              profileUri: tournament.profile.uri || '',
              title: tournament.name,
              message:
                'You took 1st place in the tournament... Congratulations!',
            })
          )
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
}
