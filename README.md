# Vanilla JS React Hooks

A recreation of React's core hooks in vanilla TypeScript — built to understand how they work under the hood.

## Hooks

| Hook | Description |
|------|-------------|
| `useState` | Stores a value and notifies listeners on change |
| `useEffect` | Runs a callback on mount and when dependencies change |
| `useMemo` | Caches a computed value, only recalculates when dependencies change |
| `useRef` | Holds a reference to a value without triggering re-renders |

## Structure

```
src/
  pages/        # HTML pages
  scripts/      # Page-specific TypeScript
  utils/        # Hook implementations
  style.css
index.html      # Entry point
```

## Purpose

This is not a library. It's a learning exercise for what React does internally when you call these hooks.
