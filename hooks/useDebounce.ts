import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number): T {
    const [deboucedValue, setDeboucedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDeboucedValue(value)
        }, delay || 500)

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay]);

    return deboucedValue;
};

export default useDebounce;