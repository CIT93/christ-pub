# The SLEEPOTRON 5000

This will be a sleep tracking app to determine how much sleep you are getting, the quality of your sleep, and how rested you are when you awake

This app will aid me in getting a better quality of sleep, for I do not sleep very well. 

## Global Variables

* sleepScore (Number): Represents your quality of Sleep and amount of it. Will be from 0 to 100 and can also be affected from how you felt when you woke up.
* currentDay (String): States the current day of the week
* targetHit (Boolean): Will state if you have slept the reccomended amount of time for your current schedule.
* sleepInDay (Boolean): Returns if it a usual weekend day, Saturday or Sunday as you should sleep in to relax more, same goes for a set 2 days off that would be an equivellent.
* baseSleepTime (Number): The default amount of time you should be sleeping a night

## Logic

This app will use inputed data that will be calculated to the users needs for sleep. Depending on when they went to sleep, how their sleep was, how many hours they slept, and the day, it will be able to calculate the best amount of sleep per the user input.

It will use both && and || to make these calculations possible
The sleep score also has another variable which is quality. If a user is required to sleep 8 hours, and they do so, that would be 100 points, however, when asked abou the quality of their sleep, this answer affects this number. The choices are Horrible, Bad, Meh, Okay, Alright, Good, Great, and Excellent. They have associated values that will then be multiplied to the sleep score. Say someone slept for 8 hours but their sleep was just okay. maybe a wake up or just could not get comfy, that 100 would be multiplyed by .65 for a sleep score total of 65 points. These can be changed aroud but that is the basic idea. 