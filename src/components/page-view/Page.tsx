import clsx from 'clsx';

const Page = ({ src = null, show = false }: { src: string | null, show?: boolean}) => {
  const pageClasses = clsx(
    'page',
    show && 'page_visible',
  );

  return (
    <div className={pageClasses} >
      { show && src &&
        <img 
          src={src} 
          style={{ display: 'block', maxWidth: '900px'}}
        />
      }
      { show && src === null && <div className='loader'></div> }
    </div>
  )
}

export default Page;