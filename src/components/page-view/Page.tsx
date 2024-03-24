import clsx from 'clsx';
import { useState, memo } from 'react'

const Page = ({ src = '', show = false }: { src?: string, show?: boolean}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const pageClasses = clsx(
    'page',
    show && 'page_visible',
  )

  function onImageLoad () {
    setIsLoaded(true);
  }

  return (
    <div className={pageClasses} >
      <img 
        src={src} 
        style={{ display: isLoaded ? 'block' : 'none', maxWidth: '900px'}}
        onLoad={onImageLoad}
      />
      <p style={{ display: isLoaded ? 'none' : 'block'}}>Загрузка...</p>
    </div>
  )
}

export default memo(Page);