import { useEffect } from 'react';
import Layout from './components/Layout/Layout.tsx';
import PageView from './components/PageView/PageView';
import Menu from './components/Menu';
import PageNavigation from './components/page-navigation';
import ChapterListSidebar from './components/chapter-list-sidebar';
import { newChapters } from './data';

import useChapterInfo from './hooks/useChapterInfo';

function App() {
  
  const { setChapterList, setChapter } = useChapterInfo();

  useEffect(() => {
    setChapterList(newChapters);
    setChapter(1);
  }, [])

  return (
    <Layout>
      <PageView />
      <PageNavigation />
      <Menu />
      <ChapterListSidebar />
    </Layout>
  )
}

export default App
