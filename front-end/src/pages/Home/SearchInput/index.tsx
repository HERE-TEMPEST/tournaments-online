import { Icon } from '../../../components'
import { useHome } from '../../../hooks'
import scss from './SearchInput.module.scss'

// interface SearchInputProps {
//   setValue: (line: string) => void
//   value: any
// }

export const SearchInput = () => {
  const { filters, setFilters } = useHome()

  const onChangeSearchParams = (value: string) => {
    setFilters({ searchLine: value })
  }

  return (
    <div className={scss.wrapper}>
      <input
        value={filters.searchLine}
        onChange={(e) => onChangeSearchParams(e.target.value)}
        placeholder={'Введите название турнира...'}
      />

      <div className={scss.icon}>
        <Icon type={'Loupe'} />
      </div>
    </div>
  )
}
