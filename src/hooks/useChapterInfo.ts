import { useDispatch } from 'react-redux';
import { 
  setChapterList as setReduxChapterList,
  nextChapter as reduxNextChapter,
  previousChapter as reduxPreviousChapter,
  setChapter as reduxSetChapter,
} from '../store/chapterSlice';
import { ChapterType } from '../data';

function useChapterInfo() {
  const dispatch = useDispatch();

  function nextChapter() {
    dispatch(reduxNextChapter());
  }

  function previousChapter() {
    dispatch(reduxPreviousChapter());
  }

  function setChapterList(chapterList: ChapterType[]) {
    dispatch(setReduxChapterList(chapterList));
  }

  function setChapter(chapter: number) {
    dispatch(reduxSetChapter(chapter));
  }

  return {
    nextChapter,
    previousChapter,
    setChapterList,
    setChapter,
  };
}

export default useChapterInfo;