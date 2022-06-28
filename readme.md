# calcite-tree navigation issue

- npm i
- nm run start

1. See in code in my-component. The tree has to be wrapped in a div otherwise we get runtime errors
2. The navigation with right arrow is broken. We cannot enter the subtree. This is because the tree is using `document` when it is in a shadow dom.
3. Uncomment the keyDownHandler function for a potential workaround

