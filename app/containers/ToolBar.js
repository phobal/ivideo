import React from 'react';
import Select, { Option } from 'rc-select';
// import { Icon, Select, Button } from 'antd';

const ToolBar = ({ onComeback, onSwitchSource, onSourceSelected, freeUrl, title }) => {
  const options = freeUrl.map(d => {
    return (
      <Option key={d.name} value={d.name}>{d.name}</Option>
    )
  })
  return (
    <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
      <div type="rollback" style={{ fontSize: '18px', cursor: 'pointer' }} onClick={onComeback}>返回</div>
      <span style={{ padding: '0 20px', color: 'darkcyan' }}>{title}</span>
      <div
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Select
          style={{ width: '200px' }}
          placeholder="请选择路线"
          onSelect={onSourceSelected}
        >
          {options}
        </Select>
        <div
          style={{ width: '100px', height: '40px', lineHeight: '40px', cursor: 'pointer', background: '#2196f3', color: '#fff', textAlign: 'center', marginLeft: '20px' }}
          onClick={onSwitchSource}
        >确定</div>
      </div>
    </div>
  )
}

export default ToolBar;