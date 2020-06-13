<demo>

### Icon

Customised icons.

```jsx live
class IconExample extends React.PureComponent {
  constructor() {
    super();
    this.treeData = [
      {
        title: 'level one 1',
        children: [{
          title: 'level two 1-1',
          children: [{
            title: 'level three 1-1-1'
          }]
        }]
      }, {
        title: 'level one 2',
        children: [{
          title: 'level two 2-1',
          children: [{
            title: 'level three 2-1-1'
          }]
        }, {
          title: 'level two 2-2',
          children: [{
            title: 'level three 2-2-1'
          }]
        }]
      }, {
        title: 'level one 3',
        children: [{
          title: 'level two 3-1',
          children: [{
            title: 'level three 3-1-1'
          }]
        }, {
          title: 'level two 3-2',
          children: [{
            title: 'level three 3-2-1'
          }]
        }]
      }
    ]
  }

  render(){
    return (
      <Tree 
        data={this.treeData}
        icon={(isExpanded) => isExpanded ? <Icon name="zoomout"/> : <Icon name="zoomin"/> }
      />
    );
  }
}
```

</demo>
