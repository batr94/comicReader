import Page from './Page';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import usePagesToLoad from './hooks/usePagesToLoad';

export default function PageView() {
  const { currentPage, pageList: pages } = useSelector((state: RootState) => state.pageInfo);
  const { isPageShouldToBeLoad } = usePagesToLoad(currentPage, pages);

  return (
    <div>
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