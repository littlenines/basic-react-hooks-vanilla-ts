const useMemo = <T>(compute: () => T, dependencies: Array<() => unknown>) => {
    let cachedValue: T = compute()
    let previousDeps: unknown[] = dependencies.map(dep => dep())

    const get = () => {
        const changed = dependencies.some((dep, index) => dep() !== previousDeps[index])
        if (changed) {
            previousDeps = dependencies.map(dep => dep())
            cachedValue = compute()
        }
        return cachedValue
    }

    return get
}

export default useMemo