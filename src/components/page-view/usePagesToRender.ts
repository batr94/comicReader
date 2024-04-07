import { useState, useEffect } from 'react';

function usePagesToRender(
  currentPage: number,
  pageList: string[],
  cachedPagesAmount: number = 2
) {
  const [loadedImages, setLoadedImages] = useState<Map<string, HTMLImageElement>>(new Map());

  useEffect(() => {
    loadedImages.forEach((image) => image.src = '')
    loadedImages.clear();
  }, [pageList]);

  useEffect(() => {
    requestImagesByPage(currentPage);
  }, [currentPage, pageList]);

  function createImage(src: string) {
    const image = new Image();
    image.addEventListener('load', () => {
      if (loadedImages.has(src)) {
        setLoadedImages(new Map([ ...loadedImages ]))
      }
    })

    return image;
  }

  function requestImagesByPage(page: number) {
    if (loadedImages.size === pageList.length) {
      return;
    }

    let index = Math.max(page - cachedPagesAmount, 0);
    const maxPage = Math.min(page + cachedPagesAmount, pageList.length - 1);

    while(index <= maxPage) {
      const src = pageList[index];
      if (!loadedImages.has(src)) {
        const image = createImage(src);
        loadedImages.set(src, image);
        image.src = src;
      }
      index++;
    }
  }

  return loadedImages;
}

export default usePagesToRender;