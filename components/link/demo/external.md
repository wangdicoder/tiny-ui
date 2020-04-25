<demo>

### External

It will open a new window when clicking the link by default. Set `external={false}` to open the link in the current window.

```jsx live
<>
  <span>This <Link href="https://google.com/">link</Link> will open a new window.</span>
  <br/>
  <span>This <Link external={false} href="https://google.com/">link</Link> will refresh the current window.</span>
</>
```

</demo>
