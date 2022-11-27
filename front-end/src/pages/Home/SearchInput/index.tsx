import { useState } from 'react'
import { Icon } from '../../../components'
import scss from './SearchInput.module.scss'

// interface SearchInputProps {
//   setValue: (line: string) => void
//   value: any
// }

export const SearchInput = () => {
  const [searchParam, setSearchParam] = useState('')

  return (
    <div className={scss.wrapper}>
      <input
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
        placeholder={'Введите название турнира...'}
      />

      <div className={scss.icon}>
        <Icon type={'Loupe'} />
      </div>
    </div>
  )
}
