# Intro To State Exercise

So far you've learned the following about React:

- Creating and nesting Components
- Passing props and how to using them in JSX
- Importing and setting up state
- Updating state and re-rendering the Component
- Adding and calling event listeners

Now it's time to put it all together. At a high level you will do the following:

> Using only a single App Component you will implement the logic that allows a user to click on one of 4 small images and then update the DOM to display that image as the large image.

<img src="https://i.imgur.com/RVEofv5.jpg" width=200/>

## Working Version

Here is a [working version](https://k8jfb.csb.app/) of the app so you have a reference of the base functionality that you are being asked to implement.

## Starter CodeSandbox

Here is our [Starter CodeSandbox](https://codesandbox.io/s/rctr-9-8-20-react-cities-starter-kpsk5)

## Instructions

For this exercise you will do the following:

#### App Component

- Examine the working live solution and determine the functionality needed
- Examine the HTML provided in `src/index.html` as this contains the HTML elements needed for the design
- Determine how best to organize the data needed to render the images
- Create a file called imageData.js that contains an array of image objects that are assigned keys of your own choosing, but must include the image url and alt values.
- Using Array.map() loop over the data to create the small images based on the structure you decided
- Render the array of small image elements
- Import `useState` into App
- Use one instance of `useState` to implement the logic.
- Work out the remaining logic needed to implement the design

**Note:** All functionality must be placed within the App Component and no additional Components should be created for this solution to work.

**Hint:** Try setting up state first and rendering the big image based on the value in state.

**Hint:** Since you will be looping over an array of data, creating an image for each element and passing it the properties it needs, consider assigning the handleClick within the loop.

**Hint:** Since you already have the value of the image src inside the loop perhaps you could pass the handleClick function the image url.

### Bonus - Green Border

- Place a green border around the image to indicate that it is the current image being displayed.
- Any other previously active image will have it's border color removed.

**Hint:** Since you already know how to assign a className AND know about ternary operators, try combining the two together and assign a class based on the result of a ternary operator.

OR

**Hint:** Since you already know how to use the style prop AND know about ternary operators, try combining the two together and assign a border based on the result of a ternary operator.

## Bonus 2 - Lifting State

This is an advanced bonus and requires that you do additional research on lifting react state.

Try creating additional components for the images. You will most certainly run into issues with breaking the **onClick** functionaltiy.

Here are some resources on lifting react state:

- Easy Read: [change-parent-component-state-from-child-using-hooks-in-react](https://webomnizz.com/change-parent-component-state-from-child-using-hooks-in-react/)
- Difficult Read: [react-lift-state](https://www.robinwieruch.de/react-lift-state)

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## License

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
