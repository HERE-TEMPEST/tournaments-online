import { Icon } from '../../../components'
import {
  createChangeFilterName,
  useAppDispatch,
  useAppSelector,
} from '../../../redux'
import scss from './SearchInput.module.scss'

// interface SearchInputProps {
//   setValue: (line: string) => void
//   value: any
// }

export const SearchInput = () => {
  const value = useAppSelector((state) => state.tournaments.filters.name)
  const dispatch = useAppDispatch()

  const onChangeSearchParams = (value: string) => {
    dispatch(createChangeFilterName(value))
  }

  return (
    <div className={scss.wrapper}>
      <input
        value={value}
        onChange={(e) => onChangeSearchParams(e.target.value)}
        placeholder={'Введите название турнира...'}
      />

      <div className={scss.icon}>
        <Icon type={'Loupe'} />
      </div>
    </div>
  )
}
