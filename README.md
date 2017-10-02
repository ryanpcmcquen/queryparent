# queryparent
JavaScript's missing `queryParent` function.

Takes two arguments:

1. A `selector`.
2. A `parentNode` of that selector.

Given element `.bar` with parent element `.foo`, you would do:

```javascript
queryParent('.bar', '.foo');
// => Returns `.foo`.
```

Check out a demo of it here:

https://jsfiddle.net/ryanpcmcquen/zkw0gdj7/

## Why is it better than `.contains()`?

`.contains()` will not work easily in cases where there are multiple similar parent selectors.
For an example of what that means see the above fiddle.

It is available via `npm` for new-school kids (es6):

https://www.npmjs.com/package/queryparent

Or [RawGit](http://rawgit.com/) for old-school kids (es5):

https://cdn.rawgit.com/ryanpcmcquen/queryparent/be73bf37ed9d7138702157bf6f86fe3f04068f33/index-es5.js
