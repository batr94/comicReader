import Page from '../Page';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import usePagesToLoad from '../../hooks/usePagesToLoad';
import './PageView.css';

export default function PageView() {
  const { currentPage, pageList: pages } = useSelector((state: RootState) => state.pageInfo);
  const { isPageShouldToBeLoad } = usePagesToLoad(currentPage, pages);
  console.log(pages, currentPage)

  return (
    <div className='page-view'>
      { 
        pages.map((link, index) => (
          <Page
            src={isPageShouldToBeLoad(link) ? link : ''}
            show={index === currentPage}
            key={link}
          />
        ))
      }
    </div>
  );
}