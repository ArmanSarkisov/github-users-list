import { useCallback, useEffect, useState } from 'react';
import { baseURL } from '../constants/baseUrl';

export const useHttp = (endpoint = '', method = 'GET', headers = null, body = null) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const request = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${ baseURL }/${ endpoint }`, {
                method, body, headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                }
            });
            const data = await response.json();

            if (!response.ok) {
                console.error(data.message || 'Something went wrong');
            }

            setData(data);
        } catch (e) {
            console.error(e.message);
        } finally {
            setIsLoading(false);
        }
    }, [setIsLoading, setData, endpoint, method, headers, body]);

    useEffect(() => {
        request();
    }, [request]);

    return {
        data,
        isLoading,
    };
};
