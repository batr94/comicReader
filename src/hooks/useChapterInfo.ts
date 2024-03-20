import { useDispatch, useSelector } from 'react-redux';
import { 
  setChapterList as setReduxChapterList,
  nextChapter as reduxNextChapter,
  previousChapter as reduxPreviousChapter,
  setChapter as reduxSetChapter,
} from '../store/chapterSlice';
import { ChapterType } from '../data';
import { RootState } from '../store';

function useChapterInfo() {
  const dispatch = useDispatch();
  const { currentChapter, chapterList } = useSelector((state: RootState) => state.chapterInfo);

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
    currentChapter: currentChapter,
    chapterList,
  };
}

export default useChapterInfo;