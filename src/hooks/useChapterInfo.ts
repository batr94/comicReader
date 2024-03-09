import { useDispatch, useSelector } from 'react-redux';
import { 
  setChapterList as setReduxChapterList,
  nextChapter as reduxNextChapter,
  previousChapter as reduxPreviousChapter,
  setChapter as reduxSetChapter,
} from '../store/chapterSlice';
import { RootState } from '../store';

function useChapterInfo() {
  const dispatch = useDispatch();
  const { currentChapterIndex, chapterList } = useSelector((state: RootState) => state.chapterInfo);

  function nextChapter() {
    dispatch(reduxNextChapter());
  }

  function previousChapter() {
    dispatch(reduxPreviousChapter());
  }

  function setChapterList(chapterList: any[]) {
    dispatch(setReduxChapterList(chapterList));
  }

  function setChapter(chapter: any) {
    dispatch(reduxSetChapter(chapter));
  }

  return {
    nextChapter,
    previousChapter,
    setChapterList,
    setChapter,
    currentChapter: chapterList[currentChapterIndex],
    currentChapterIndex,
    chapterList,
  };
}

export default useChapterInfo;