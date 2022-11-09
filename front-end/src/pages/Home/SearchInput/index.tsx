import { Icon } from '../../../components'
import scss from './SearchInput.module.scss'

interface SearchInputProps {
  setValue: (line: string) => void
  value: any
}

export const SearchInput = ({ value, setValue }: SearchInputProps) => {
  return (
    <div className={scss.wrapper}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={'Введите название турнира...'}
      />

      <div className={scss.icon}>
        <Icon type={'Loupe'} />
      </div>
    </div>
  )
}
