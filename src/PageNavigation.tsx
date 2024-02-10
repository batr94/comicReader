import { useDispatch, useSelector } from 'react-redux';
import { nextPage, previousPage, setPage } from './store/pageInfoSlice';
import { RootState } from './store';


const PageNavigation = () => {
  const dispatch = useDispatch();
  const { currentPage, isFirstPage, isLastPage, pageList } = useSelector((state: RootState) => state.pageInfo); 
  
  function next() {
    dispatch(nextPage());
  }

  function previous() {
    dispatch(previousPage());
  }

  function changePage(event: any) {
    dispatch(setPage(parseInt(event.target.value)));
  }

  return (
    <nav>
      { !isFirstPage && <button onClick={previous}>Назад</button> }
      { !isLastPage && <button onClick={next}>Вперёд</button> }
      <p>
          <label>Страница: </label>
          <select onChange={changePage} defaultValue={currentPage}>
            { [...pageList.keys()].map((idx) => (
              <option value={idx} key={idx}>{idx + 1}</option>
            ))}
          </select>
        </p>
    </nav>
  )
}

export default PageNavigation