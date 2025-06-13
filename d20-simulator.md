# D20 Simulator

I would like to build a d20 (20-sided dice) simulator. It is a small web app that whose UI is split into two vertical halves.

The left half is the UI for options and configuration. The right half is the simiulation of the dice.

## Left hand Side

At the top of the left side is the title: "D20 Simulator!"

Configuration options on the left side:

1. Colour picker for the color of the dice. The default colour is white, but the user should also be able to select red, orange, yellow, blue, green and purple.
2. Radio buttons for "Straight", "Advantage", and "Disadvantage"
3. A check box for "Sounds" to enabe and disable sounds.

At the bottom of the left hand side is a button with the label "Roll!". Clicking this button will roll the die (or dice) on the right hand side.

## Right hand side

On the right hand side is the simulation of the dice. To keep things simple, we don't want to use any 2D or 3D libraries, we just want to use basic React components with CSS to achieve the desired shapes.

If the radio button "Straight" is selected, there is only one die on the right hand side, that is both horizontally and vertically centered.

If the radio buttons "Advantage" or "Disadvantage" are selected, there are two dice on the right hand side that are also centered horizontally and vertically.

For this simple app, dice are represented by the black outline of an equilateral triangle. Inside that equilateral triangle is a number.

The default state of the single die is "20"

The default state of double dice (Advantage or Disadvantage) is both dice having the number "10".

When there is more than one die, their randomisation and animation should be independent of each other.

## When the Roll button is clicked

When the roll button is clicked, a random number between 1 and 20 (inclusive) is chosen for the die (or each of the dice) on the right hand side.

But instead of just replacing the number on the dice immediately, we want to "animate" the rolling of the dice by visibly shuffling the number on the die (or dice).

Over 5 seconds, the number on the dice repeatedly changes quickly: 10 times per second. And then the final change is the randomised number that was chosen for this roll.

