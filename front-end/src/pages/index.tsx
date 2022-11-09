import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../hoc'
import { HomePage } from './Home'

import scss from './index.module.scss'

export const TournamentsOnlineApp = () => {
  return (
    <div className={scss.app}>
      <MainLayout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/game" element={<div>Game</div>} />
          <Route path="/tournament/:id" element={<div>Game</div>} />
          <Route path="/profile" element={<div>Profile</div>} />
          <Route path="/table-records" element={<div>Table Records</div>} />
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/registration" element={<div>Registration</div>} />
        </Routes>
      </MainLayout>
    </div>
  )
}
