## Cleanup Function in useEffect

The cleanup function is the third part of an effect in the `useEffect` hook. It allows us to execute code when a component unmounts or before the next effect is executed. Here's how it works:

1. After the last effect run, the title of the page in the browser tab was set to "Interstellar Wars".
2. When the movie details component unmounts, we want the title to return to the original text, which is "usePopcorn" (the name of the application).
3. We achieve this by returning a cleanup function from the effect, which will set the title back to "usePopcorn".

### Execution of the Cleanup Function

1. The cleanup function runs before the next effect is executed again to clean up the results of the previous side effect.
2. The cleanup function also runs after the component instance has unmounted, allowing us to reset any side effects if necessary.

### Understanding the Component Lifecycle

1. The dependency array in the `useEffect` hook allows us to run code whenever the component mounts or re-renders.
2. The cleanup function provides a way to run code whenever the component unmounts, completing the component lifecycle coverage.

### When to Use a Cleanup Function

We need a cleanup function whenever a side effect continues to happen after the component has been re-rendered or unmounted. Some examples include:

- Canceling an ongoing HTTP request to avoid race conditions.
- Cancelling a subscription to an API service.
- Stopping a timer.
- Removing an event listener.

### Best Practice: One Thing per Effect

Each effect should only have one responsibility. If you need to create multiple effects in your components, use multiple `useEffect` hooks. This makes each effect easier to understand and cleanup using a cleanup function.
