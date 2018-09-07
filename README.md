# Reusable-Toolbar
A toolbar with components that can be utilized to create a reusable toolbar.

(reusable-toolbar.png?raw=true)

## Requirements
- NPM 6.13.0
- Node 10.2.1

## Installing Dependencies
```sh
npm install 
npm start

Go to http://localhost:9000/ on your browser
```
## Overview

This Reusable Toolbar application was designed to be plugged into any application as an easy to use, customizable toolbar. There are three main components to this application:

- Buttons: Clickable menu items containing either an icon, text, or both
- Dropdown Menus: A menu with a dropdown list of selectable items. This list is visible when the dropdown is hovered over.
- Groupings: A grouping of buttons and/or dropdowns. Creates a gray box around the grouped elements. 

This application was built using React to take advantage of the library's modularity. We can then set our state to pass the information we want to our elements, and create an unlimited number of items in our toolbar with the same pre-built components!

## How to Use

Now that we are familiar with the parts of this application, it's time to put them to good use!

### How do I pass information to my components?
The recommended way to pass information to your buttons and dropdowns is to create a key in state, with the values representing the information to be passed.

#### For Dropdowns
*Within a Grouping:* If you are going to add one or more dropdown to a grouping, you must pass a nested array. Each array within the next represents a dropdown menu. The element in position zero on the nested array will default as the title of the button on load. 

*Outside of a Grouping:* A single array, with each element representing an item on the dropdown list. (Not recommended)

For example:

__Examples__

_One Dropdown in a Grouping_
```sh
myDropdown: [['Arial', 'Roboto', 'PT Serif', 'Lobster']]
```

_TwoDropdowns in a Grouping_
```sh
dropdown2: [
  ['Arial', 'Roboto', 'PT Serif', 'Lobster'], 
  ['Red', 'Blue', 'Orange', 'Green']
],
```

_A Dropdown Created Outside of a Grouping_
```sh
dropdownOutsideGrouping: ['First', 'Second', 'Third']
```


#### For Buttons
Buttons are passed as an array containing objects. The object should use one (or more, if desired) of the following keys:
- icon1
- text
- icon2

The keys icon1 and icon2 are interchangeable if only an icon is appearing on the button. However, if text is added to the button, icon1 will place the icon before the text, and icon2 will place the icon after the text. 

If multiple buttons are to be included in a set, then simply add another object containing the desired information.

__Examples__

_Icon Only_
```sh
myButton: [
  {
    icon1: 'align-left'
  }
]
```

OR

```sh
myButton: [
  {
    icon2: 'align-center'
  }
]
```

_Icon Followed by Text_
```sh
myButton2: [
  {
    icon1: 'align-left',
    text: 'Align Left'
  }
]
```

_Text Followed by Icon_
```sh
myButton3: [
  {
    text: 'align-right',
    icon2: 'Align Right'
  }
]
```

_Text with Icons on Left and Right_
```sh
myButton4: [
  {
    icon1: 'align-left',
    text: 'I love to Align',
    icon2: 'align-right'
  }
]
```

_More than one button_
```sh
multiButtons: [
  {
    icon1: 'align-left'
  },
  {
    icon1: 'align-center'
  },
  {
    icon1: 'align-right'
  },
  {
    text: 'Click Here!'
  }
]
```

### So I added my information to state. How do I create my element?
Great! Now we can begin displaying our components to the screen. For best results, each element should be placed in a <Grouping /> component. <Grouping /> contains one or more elements, and gives more control on how the elements will be displayed on the menu bar. Then, you may add pass an state you had created using 'buttons' and/or 'dropdown'. If nothing is passed to <Grouping />, you will be given a warning to add a dropdown or button.

_Example Toolbar_
```sh

export default class App extends Component {
  constructor(props) {
    super(props);

    //Our state containing the labels for our buttons and dropdowns
    this.state = {
      buttons1: [
        { icon1: 'bold' }, 
        { icon2: 'underline' }, 
        { icon1: 'italic' }
      ],
      buttons2: [
        { icon1: 'align-left' }, 
        { icon1: 'align-center' },
        { icon1: 'align-right' }
      ],
      dropdown1: ['First', 'Second', 'Third'], 
      dropdown2: [
        ['Arial', 'Roboto', 'PT Serif', 'Lobster'], 
        ['Red', 'Blue', 'Orange', 'Green']
      ]
    }
  }

  //Passing our state to our components to create our buttons and dropdowns
  render() {
    return(
      <div className="menubar">
        <Grouping buttons={ this.state.buttons1 } dropdown={ this.state.dropdown1 } /> //Creates a grouping with three buttons and a dropdown
        <Grouping buttons={ this.state.buttons2 } /> // Creates a grouping with three buttons
        <Grouping dropdown={ this.state.dropdown2 } /> //Creates a grouping with two dropdowns
        <Grouping /> // Displays a warning that nothing is being passed
      </div>
    )
  }
  ```

The preceeding code would produce:
(results.png?raw=true)

### Wait.. I see I can add icons to my buttons. How do I do it?
Glad you asked! The icons on the buttons are created using Font Awesome. While this application uses the free version of Font Awesome, you are almost certain to find what you are looking for here: https://fontawesome.com/icons?d=gallery&m=free

After finding the icon you would like to use, simply copy the name of the element and add it to either icon1 or icon2! For example, if you would like a calendar icon, you may use:

```sh
calendarButton: {
  icon1: 'calendar'
}
```

Again, calendar is the name of the icon on Font Awesome. 


## Future Functionality

### Buttons
- Have the option to select only one or many button in a group. For example, bold, italicize and underline my text. Or, the ability to only select one button from a group. For example, Left, right, or justify my text.

### Database Support
- Right now, each piece of the menu must be hard-coded. 