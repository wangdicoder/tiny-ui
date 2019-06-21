### Three sizes of Input

There are three sizes of an Input box: `lg` (40px), `md` (32px) and `sm` (24px). The default size is **md**.

<!--start-code-->

```jsx
render(
  <div style={{ width: 400 }}>
    <Input size="sm" placeholder="Small size" />
    <br/>
    <Input placeholder="Medium size" />
    <br/>
    <Input size="lg" placeholder="Large size" />
  </div>
);
```

<!--end-code-->
