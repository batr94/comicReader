import clsx from 'clsx';
import Sidebar from '../ui/Sidebar';
import useChapterInfo from '../../hooks/useChapterInfo';
import { useChapterListSidebar } from '.';
import './ChapterListSidebar.css';

const ChapterListSidebar = () => {
  const { chapterList, currentChapter, setChapter } = useChapterInfo();
  const { isOpen, closeSidebar } = useChapterListSidebar();

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