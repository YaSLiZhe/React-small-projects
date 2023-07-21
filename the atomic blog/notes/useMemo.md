# Memoization in React

## Introduction

- Memoization is an optimization technique used to execute a pure function once and store its results in memory (cache).
- If the same function is called with the same inputs, it returns the cached result instead of executing the entire code again.
- In React, we can use memoization to optimize our applications, preventing wasted renders and improving speed.

## Memoization and React

- Memoization is achieved in React using the `memo` function and the `useMemo` and `useCallback` hooks.
- The goal is to create memoized components that won't re-render when their parent re-renders, as long as the props stay the same.

## Using the `memo` Function

- `memo` is used to create a memoized component in React.
- It helps to avoid unnecessary re-renders when the component receives the same props.
- The child component won't re-render if the props haven't changed since the previous render.
- However, if the props do change, the child component will re-render to reflect the new data.

## When to Use `memo`

- Memoizing a component is beneficial only for heavy components that cause visible lag or delay during rendering.
- It is only useful when the component renders frequently with the same props.
- If the props are usually different between re-renders, using `memo` has no effect and should not be used.
- Memoization becomes relevant when the component re-renders frequently and is slow in rendering.

## Code Example

```jsx
import React, { memo } from "react";

const MemoizedComponent = memo(({ prop1, prop2 }) => {
  // Component logic here...
  return (
    <div>
      {prop1} - {prop2}
    </div>
  );
});
```

## Summary

Memoization is an optimization technique that stores the results of pure functions in memory for faster future access.
In React, we use the memo function, useMemo, and useCallback hooks for memoization.
Memoized components won't re-render when their props remain the same between renders, preventing unnecessary renders.
Memoization should be used for heavy components that render frequently with the same props, but not for lightweight or infrequently rendering components.
