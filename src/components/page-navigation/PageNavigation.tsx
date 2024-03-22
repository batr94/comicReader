import usePageInfo from '../../hooks/usePageInfo';
import './pageNavigation.css';

// https://react.dev/reference/react-dom/components/select
const PageNavigation = () => {
  const { pageList, currentPage, setPage } = usePageInfo();

  return (
    <nav className='page-navigation'>
      <label className='page-list'>
        <span className='page-list__label'>Page {currentPage + 1} / {pageList.length}</span>
        <select
          className='page-list__select'
          value={currentPage}
          onChange={(event) => setPage(parseInt(event.target.value))}
        >
          { pageList.map(
            (link, index) => (
              <option
                key={index}
                value={index}
                className='page-list__select-item'
              >
                Page {`${index + 1} / ${pageList.length}`}
              </option>
            )
          )}
        </select>
      </label>
    </nav>
  )
}

export default PageNavigation