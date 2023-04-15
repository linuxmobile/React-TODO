import { useRef, useReducer, useEffect } from 'react'

function useLocalStorageReducer<Data extends Reducer<any, any>>(
  key: string,
  reducer: Data,
  initialState: ReducerState<Data>,
  {
    serialize = JSON.stringify,
    deserialize = JSON.parse,
  } = {}
) {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const init = typeof initial === 'function' ? initial() : initial
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

  return [state, dispatch] as const
}

export default useLocalStorageReducer
