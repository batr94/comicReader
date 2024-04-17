import { useState, useEffect, useRef } from 'react';

function usePagesToRender(
  currentPage: number,
  pageList: string[],
  cachedPagesAmount: number = 2
) {
  const [loadedImages, setLoadedImages] = useState<Map<string, string>>(new Map());
  const { current: fetchQueue } = useRef<Set<string>>(new Set());

  useEffect(() => {
    loadedImages.clear();
    fetchQueue.clear();
  }, [pageList]);

  useEffect(() => {
    requestImagesByPage(currentPage);
  }, [currentPage, pageList]);

  function requestImagesByPage(page: number) {
    if (loadedImages.size === pageList.length) {
      return;
    }

    let index = Math.max(page - cachedPagesAmount, 0);
    const maxPage = Math.min(page + cachedPagesAmount, pageList.length - 1);

    while(index <= maxPage) {
      const url = pageList[index];
      if (!loadedImages.has(url) && !fetchQueue.has(url)) {
        fetchImageBlobUrl(url);
      }
      index++;
    }
  }

  async function fetchImageBlobUrl(imageUrl: string): Promise<void> {
    fetchQueue.add(imageUrl);
    const result = await fetch(imageUrl);
    fetchQueue.delete(imageUrl);
    const blob = await result.blob();
    setLoadedImages((loadedImages) => new Map([ ...loadedImages, [ imageUrl, URL.createObjectURL(blob) ]]));
  }

  return loadedImages;
}

export default usePagesToRender;