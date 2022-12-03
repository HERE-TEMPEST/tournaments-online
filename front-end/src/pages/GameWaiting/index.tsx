import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Loader } from '../../components'
import { TransparentButton } from '../../components/Buttons'
import { HOME_PAGE_ROUTE } from '../../constants'

import { toString } from '../../hooks'
import {
  createLeaveFromTournamentAction,
  fetchTournamentInfo,
  useAppDispatch,
  useAppSelector,
} from '../../redux'
import { Chat } from './Chat'

import scss from './GameWaiting.module.scss'

export const GameWaitingPage = () => {
  const params = useParams()
  const tournament = useAppSelector((state) => state.game.tournament)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const { id } = params
    dispatch(fetchTournamentInfo({ tournamentId: Number(id) }))

    return () => {
      dispatch(createLeaveFromTournamentAction(undefined))
    }
  }, [])

  if (!tournament) {
    return (
      <div className={scss.wrapper}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        <div className={scss.tournamentInfoPanel}>
          <div className={scss.info}>
            <div className={scss.profile}>
              <div className={scss.profileImage}>
                <img src={tournament.profile.uri} alt="" />
              </div>
              <div className={scss.description}>
                <div className={scss.tournamentDescription}>Description</div>
                <div className={scss.text}>{tournament.description}</div>
              </div>
            </div>
          </div>
          <div className={scss.exit}>
            <div className={scss.duration}>
              Duration: {toString(tournament.duration)}
            </div>

            <div
              className={scss.capacity}
            >{`${tournament.currentAmount}/${tournament.capacity}`}</div>
            <Link to={HOME_PAGE_ROUTE} className={scss.leaveBtn} replace={true}>
              <TransparentButton title="Exit" className={scss.btn} />
            </Link>
          </div>
        </div>
        <div className={scss.chatPanel}>
          <Chat />
        </div>
      </div>
    </div>
  )
}
