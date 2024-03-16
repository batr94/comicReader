import clsx from 'clsx';
import Sidebar from '../ui/Sidebar';
import useChapterInfo from '../../hooks/useChapterInfo';
import { useChapterListSidebar } from '.';
import './ChapterListSidebar.css';

const ChapterListSidebar = () => {
  const { chapterList, currentChapter, setChapter } = useChapterInfo();
  const { isOpen, closeSidebar } = useChapterListSidebar();

  return (
    <Sidebar isOpen={isOpen} onClose={closeSidebar} side="right">
      <ul className='chapter-list'>
        { chapterList.map((chapter, index) => (
          <li
            key={chapter.id}
            className={clsx({
              'chapter-list__item': true,
              'chapter-list__item_active': currentChapter.id === chapter.id
            })}
            onClick={() => setChapter(index)}
          >
            <a  className='chapter-list__link'>{chapter.name}</a>
          </li>
        ))}
      </ul>
      
    </Sidebar>
  )
}

export default ChapterListSidebar