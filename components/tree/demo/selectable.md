<demo>

### Selectable

Make nodes selectable.

```jsx live
class SelectableExample extends React.PureComponent {
  constructor() {
    super();
    this.treeData = [
      {
        key: '1',
        title: 'parent 1',
        children: [
          {
            key: '2',
            title: 'parent 1-0',
            disabled: true,
            children: [
              {
                key: '3',
                title: 'child 1',
                disableCheckbox: true,
              },
              {
                key: '4',
                title: 'child 2',
              },
            ],
          },
          {
            key: '5',
            title: 'parent 1-1',
            children: [{ title: <span style={{ color: '#1890ff' }}>abc</span> }],
          },
        ],
      },
    ];
  }

  render(){
    return (
      <Tree
        checkable
        defaultExpandAll
        defaultCheckedKeys={['2', '5']}
        data={this.treeData}
        onCheck={(keys) => console.log(keys)}
      />
    );
  }
}
```

</demo>
