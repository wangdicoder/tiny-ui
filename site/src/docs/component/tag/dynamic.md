### Add & Remove Dynamically

Adding or removing a set of tags dynamically.

<!--start-code-->

```jsx
const { useState, useRef } = React;

const EditableTagGroup = () => {
  const [tags, setTags] = useState(['Unremovable', 'Tag 2', 'Tag 3']);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  
  const showInput = () => {
    setInputVisible(true);
  };
  
  const handleInputChange = (val) => {
    setInputValue(val);
  };
  
  const handleInputConfirm = () => {
    let tagValues = [...tags];
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tagValues.push(inputValue);
    }
    setTags(tagValues);
    setInputVisible(false);
    setInputValue('');
  };
  
  const handleClose = (removedTag) => {
    const tags = tags.filter(tag => tag !== removedTag);
    setTags(tags);
  };
    
  return (
    <div>
      {tags.map((tag, idx) => (
        <Tag key={idx} closable={idx !== 0} onClose={() => handleClose(tag)}>{tag}</Tag>
      ))}
      {inputVisible && (
        <Input
          autoFocus
          size="sm"
          style={{ width: 78, display: 'inline-block' }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onEnterPress={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag onClick={showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
          <Icon type="plus" size={11}/> New Tag
        </Tag>
      )}
    </div>
  );
};

render(<EditableTagGroup />);
```

<!--end-code-->
