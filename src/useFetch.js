import { useState, useEffect } from 'react';

// custom hook. cHooks need to start with 'use' or it wont work
const useFetch = (url) => {
    // changed 'blogs' in first useState to 'data' to make hook reusable
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

        useEffect(() => {
            // aborts fetch for homepage if moving to another route from home before fetch has finished
            const abortCont = new AbortController();

            setTimeout(() => {
                fetch(url, { signal: abortCont.signal })
                    .then(res => {
                        if (!res.ok) {
                            throw Error('could not fetch the data for that resource')
                        }
                        return res.json();
                    })
                    .then((data) => {
                        setData(data);
                        setIsPending(false);
                        setError(null);
                    })
                    .catch(err => {
                        if (err.name === 'AbortError') {
                            console.log('fetch aborted')
                        } else {
                            setIsPending(false);
                            setError(err.message);
                        }
                    })
            }, 1000);

            return () => abortCont.abort;
        }, [url]);
    
    return { data, isPending, error };
}

export default useFetch;