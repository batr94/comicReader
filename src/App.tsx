import { useEffect } from 'react';
import Layout from './components/layouts/Layout';
import PageView from './components/PageView';
import PageNavigation from './components/PageNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { setPageList, setChapterList, setCurrentChapter } from './store/pageInfoSlice';
import chapters from './data';
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
  const selectedChapterId = parseInt(event.target.value);
  const selectedChapter = chapterList.find((chapter) => chapter.id === selectedChapterId);
  dispatch(setCurrentChapter(selectedChapter));
}

  return (
    <Layout>
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
    </Layout>
  )
}

export default App
