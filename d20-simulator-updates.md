# Updates and improvements

1. I have added the file "dice-roll-sound.mp3" to the root of this repo. Feel free to move it to anywhere that makes sense in the repo, but that is the file we want to play (once, non-looping) when the Roll button is clicked.

2. I would like the colour buttons to be hexagons, with the main point-to-point axis down the vertical middle of the button.

3. When a new colour is selected, there is some UI jitter that happens because of the animation of selecting a new colour. Let's remove that jitter by making the dice colour selector a fixed size container.

4. Let's add slightly more padding between the configuration headings and their options. Maybe half a line space or something aesthetic like that.

5. The Sounds check box should be the other way around: the word "Sounds" should appear first, and the check box should be on the right of that.

6. Let's reduce the roll time of the dice to 2 seconds.

7. Let's increase the speed at which the number on the dice changes to be 20 per second.

8. The roll button doesn't need to snap to the bottom of the available space (though this was a good idea), it can just come after the last configuration option.

9. You should not be able to change the Sound or Roll Mode options while the dice are rolling.

10. When there are two dice, there should be two different colour pickers: one for each dice.
