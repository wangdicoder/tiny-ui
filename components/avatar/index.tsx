import Avatar from './avatar';
import AvatarGroup from './avatar-group';

export { AvatarProps, AvatarPresence, AvatarShape } from './avatar';
export { AvatarGroupProps } from './avatar-group';

Avatar.displayName = 'Avatar';
Avatar.Group = AvatarGroup;
export default Avatar;
