<demo>

### Customised Icon

Set `icon` props to customize the icon.

```jsx live
<PopConfirm 
  title="Are you sure to delete this?"
  icon={<Icon type="question-fill" color="#f00"/>}
  onConfirm={() => Message.info('You clicked Yes')}>
  <a href="#" style={{color: '#6E41BF'}}>Delete</a>
</PopConfirm>
```

</demo>
