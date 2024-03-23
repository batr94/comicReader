import PageList from './PageList';
import './pageNavigation.css';
import PagePagination from './PagePagination';

const PageNavigation = () => {
  return (
    <nav className='page-navigation'>
      <PageList />
      <PagePagination />
    </nav>
  )
}

export default PageNavigation