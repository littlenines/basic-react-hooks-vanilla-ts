const useState = <T>(initial: T) => {
  let state = initial
  let listener = new Set<(val: T) => void>();

  const set = (value: T) => {
    state = value
    listener.forEach((callback) => callback(value));
  }

  const subscribe = (render: (val: T) => void) => { 
    listener.add(render)
    return () => listener.delete(render);
   }

  const get = () => state

  return [get, set, subscribe] as const
}

export default useState;