import { useEffect } from 'react';
import Layout from './components/Layout/Layout.tsx';
import PageView from './components/PageView/PageView';
// import PageNavigation from './components/PageNavigation';
import Menu from './components/Menu';
import PageNavigation from './components/page-navigation';
import ChapterListSidebar from './components/chapter-list-sidebar';
import { useSelector } from 'react-redux';
import { newChapters } from './data';
import { RootState } from './store';
import useChapterInfo from './hooks/useChapterInfo';

function App() {
  const { isOpen: isMenuOpen } = useSelector((state: RootState) => state.menu);
  const { 
    setChapterList: setHookChapterList,
    setChapter,
  } = useChapterInfo();

  useEffect(() => {
    setHookChapterList(newChapters);
    setChapter(1);
  }, [])

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
