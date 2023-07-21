# Understanding `useMemo` and `useCallback` in React

## Introduction

In React, components are recreated on each re-render, causing all values, objects, and functions defined within the component to be recreated, even if they are the same as before. This can lead to unnecessary re-renders and wasted resources.

## The Problem with `memo` and Passing Objects/Functions as Props

- When using the `memo` function to memoize a component, passing objects or functions as props will cause the component to re-render anyway, as it always sees these props as new, even if they look the same.
- To make `memo` work as expected, we need to make objects and functions stable, preserving them between renders.

## The Solution: `useMemo` and `useCallback`

- `useMemo` and `useCallback` are two hooks provided by React to help us memorize values and functions, respectively, and preserve them across renders.
- By using these hooks, we can memoize values and avoid unnecessary re-calculations and re-creations.

## How `useMemo` Works

- The `useMemo` hook takes a function as its first argument. This function performs an expensive computation or value generation.
- The second argument to `useMemo` is an array of dependencies, similar to the dependency array in `useEffect`.
- When any of the dependencies change between renders, the memoized value is recalculated. Otherwise, the cached value is returned, preserving it across renders.

## Use Cases for `useMemo` and `useCallback`

1. Preventing wasted renders when passing objects or functions as props to memoized components.
2. Avoiding expensive recalculations on every render by preserving the results using `useMemo`.
3. Memorizing values used in the dependency array of other hooks, such as `useEffect`, to avoid infinite loops.

## Code Example

```jsx
import React, { useMemo } from "react";

const MyComponent = ({ prop1, prop2 }) => {
  // Use useMemo to memoize a derived state value
  const derivedState = useMemo(() => {
    // Expensive computation based on props
    return prop1 * 2 + prop2 * 3;
  }, [prop1, prop2]);

  return (
    <div>
      {/* Render the derived state */}
      <p>Derived State: {derivedState}</p>
      {/* Rest of the component */}
    </div>
  );
};
```

## Summary

The useMemo and useCallback hooks in React allow us to memoize values and functions, preserving them across renders.
By using these hooks, we can prevent wasted renders, avoid expensive re-calculations, and handle dependencies in other hooks more efficiently.
