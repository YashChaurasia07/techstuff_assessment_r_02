import { useState, useCallback, useMemo } from 'react';

export function usePagination(maxPages, onPageChange) {
  const [page, setPage] = useState(1);

  const goPrev = useCallback(() => {
    if (page > 1) {
      const nextVal = page - 1; 
      setPage(nextVal);

      onPageChange && onPageChange();
    }
  }, [page, onPageChange]);

  const goNext = useCallback(() => {
    if (page < maxPages) {
      const updated = page + 1; 
      setPage(updated);
      onPageChange?.();
    }
  }, [page, maxPages, onPageChange]);

  const prevDisabled = useMemo(() => page <= 1, [page]);

  const nextDisabled = useMemo(() => {
    if (!maxPages) return true;
    return page === maxPages;
  }, [page, maxPages]);

  return {
    currentPage: page,
    handlePrevious: goPrev,
    handleNext: goNext,
    isPreviousDisabled: prevDisabled,
    isNextDisabled: nextDisabled
  };
}
