import React from 'react'

import scss from './TableRecords.module.scss'

const records = [
  {
    id: 1,
    profileUri: {
      uri: location.origin + '/1.jpg',
    },
    username: 'Andrei Voropaev',
    amountTournaments: 5,
    sr: 3000,
  },
  {
    id: 2,
    profileUri: {
      uri: location.origin + '/1.jpg',
    },
    username: 'Andrei Voropaev',
    amountTournaments: 5,
    sr: 3000,
  },

  {
    id: 3,
    profileUri: {
      uri: location.origin + '/1.jpg',
    },
    username: 'Andrei Voropaev',
    amountTournaments: 5,
    sr: 3000,
  },

  {
    id: 4,
    profileUri: {
      uri: location.origin + '/1.jpg',
    },
    username: 'Andrei Voropaev',
    amountTournaments: 5,
    sr: 3000,
  },
]

export const TableRecordsPage = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        <div className={scss.title}>
          <div className={scss.text}>Рейтинг игроков</div>
        </div>
        <div className={scss.tableRecords}>
          <table>
            <thead>
              <tr>
                <th>
                  <div className={scss.th}></div>
                </th>
                <th>
                  <div className={scss.th}>Фио</div>
                </th>
                <th>
                  <div className={scss.th}>Партий</div>
                </th>
                <th>
                  <div className={scss.th}>С/K</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td>
                    <div className={scss.profile}>
                      <img src={record.profileUri.uri} alt="" />
                    </div>
                  </td>
                  <td>
                    <div className={scss.fio}>{record.username}</div>
                  </td>
                  <td>
                    <div className={scss.amountTours}>
                      {record.amountTournaments}
                    </div>
                  </td>
                  <td>
                    <div className={scss.sr}>{record.sr}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
