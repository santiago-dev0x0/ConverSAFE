import { useState, useEffect } from "react";

interface UseQueryResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

export const useQuery = <T>(queryFn: () => Promise<T>): UseQueryResult<T>=>{
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    const refetch = async () =>{
        try {
            setLoading(true);
            const result = await queryFn();
            setData(result);
            setError(null);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Error al cargar los datos';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        refetch();
    }, []);

    return { data, loading, error, refetch };
}