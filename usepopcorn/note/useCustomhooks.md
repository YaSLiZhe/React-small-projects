# Custom Hooks

Custom hooks in React allow us to reuse stateful logic among multiple components. They provide a way to encapsulate and share reusable logic, making our code more modular and maintainable.

## What are Custom Hooks?

- Custom hooks are JavaScript functions that can contain one or more React hooks.
- They allow us to reuse non-visual logic, making our code more reusable and portable.
- Custom hooks can receive and return any data relevant to the logic they encapsulate.
- It's common to return objects or arrays from custom hooks.

## When to Create a Custom Hook?

- Create a custom hook when you want to reuse logic that contains one or more React hooks.
- If the logic does not contain any hooks, a regular function can be used instead.

## Rules for Custom Hooks

- Custom hooks must start with the word "use" in their function name to be recognized by React as hooks.
- This naming convention is important to differentiate between regular functions and custom hooks.

## Example of a Custom Hook

Here's an example of a custom hook called `useFetch` that abstracts a simple fetch functionality:

```javascript
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading };
}

export default useFetch;
```

In this example, the useFetch hook encapsulates the fetch functionality using useState and useEffect hooks. It accepts a URL as a parameter and returns an object with the fetched data and loading state.

By following the rules of hooks, this custom hook can be used in multiple components to fetch data without duplicating the logic.

## Summary

- Custom hooks in React allow us to reuse stateful logic among components.
- They are JavaScript functions that can contain one or more React hooks.
- Custom hooks should start with the word "use" in their function name.
- They make our code more reusable, portable, and maintainable.
- Custom hooks can encapsulate any non-visual logic, not just state-related logic.
- Use custom hooks when you want to reuse logic that contains React hooks.
