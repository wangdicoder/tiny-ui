### Auto set font size

For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar.

<!--start-code-->

```jsx
const UserList = ['Tom', 'U', 'Lucy', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

const Wrapper = () => {
  const [user, setUser] = React.useState(UserList[0]);
  const [color, setColor] = React.useState(colorList[0]);

  const changeUser = () => {
    const idx = UserList.indexOf(user);
    setUser(idx < UserList.length - 1 ? UserList[idx + 1] : UserList[0]);
    setColor(idx < colorList.length - 1 ? colorList[idx + 1] : colorList[0]);
  };

  return(
    <div>
      <Avatar size={50} style={{ backgroundColor: color, marginRight: 15 }}>
        {user}
      </Avatar>
      <Button size="sm" onClick={changeUser}>
        Change
      </Button>
    </div>
  );
};

render(<Wrapper />);
```

<!--end-code-->
