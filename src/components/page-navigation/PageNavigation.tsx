import { FaCaretUp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import usePageInfo from '../../hooks/usePageInfo';
import './pageNavigation.css';

// https://react.dev/reference/react-dom/components/select
const PageNavigation = () => {
  const { pageList, currentPage, setPage, nextPage, previousPage } = usePageInfo();

  return (
    <nav className='page-navigation'>
      <label className='page-list'>
        <span className='page-list__label'>Page {currentPage + 1} / {pageList.length}</span>
        <FaCaretUp />
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
      <div className='page-pagination'>
        <button
          className='page-pagination__item'
          onClick={() => previousPage()}
        >
          <FaChevronLeft size={14} />
        </button>
        <button
          className='page-pagination__item'
          onClick={() => nextPage()}
        >
          <FaChevronRight size={14} />
        </button>
      </div>
    </nav>
  )
}

export default PageNavigation