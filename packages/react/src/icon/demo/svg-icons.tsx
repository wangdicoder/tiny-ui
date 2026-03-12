import * as Icons from '@tiny-design/icons';
import type { IconProps } from '@tiny-design/icons';

const iconEntries = Object.entries(Icons).filter(
  ([key]) => key.startsWith('Icon')
) as [string, React.FC<IconProps>][];

const SvgIconList = (): JSX.Element => {
  return (
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        padding: 0,
        margin: 0,
        borderTop: '1px solid #eaeefb',
        borderLeft: '1px solid #eaeefb',
      }}>
      {iconEntries.map(([name, Component]) => (
        <li
          key={name}
          style={{
            width: '16.66%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#454545',
            borderRight: '1px solid #eaeefb',
            borderBottom: '1px solid #eaeefb',
            padding: '20px 0',
          }}>
          <Component size={30} />
          <span style={{ marginTop: 8, fontSize: 12 }}>{name}</span>
        </li>
      ))}
    </ul>
  );
};

export default SvgIconList;
