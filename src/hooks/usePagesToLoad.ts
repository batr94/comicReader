import { useState, useEffect } from 'react';

export default function usePagesToLoad(
  currentPage: number,
  pagesSrcList: string[],
  cacheCount: number = 2,
) {
  const [pagesToLoad, setPagesToLoad] = useState<Set<string>>(new Set())

  useEffect(() => {
    setPagesToLoad(new Set());
  }, [pagesSrcList])

  useEffect(() => {
    if (pagesSrcList.length === pagesToLoad.size) {
      return;
    }

    let index = Math.max(currentPage - cacheCount, 0);
    const maxPage = Math.min(currentPage + cacheCount, pagesSrcList.length - 1);

    while (index <= maxPage) {
      pagesToLoad.add(pagesSrcList[index]);
      index++;
    }

    setPagesToLoad(new Set([ ...pagesToLoad ]))
  }, [currentPage, cacheCount, pagesSrcList])

  function isPageShouldToBeLoad(pageSrc: string): boolean {
    return pagesToLoad.has(pageSrc);
  }

  return { isPageShouldToBeLoad };
}