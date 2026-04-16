const useEffect = (callback: () => (() => void) | void, dependencies?: Array<() => unknown>) => {
    let cleanup: (() => void) | void
    let previousDeps: unknown[] = dependencies ? dependencies.map(dep => dep()) : []

    const runEffect = () => {
        if (cleanup) cleanup()
        cleanup = callback()
        previousDeps = dependencies ? dependencies.map(dep => dep()) : []
    }

    const checkDeps = () => {
        if (!dependencies) return
        const changed = dependencies.some((dep, index) => dep() !== previousDeps[index])
        if (changed) runEffect()
    }

    runEffect()

    return checkDeps
}

export default useEffect
