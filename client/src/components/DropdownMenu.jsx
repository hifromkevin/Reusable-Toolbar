import React from 'react';
import FontAwesome from 'react-fontawesome';

import DropdownListItem from './DropdownListItem.jsx';

const DropdownMenu = ({name, listItems}) => (
  <div>
    <div className="dropdown component">
      <div className="component__title">
        <p>{listItems[0]} <FontAwesome name='caret-down' /></p>
      </div>
    </div>
    <div className="dropdown__submenu">
      {listItems.map((item, index) => {
        return <DropdownListItem key={index} title={item} />
      })
      }
    </div>
  </div>

);

export default DropdownMenu;