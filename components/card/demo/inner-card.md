<demo>

### Inner card

It can be placed inside the ordinary card to display the information of the multilevel structure. 

```jsx live
<Card title="Parent Card">
  <Card.Content>
    <h5 style={{ marginTop: 0 }}>Group title</h5>
    <Card title="Child Card" extra={<a href="#">More</a>}>
      <Card.Content>
        <div>Inner Card content</div>
      </Card.Content>
    </Card>
 
    <Card title="Child Card" extra={<a href="#">More</a>}>
      <Card.Content>
        <div>Inner Card content</div>
      </Card.Content>
    </Card>
  </Card.Content>
</Card>
```

</demo>
