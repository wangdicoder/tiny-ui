import Avatar, { AvatarProps, AvatarPresence, AvatarShape } from './avatar';
import AvatarGroup, { AvatarGroupProps } from './avatar-group';

export { AvatarProps, AvatarPresence, AvatarShape, AvatarGroupProps };

type IAvatar = typeof Avatar & {
  Group: typeof AvatarGroup;
};

const DefaultAvatar = Avatar as IAvatar;
DefaultAvatar.Group = AvatarGroup;

export default DefaultAvatar;
