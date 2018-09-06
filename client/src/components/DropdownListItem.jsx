import React from 'react';
import FontAwesome from 'react-fontawesome';

const DropdownListItem = ({title, switchDropdownSelected}) => (
  <div className="" onClick={() => { switchDropdownSelected(title) }}>{title}</div>
);

export default DropdownListItem;

