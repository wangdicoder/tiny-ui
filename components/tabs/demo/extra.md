<Demo>

### Extra Content

Add extra content to the tab bar with `tabBarExtraContent`. Use icons in tab labels via `items`.

```jsx live
() => {
  return (
    <Tabs
      defaultActiveKey="1"
      tabBarExtraContent={<Button size="sm">Action</Button>}
      items={[
        {
          key: '1',
          label: <span><Icon name="user" /> Profile</span>,
          children: 'Profile content',
        },
        {
          key: '2',
          label: <span><Icon name="gift" /> Rewards</span>,
          children: 'Rewards content',
        },
        {
          key: '3',
          label: <span><Icon name="broadcast" /> Alerts</span>,
          children: 'Alerts content',
        },
      ]}
    />
  );
}
```

</Demo>
