### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or with text together.

<!--start-code-->

```jsx
render(
  <>
    <Button icon={<Icon type="wifi"/>} color="primary"/>
    <Button icon={<Icon type="gift"/>} color="primary"/>
    <Button icon={<Icon type="search"/>} color="primary">Search</Button>
    <Button color="primary">Upload <Icon type="Upload1"/></Button>
  </>
);
```

<!--end-code-->
