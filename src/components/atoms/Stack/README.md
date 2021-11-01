The Stack component manages layout of immediate children along the vertical or horizontal axis with optional spacing and/or dividers between each child.

Stack is concerned with one-dimensional layouts, while flex-box that handles two-dimensional layouts. The default direction is row which stacks children horizontally.

To control space between children, use the spacing prop. The spacing value can be any number, including decimals and any string. The prop is converted into a CSS property 

## Direction
By default, Stack arranges items horizontally in a row. However, the direction prop can be used to position items vertically in a column as well.

## Dividers
Use the divider prop to insert an element between each child. This works particularly well with the Divider component.

## Interactive
Below is an interactive demo that lets you explore the visual results of the different settings: