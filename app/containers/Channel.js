import React from 'react';
import Menu, { Item as MenuItem } from 'rc-menu';

const Channel = ({ channel, handleSwitchChannel }) => {
  const item = channel.map((d) => <MenuItem key={d.url}>{d.name}</MenuItem>);
  return <Menu onSelect={handleSwitchChannel}>{item}</Menu>;
};

export default Channel;
