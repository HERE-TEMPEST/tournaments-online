import scss from './Loader.module.scss'

export const Loader = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.loader}>
        <div className={scss['loadingio-spinner-double-ring-4aqxasv5f1i']}>
          <div className={scss['ldio-3n3yfvkzju7']}>
            <div></div>
            <div></div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
