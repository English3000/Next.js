# Next.js

We can [create a page](https://learnnextjs.com/basics/using-shared-components) by exporting a React component, and putting that component inside `/pages`. Then it will have a fixed URL based on the file name.

### Styling

[T]here are a bunch of practical issues to consider with traditional CSS-file-based styling (especially with SSR), so we suggest avoiding this method when styling for Next.js.

`<style jsx></style>` is scoped to a component. `<style jsx global></style>` is scoped to the component and its children.

[For non-Next.js projects, setup to use component-scoped CSS.](https://github.com/zeit/styled-jsx)
