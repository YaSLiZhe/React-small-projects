# Styling React Applications

## Introduction

- React provides multiple options for styling applications.
- React is unopinionated about styling, allowing for various approaches.
- The different styling options are often provided by third-party libraries.

## Styling Options in React

1. Inline CSS:

   - Apply inline styles to JSX elements using the `style` prop.
   - Inline styles are locally scoped to the specific JSX element.

2. External CSS:

   - Include an external CSS file and apply styles using the `className` prop.
   - Styles defined in the CSS file are globally accessible.

3. CSS Modules:

   - Write one CSS file per component.
   - Styles in CSS modules are scoped to the specific component, avoiding global conflicts.
   - CSS modules enhance modularity and reusability of components.

4. CSS in JavaScript (Styled Components):

   - Write CSS directly inside a JavaScript file alongside component definitions.
   - CSS is applied as styles to React components.
   - This approach aligns with React's philosophy of encapsulating component-specific information.

5. Utility-First CSS Frameworks (e.g., Tailwind):

   - Use predefined utility classes to define styles directly in JSX.
   - Utility classes enable efficient styling for layouts, responsiveness, and UI design.
   - Eliminates the need to write custom CSS while working within the JSX markup.

6. Component Libraries:

   - Utilize fully-fledged UI component libraries like Material UI, Chakra UI, or Mantine.
   - Prebuilt and pre-styled components are available for common web application elements.
   - Offers an alternative to writing custom CSS.

7. No CSS:
   - Build projects using a UI component library without writing custom CSS.
   - Not recommended for beginners but worth exploring later.

## Summary

- React offers multiple options for styling applications.
- Inline CSS allows applying styles directly to JSX elements.
- External CSS files can be used with the `className` prop but may cause global styling issues in large projects.
- CSS modules enable component-specific styling and modularity.
- CSS in JavaScript libraries like Styled Components integrate CSS directly into component files.
- Utility-first CSS frameworks like Tailwind offer predefined classes for styling within JSX.
- Component libraries provide prebuilt and pre-styled components for common web application elements.
- No CSS option involves relying entirely on a UI component library without writing custom CSS.
