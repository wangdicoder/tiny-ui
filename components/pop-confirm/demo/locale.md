<demo>

### Locale text

Set `confirmText` and `cancelText` props to customise button's labels.

```jsx live
<PopConfirm title="Are you sure to delete this?" confirmText="OK" cancelText="Cancel" onConfirm={() => Message.info('You clicked Yes')}>
  <a href="#" style={{color: '#6E41BF'}}>Delete</a>
</PopConfirm>
```

</demo>
