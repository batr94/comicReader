import { useSelector } from 'react-redux';
import Page from './Page';
import { RootState } from '../../store';
import usePagesToRender from './usePagesToRender';
import usePageInfo from '../../hooks/usePageInfo';
import './PageView.css';

export default function PageView() {
  const { currentPage, pageList } = useSelector((state: RootState) => state.pageInfo);
  const cachedPages = usePagesToRender(currentPage, pageList);

  const { nextPage, previousPage } = usePageInfo();

  return (
    <div className='page-view'>
      <div className='page-wrapper'>
        <Page
          src={ cachedPages.get(pageList[currentPage]) ?? null}
          show={true}
        />
        <div className='page-wrapper__pagination'>
          <button onClick={previousPage}></button>
          <button onClick={nextPage}></button>
        </div>
      </div>
    </div>
  );
}