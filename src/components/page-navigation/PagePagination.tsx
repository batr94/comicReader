import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import usePageInfo from '../../hooks/usePageInfo';

const PagePagination = () => {
  const { nextPage, previousPage } = usePageInfo();
  
  return (
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
  )
}

export default PagePagination