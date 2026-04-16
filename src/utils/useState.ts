const useState = <T>(initial: T) => {
  let state = initial
  let listener: (val: T) => void = () => {}

  const set = (value: T) => {
    state = value
    listener(state)
  }

  const subscribe = (render: (val: T) => void) => { listener = render }

  const get = () => state

  return [get, set, subscribe] as const
}

export default useState;