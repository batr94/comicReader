import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import useChapterInfo from '../../../hooks/useChapterInfo';
import { useChapterListSidebar } from '../../chapter-list-sidebar';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import "./ChapterNavigator.css";

const ChapterNavigator = () => {
  const { nextChapter, previousChapter } = useChapterInfo();
  const { openSidebar } = useChapterListSidebar();
  const { currentChapter } = useSelector((state: RootState) => state.chapterInfo);

  return (
    <div className="chapter-navigator">
      <button className="link-button" onClick={previousChapter}>
        <FaAngleLeft />
      </button>
      <div className="chapter-navigator__select" onClick={openSidebar}>
        <span>Table of Contents</span>
        <span>{currentChapter?.name}</span>
      </div>
      <button className="link-button" onClick={nextChapter}>
        <FaAngleRight />
      </button>
    </div>
  );
};

export default ChapterNavigator;
