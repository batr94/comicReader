import { useEffect } from 'react';
import Layout from './components/Layout/Layout.tsx';
import PageView from './components/PageView/PageView';
// import PageNavigation from './components/PageNavigation';
import Menu from './components/Menu';
import PageNavigation from './components/page-navigation';
import ChapterListSidebar from './components/chapter-list-sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { setPageList, setChapterList, setCurrentChapter } from './store/pageInfoSlice';
import chapters, { newChapters } from './data';
import { RootState } from './store';
import useChapterInfo from './hooks/useChapterInfo';

function App() {
  const dispatch = useDispatch();
  const { currentChapter, chapterList } = useSelector((state: RootState) => state.pageInfo);
  const { isOpen: isMenuOpen } = useSelector((state: RootState) => state.menu);
  const { setChapterList: setHookChapterList } = useChapterInfo();

  useEffect(() => {
    setHookChapterList(newChapters);
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
      <PageNavigation />
      {/* <div>
        <PageNavigation />
        <p>
          <label>Глава: </label>
          <select onChange={changeChapter}>
            { chapterList.map(({id, name}) => (
              <option value={id} key={id}>{name}</option>
            ))}
          </select>
        </p>
      </div> */}
      <Menu isOpen={isMenuOpen} />
      <ChapterListSidebar />
    </Layout>
  )
}

export default App
