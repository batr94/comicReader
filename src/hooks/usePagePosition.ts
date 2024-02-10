import { useState, useEffect } from 'react';

type pageInfoType = {
  currentPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
}

export default function usePagePosition(
  pagesCount: number,
  initialPage: number = 0,
) {
  const [pageInfo, setPageInfo] = useState<pageInfoType>(
    calculatePageInfo(initialPage)
  );

  useEffect(() => {
    if (pageInfo.currentPage >= pagesCount) {
      setPage(0);
    }
  }, [pagesCount]);

  function calculatePageInfo(page: number): pageInfoType {
    if (isPageExist(page) === false) {
      return pageInfo;
    }

    return {
      currentPage: page,
      isFirstPage: page === 0,
      isLastPage: page === pagesCount - 1,
    }
  }

  function isPageExist(page: number): boolean {
    return page >= 0 && page < pagesCount;
  }

  function next(): void {
    setPage(pageInfo.currentPage + 1);
  }

  function previous(): void {
    setPage(pageInfo.currentPage - 1);
  }

  function setPage(page: number): void {
    setPageInfo(calculatePageInfo(page));
  }

  return {pageInfo, next, previous, setPage};
}