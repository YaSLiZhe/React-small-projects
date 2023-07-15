# React useReducer

## Introduction

- `useReducer` is a hook in React that allows managing complex state and state transitions.
- It is an alternative to the `useState` hook.
- This note compares `useReducer` with `useState` and discusses when to use each of them.

## useState vs. useReducer

- `useState` is suitable for managing single pieces of independent state (e.g., numbers, strings, arrays, simple objects).
- `useReducer` is useful when dealing with multiple related and dependent pieces of state or complex state.
- `useState` updates state directly with `setState` function, while `useReducer` updates state through a central `reducer` function.

## Centralizing State Updates with useReducer

- `useReducer` allows centralizing all state updating logic in one place, the `reducer` function.
- This decouples the logic from the components and keeps it organized.
- State updates are performed by dispatching actions to the reducer, which handles different actions and state transitions.

### Example: Game Start

- Instead of setting separate states to start a game, with `useReducer`, we dispatch the `startGame` action, and the reducer handles the rest.
- This pattern simplifies state management and makes it more declarative.

## Pros and Cons of useReducer

- Advantages:
  - Centralized state updating logic.
  - Decoupling of logic from components.
  - Declarative state transitions with well-defined actions.
- Disadvantages:
  - Slightly more difficult to understand and implement than `useState`.
  - Requires writing a `reducer` function.

## Deciding Between useState and useReducer

- If only one piece of state is needed, use `useState`.
- If multiple states frequently need to be updated together, consider `useReducer`.
- If a slightly more complex state management solution is acceptable, and a `reducer` can be written, choose `useReducer`.
- If the state is not complex or does not update frequently together, and the component becomes too large and confusing with event handlers, `useReducer` can be an option.

## Conclusion

- `useState` remains the default choice for managing React state in most cases.
- However, if `useState` causes issues or if the state management becomes complex, consider using `useReducer`.
- Understanding `useReducer` puts you in the top 5% of React developers.
