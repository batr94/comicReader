import { useState, memo } from 'react'

const Page = ({ src = '', show = false }: { src?: string, show?: boolean}) => {
  const [isLoaded, setIsLoaded] = useState(false);;

  function onImageLoad () {
    setIsLoaded(true);
  }

  return (
    <div style={{ display: show ? 'block' : 'none'}}>
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