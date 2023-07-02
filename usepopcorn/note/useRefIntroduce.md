# React Hook: useRef

## Introduction

The useRef hook is one of the easiest hooks in React. It allows us to create a reference, or "ref," which is like a box to store data that needs to be preserved between renders.

## Creating Refs

To use useRef, React provides us with an object containing a mutable `current` property. We can write and read data into this `current` property.

## Use Cases for Refs

Refs have two main use cases:

1. Preserving data between renders, such as previous state or the ID of a setTimeout function.
2. Selecting and storing DOM elements. Refs are useful for accessing and preserving DOM elements across renders.

## Usage Guidelines

- Refs are typically used in event handlers or effects, not in JSX.
- If data participates in the visual output of the component, it usually indicates the need for state rather than a ref.
- Ref mutations should be performed inside a useEffect hook to avoid undesirable side effects.

## Similarities and Differences with State

- Both refs and state are persisted across renders.
- Updating state triggers a re-render, while updating refs does not.
- Use state when data should trigger re-rendering and refs when data should be remembered by the component without re-rendering.
- Refs are mutable, while state is immutable.
- State updates are asynchronous, but ref updates are not.

## Summary

- The useRef hook allows us to create a ref to store data between renders.
- Refs are useful for preserving previous state, storing IDs, and selecting DOM elements.
- Refs should not be used for data that affects the visual output of the component.
- State and refs have similarities but differ in their effects on re-rendering and mutability.
