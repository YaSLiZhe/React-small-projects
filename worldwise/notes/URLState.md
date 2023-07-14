# Storing UI State in the URL with React Router

## Introduction

- Storing state in the URL allows for easy access to state across all components in the app.
- UI state, which affects the appearance of the UI, is a good candidate for storing in the URL.
- Storing state in the URL is beneficial for sharing and bookmarking pages with specific UI states.

## Advantages of Storing State in the URL

1. Global Accessibility: Placing state in the URL makes it easily accessible to all components in the app without passing it down through props.
2. Passing Data Between Pages: Storing state in the URL allows for seamless data transfer between pages without the need for temporary storage.
3. Bookmarking and Sharing: Storing UI state in the URL enables bookmarking and sharing of pages with the exact UI state.

## React Router and URL State Management

- React Router provides the functionality to manage state in the URL.
- Params: Parameters passed in the URL are useful for passing data to the next page.
- Query string: The query string in the URL is useful for storing global state accessible across the app.

### Params

- Params are used to pass data to the next page.
- For example, a URL like `/app/cities/Lisbon` can pass the city name "Lisbon" to the next page.
- Clicking on a link with the corresponding city name in the URL will load the page specific to that city.

### Query String

- The query string is used to store global state accessible throughout the app.
- For example, a URL like `/app/map?lat=38.7223&lng=-9.1393` stores the latitude and longitude coordinates in the query string.
- Each city in the example has a unique location reflected in the URL.

## Summary

- Storing UI state in the URL with React Router provides several benefits, such as global accessibility, seamless data transfer between pages, and the ability to bookmark or share pages with specific UI states.
- Params are used to pass data to the next page, while the query string stores global state.
- React Router enables the management of state in the URL, making it a powerful tool for state management in React applications.
