### Checkable

`CheckableTag` works like Checkbox, click it to toggle checked state. 

> It obviously also has controlled & uncontrolled mode.

<!--start-code-->

```jsx
const { CheckableTag } = Tag;

const onChange = (checked) => {
  console.log(checked)
};

render(
  <>
    <CheckableTag defaultChecked={true} onChange={onChange}>Tag1</CheckableTag>
    <CheckableTag defaultChecked={false} onChange={onChange}>Tag2</CheckableTag>
    <CheckableTag defaultChecked={false} onChange={onChange}>Tag3</CheckableTag>
  </>
);
```

<!--end-code-->
