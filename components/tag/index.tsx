import React from 'react';
import Tag, { TagProps, PresetColors } from './tag';
import CheckableTag, { CheckableTagProps } from './checkable-tag';

export { TagProps, PresetColors, CheckableTagProps };

type ITag = React.FC<TagProps> & {
  CheckableTag: typeof CheckableTag;
};

const DefaultTag = Tag as ITag;
DefaultTag.CheckableTag = CheckableTag;

export default DefaultTag;
