import Page from './Page';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import usePagesToLoad from '../../hooks/usePagesToLoad';
import usePageInfo from '../../hooks/usePageInfo';
import './PageView.css';

export default function PageView() {
  const { currentPage, pageList } = useSelector((state: RootState) => state.pageInfo);
  const { isPageShouldToBeLoad } = usePagesToLoad(currentPage, pageList);
  const { nextPage, previousPage } = usePageInfo();

  return (
    <div className='page-view'>
      <div className='page-wrapper'>
        { 
          pageList.map((link, index) => (
            <Page
              src={isPageShouldToBeLoad(link) ? link : ''}
              show={index === currentPage}
              key={index}
            />
          ))
        }
        <div className='page-wrapper__pagination'>
          <button onClick={previousPage}></button>
          <button onClick={nextPage}></button>
        </div>
      </div>
    </div>
  );
}