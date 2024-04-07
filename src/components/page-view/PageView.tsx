import { useSelector } from 'react-redux';
import Page from './Page';
import { RootState } from '../../store';
import usePagesToRender from './usePagesToRender';
import usePageInfo from '../../hooks/usePageInfo';
import './PageView.css';

export default function PageView() {
  const { currentPage, pageList } = useSelector((state: RootState) => state.pageInfo);
  const cachedPages = usePagesToRender(currentPage, pageList);
  console.log(cachedPages);

  const { nextPage, previousPage } = usePageInfo();

  return (
    <div className='page-view'>
      <div className='page-wrapper'>
        { 
          pageList.map((link, index) => (
            <Page
              src={ cachedPages.get(link)?.complete ? link : null}
              show={index === currentPage}
              key={link}
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