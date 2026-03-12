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
          label: <span><IconUser /> Profile</span>,
          children: 'Profile content',
        },
        {
          key: '2',
          label: <span><IconGift /> Rewards</span>,
          children: 'Rewards content',
        },
        {
          key: '3',
          label: <span><IconBroadcast /> Alerts</span>,
          children: 'Alerts content',
        },
      ]}
    />
  );
}
```

</Demo>
