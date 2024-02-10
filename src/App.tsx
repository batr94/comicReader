import { useEffect } from 'react';
import PageView from './PageView';
import PageNavigation from './PageNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { setPageList, setChapterList, setCurrentChapter } from './store/pageInfoSlice';
import chapters from './data';
import './App.css'
import { RootState } from './store';

function App() {
  const dispatch = useDispatch();
  const { currentChapter, chapterList } = useSelector((state: RootState) => state.pageInfo);

  useEffect(() => {
    dispatch(setChapterList(chapters));
    dispatch(setCurrentChapter(chapters[0]));
  }, [])

  useEffect(() => {
    dispatch(setPageList(currentChapter?.pages ?? []));
  }, [currentChapter]);

  function changeChapter(event: any) {
    dispatch(setCurrentChapter(
      chapterList.find(
        (chapter) => chapter.id === parseInt(event.target.value)
      )
    ));
  }

  return (
    <>
      <PageView />
      <div>
        <PageNavigation />
        <p>
          <label>Глава: </label>
          <select onChange={changeChapter}>
            { chapterList.map(({id, name}) => (
              <option value={id} key={id}>{name}</option>
            ))}
          </select>
        </p>
      </div>
    </>
  )
}

export default App
