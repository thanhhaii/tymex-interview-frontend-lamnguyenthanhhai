import { PAGINATION_SIZE } from '@app/constants/variables';
import { ResponseBase, PaginationResponse } from '@app/types/apiTypes';
import { useState, useCallback, useEffect } from 'react';

type Params = Record<string, any> & {
    offset?: number;
    size?: number;
};

interface UsePaginatedFetchProps<T> {
  apiFn: (params: Record<string, any>) => Promise<ResponseBase<PaginationResponse<T>>>;
  initialParams?: Params;
}

export function usePaginatedFetch<T>({
    apiFn,
    initialParams = {
        offset: 0,
        size: PAGINATION_SIZE,
    },
}: UsePaginatedFetchProps<T>) {
    const [data, setData] = useState<T[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = useCallback(
        async (pageNum: number) => {
            if (loading) return;
            setLoading(true);

            try {
                const response = await apiFn({
                    ...initialParams,
                    offset: (pageNum - 1) * PAGINATION_SIZE,
                    size: PAGINATION_SIZE,
                });

                if (response.success) {
                    setData((prev) =>
                        pageNum === 1 ? response.data.items : [...prev, ...response.data.items],
                    );
                    setHasMore(response.data.hasMore);
                    setPage(pageNum);
                }
            } catch (error) {
                throw error;
            } finally {
                setLoading(false);
            }
        },
        [apiFn, initialParams, loading],
    );

    const onGetNextPage = useCallback(() => {
        if (hasMore && !loading) {
            fetchData(page + 1);
        }
    }, [hasMore, loading, page, fetchData]);

    const onRefresh = useCallback(() => {
        fetchData(1);
    }, [fetchData]);

    useEffect(() => {
        onRefresh();
    }, [initialParams]);

    return {
        data,
        loading,
        hasMore,
        onGetNextPage,
        onRefresh,
    };
}