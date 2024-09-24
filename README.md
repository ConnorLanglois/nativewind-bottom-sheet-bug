# nativewind-shadow-bug

This bug occurs when shadows are nested. In this case, using tailwind classes that reference css variables do not work. For example, `bg-primary` where primary is defined in tailwind.config.js as `var(--primary)`, where --primary is defined in global.css as
```js
:root {
  --primary: #ef4444;
}
```
In this case, bg-primary does nothing; it appears to make the background transparent in fact.

If instead you use `bg-red-500`, which is a built-in tailwind class then it works fine. It will also work fine if you "hardcode" `primary` to its color #ef4444 in tailwind.config.js without referencing a css variable.
