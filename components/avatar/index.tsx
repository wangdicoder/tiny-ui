import React from 'react';
import Avatar, { AvatarProps } from './avatar';
import AvatarGroup from './avatar-group';

export { AvatarProps, AvatarPresence, AvatarShape } from './avatar';
export { AvatarGroupProps } from './avatar-group';

type IAvatar = React.FC<AvatarProps> & {
  Group: typeof AvatarGroup;
};

const defaultAvatar = Avatar as IAvatar;
defaultAvatar.Group = AvatarGroup;

export default defaultAvatar;
