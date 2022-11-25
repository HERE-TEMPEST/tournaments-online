import { TournamentItem } from '../../../components/TournamentItem'
import scss from './Tournaments.module.scss'

const tournaments = [
  {
    id: 1,
    title: 'Some name',
    currentAmount: 0,
    capacity: 10,
    postUri: location.origin + '/1.jpg',
  },
  {
    id: 2,
    title: 'Some name',
    currentAmount: 0,
    capacity: 10,
    postUri: location.origin + '/1.jpg',
  },
  {
    id: 3,
    title: 'Some asdasdasdasdasdasdasdadasdname',
    currentAmount: 0,
    capacity: 10,
    postUri: location.origin + '/1.jpg',
  },
  {
    id: 4,
    title: 'Some name',
    currentAmount: 0,
    capacity: 10,
    postUri: location.origin + '/1.jpg',
  },
  {
    id: 5,
    title: 'Some name',
    currentAmount: 0,
    capacity: 10,
    postUri: location.origin + '/1.jpg',
  },
  {
    id: 6,
    title: 'Some name',
    currentAmount: 0,
    capacity: 10,
    postUri: location.origin + '/1.jpg',
  },
  {
    id: 7,
    title: 'Some asdasdasdasdasdasdasdadasdname',
    currentAmount: 0,
    capacity: 10,
    postUri: location.origin + '/1.jpg',
  },
  {
    id: 8,
    title: 'Some name',
    currentAmount: 0,
    capacity: 10,
    postUri: location.origin + '/1.jpg',
  },
  {
    id: 9,
    title: 'Some name',
    currentAmount: 0,
    capacity: 10,
    postUri: location.origin + '/1.jpg',
  },
  {
    id: 10,
    title: 'Some name',
    currentAmount: 0,
    capacity: 10,
    postUri: location.origin + '/1.jpg',
  },
]

export const Tournaments = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        {tournaments.map((tournament) => (
          <TournamentItem
            {...tournament}
            key={tournament.id}
            onClick={() => {
              return
            }}
          />
        ))}
      </div>
    </div>
  )
}
