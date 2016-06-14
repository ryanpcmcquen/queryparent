# queryparent
JavaScript's missing `queryParent` function.

Takes two arguments:

1. A `selector`.
2. A `parentNode` of that selector.

Give element `.bar` with parent element `.foo`, you would do:

```javascript
queryParent('.bar', '.foo');
// => Returns `.bar`.
```

Check out a demo of it here:

https://jsfiddle.net/ryanpcmcquen/zkw0gdj7/
