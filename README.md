# queryparent
JavaScript's missing `queryParent` function.

Takes two arguments:

1. A `selector`.
2. A `parentNode` of that selector.

Given element `.bar` with parent element `.foo`, you would do:

```javascript
queryParent('.bar', '.foo');
// => Returns `.bar`.
```

Check out a demo of it here:

https://jsfiddle.net/ryanpcmcquen/zkw0gdj7/

## Why is it better than `.contains()`?

`.contains()` will not work easily in cases where there are multiple similar parent selectors.
For an example of what that means see the above fiddle.
