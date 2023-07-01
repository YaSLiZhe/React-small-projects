# Markdown Grammar - Detailed Note

## Introduction to React Hooks

React hooks are special functions built into React that allow developers to tap into React's internal mechanisms and access features such as state management and side effects. Hooks are APIs that expose internal React functionality, providing a way to create and access state from the fiber tree and register side effects within it.

- Hooks enable developers to hook into React's internal mechanisms.
- They provide access to internal React functionality, such as state and side effects.
- Hooks start with the word "use" to distinguish them from regular functions.
- Custom hooks can also be created, following the same naming convention.

## Advantages of React Hooks

React hooks offer several advantages and have greatly enhanced the development experience with React:

- Hooks allow functional components to have their own state and run side effects.
- They provide an easy way to reuse non-visual logic through custom hooks.
- Hooks replaced the need for class-based components to manage state and component lifecycle.
- React now offers almost 20 built-in hooks, each serving specific purposes.

## Commonly Used React Hooks

Several React hooks are commonly used in React development:

- useState: Manages state in functional components.
- useEffect: Handles side effects in functional components.
- useReducer: Alternative to useState for managing complex state logic.
- useContext: Accesses context in functional components.

## Rules of Hooks

To ensure proper functioning of hooks, two important rules must be followed:

1. Hooks can only be called at the top level:

   - Hooks should not be called inside conditionals, loops, or nested functions within a component.
   - Hooks must always be called in the same order on every render.

2. Hooks can only be called from React functions:
   - Hooks can be called from function components or custom hooks.
   - They cannot be called from regular functions or class components.

React's ESLint rules automatically enforce these rules, preventing violations during development.

## Understanding the Call Order and Linked List

Hooks rely on a linked list to associate each hook with its value. The order in which hooks are called uniquely identifies them.

- Hooks must be called in the same order on every render to maintain the correct association.
- Calling hooks conditionally or breaking the order leads to incorrect associations.
- The linked list is built based on the call order of the used hooks.

## Importance of the First Rule of Hooks

The first rule of hooks, which states that hooks can only be called at the top level, is crucial for maintaining the integrity of the linked list and ensuring correct associations between hooks and their values.

- Hooks only work if they are called in the same order on every render.
- Calling hooks conditionally or breaking the order results in a broken linked list and incorrect associations.

## Benefits of the Linked List Structure

The linked list structure, reliant on the order of hook calls, offers benefits in associating hooks with their values without manual naming.

- The order of hook calls uniquely identifies each hook.
- The linked list structure simplifies the association of hooks with their values.
- Manual naming of hooks would create additional problems.

## Conclusion

React hooks provide a powerful way to manage state and side effects in functional components. By following the rules of hooks, developers can ensure the correct functioning of hooks and leverage their benefits effectively.

Remember:

- Call hooks at the top level.
- Call hooks only from React functions.

These rules ensure that hooks work correctly and enable efficient development with React. The use of hooks has significantly improved the development experience, allowing functional components to handle state and side effects efficiently.
