import { Route, Routes } from 'react-router-dom'

// import { HomePage } from './Home'
import { LoginPage } from './Login'
// import { ProfilePage } from './Profile'
import { RegistrationPage } from './Registration'
import {
  // CREATE_TOURNAMENT_PAGE_ROUTE,
  // HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  // PROFILE_PAGE_ROUTE,
  REGISTRATION_PAGE_ROUTE,
  // TABLE_RECORDS_PAGE_ROUTE,
  // TOURNAMENT_PAGE_ROUTE,
  // TOURNAMENT_WAITING_PAGE_ROUTE,
} from '../constants'
import { MainLayout, PrivateRoute, PublicRoute } from '../hoc'

import scss from './index.module.scss'
// import { TableRecordsPage } from './TableRecords'
// import { GamePage } from './Game'
// import { CreateTournamentPage } from './CreateTournament'
// import { GameWaitingPage } from './GameWaiting'

export const TournamentsOnlineApp = () => {
  return (
    <div className={scss.app}>
      <MainLayout>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<div>Hello</div>} />
            {/* <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
            <Route
              path={TOURNAMENT_WAITING_PAGE_ROUTE}
              element={<GameWaitingPage />}
            />
            <Route path={PROFILE_PAGE_ROUTE} element={<ProfilePage />} />
            <Route
              path={CREATE_TOURNAMENT_PAGE_ROUTE}
              element={<CreateTournamentPage />}
            />
            <Route
              path={TABLE_RECORDS_PAGE_ROUTE}
              element={<TableRecordsPage />}
            />
            <Route path={TOURNAMENT_PAGE_ROUTE} element={<GamePage />} /> */}
          </Route>
          <Route element={<PublicRoute />}>
            <Route path={LOGIN_PAGE_ROUTE} element={<LoginPage />} />
            <Route
              path={REGISTRATION_PAGE_ROUTE}
              element={<RegistrationPage />}
            />
          </Route>
        </Routes>
      </MainLayout>
    </div>
  )
}
