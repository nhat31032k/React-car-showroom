"use client"
import { useCallback, useEffect, useState } from "react"
type AsyncCallback<T> = () => Promise<T>;
export default function useAsync<T>(callback: AsyncCallback<T>, dependencies = []) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | undefined>();
    const [value, setValue] = useState<T | undefined>();


    const callbackMemoized = useCallback(() => {
        setLoading(true)
        setError(undefined)
        setValue(undefined)
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, dependencies)

    useEffect(() => {
        callbackMemoized()
    }, [callbackMemoized])

    return { loading, error, value }
}