import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Sidebar from '../ui/Sidebar';
import useChapterInfo from '../../hooks/useChapterInfo';
import { useChapterListSidebar } from '.';
import './ChapterListSidebar.css';

const ChapterListSidebar = () => {
  const { currentChapter, chapterList } = useSelector((state: RootState) => state.chapterInfo);
  const { isOpen } = useSelector((state: RootState) => state.chapterListSidebar);
  const { closeSidebar } = useChapterListSidebar();
  const { setChapter } = useChapterInfo();

  return (
    <Sidebar isOpen={isOpen} onClose={closeSidebar} side="right" className='chapter-list-sidebar'>
      <h1 className='chapter-list-title'>Table Of Contents</h1>
      <ul className='chapter-list'>
        { Object.entries(chapterList).map(([, chapter]) => (
          <li
            key={chapter.id}
            className={clsx({
              'chapter-list__item': true,
              'chapter-list__item_active': currentChapter === chapter
            })}
            onClick={() => setChapter(chapter.id)}
          >
            <a  className='chapter-list__link'>{chapter.name}</a>
          </li>
        ))}
      </ul>
      
    </Sidebar>
  )
}

export default ChapterListSidebar