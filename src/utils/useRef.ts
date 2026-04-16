const useRef = <T>(initial: T) => {
    const ref = { current: initial }
    return ref
}

export default useRef
