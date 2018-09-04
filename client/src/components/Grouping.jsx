import React from 'react';
import FontAwesome from 'react-fontawesome';

import DropdownMenu from './DropdownMenu.jsx';
import ToggleButton from './ToggleButton.jsx';


const Grouping = ({buttons, dropdown}) => {
  var b, d;
  var groupingHolder = [];
  if(buttons) b = true;
  if(dropdown) d = true;

  if(b && d) {
    buttons.map((button, i) => {
      groupingHolder.push( <ToggleButton key={i} icon={button} /> )
    });
    dropdown.map((dd, j) => {
      groupingHolder.push( <DropdownMenu key={j} listItems={dd} /> )
    });
  } else if (b) {
   buttons.map((button, i) => {
      groupingHolder.push( <ToggleButton key={i} icon={button} /> )
    });
  } else if (d) {
    dropdown.map((dd, i) => {
      groupingHolder.push( <DropdownMenu key={i} listItems={dd} /> )
    });
  } else {
    return <p className="danger"><FontAwesome name={"exclamation-triangle"} /> No Dropdown or Button Found</p>    
  }

  return groupingHolder.map((item) => {
    return item
  })
};

export default Grouping;

/*
  Can only   
*/