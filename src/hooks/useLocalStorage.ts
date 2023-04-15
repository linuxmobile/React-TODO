import { useState, useEffect, useRef } from 'react'

function useLocalStorageState<State>(
  key: string,
  initialState: State,
  {
    serialize = JSON.stringify,
    deserialize = JSON.parse,
  } = {}
) {
  const [state, setState] = useState(() => {
    const init = typeof initialState === 'function' ? initialState() : initialState
    try {
      const valueInLocalStorage = window.localStorage.getItem(key)
      return valueInLocalStorage ? deserialize(valueInLocalStorage) : init
    } catch (error) {
      return init
    }
  })

  const prevKeyRef = useRef(key)

  useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
  }, [key, serialize, state])

  return [state, setState] as const
}

export default useLocalStorageState
