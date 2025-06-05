import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch(url, { signal })
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                if (error.name !== "AbortError") {
                    setError(error);
                    setLoading(false);
                }
            });

        return () => controller.abort();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
