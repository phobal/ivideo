import React from 'react';
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';

const Channel = ({ channel, handleSwitchChannel }) => {
  const item = channel.map(d => {
    return <MenuItem key={d.url}>{d.name}</MenuItem>
  });
  return (
    <Menu onSelect={handleSwitchChannel}>
      {item}
    </Menu>
  );
}

export default Channel;