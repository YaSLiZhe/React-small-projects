# State Management and the Context API

## Types of State

- State can be classified based on accessibility (local or global) and domain (UI or remote).
- Local state is only needed by one or a few components, while global state is needed by multiple components.
- UI state refers to non-core application data, while remote state is data fetched from a server.

## Placing State

- Local state: Use `useState`, `useReducer`, or `useRef` in a component.
- Global state: Lift state up to a parent component or use a state management library.
- UI state: Manage with `useState`, `useReducer`, or the Context API.
- Remote state: Use `useState`, `useReducer`, or specialized tools like React Query or SWR.
- Third-party state management libraries like Redux, React Query, SWR, or Zustand can handle global state.

## Tools for State Management

| State Type          | Tools                                              |
| ------------------- | -------------------------------------------------- |
| Local UI State      | `useState`, `useReducer`, or `useRef`              |
| Local Remote State  | `useState`, `useReducer`, fetch inside `useEffect` |
| Global Remote State | Context API, Redux, React Query, SWR, RTK Query    |
| Global UI State     | Context API, Redux, third-party libraries          |

## Summary:

State can be classified based on accessibility (local or global) and domain (UI or remote).
Local UI state can be managed using useState, useReducer, or useRef.
Local remote state can be fetched using useEffect and managed with useState or useReducer.
Global remote state can be managed with the Context API, Redux, React Query, SWR, or RTK Query.
Global UI state can be managed with the Context API, Redux, or other third-party libraries.
The provided table summarizes the tools to use for each type of state management, making it easier to decide which approach to choose based on the specific requirements of the application.
