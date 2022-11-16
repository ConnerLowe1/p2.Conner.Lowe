# Project 2 - Conner Lowe

Relevant Links:

Repo: https://github.com/ConnerLowe1/p2.Conner.Lowe/

Report: https://connerlowe1.github.io/p2.Conner.Lowe/

## C

Here is my sketch for my ideal mirror functionality:

<img src="https://user-images.githubusercontent.com/114852176/202053274-abdb4346-4fe2-45d9-90e3-e53b3fd1a662.jpg" width="700" height = "500">

To start, I chose to place the clock near the top of the screen in the center, with the date right below it in a slightly smaller font. Both of these elements should be drawn in a high-contrast color so that it can be distinguished from objects in the background.

The widgets for weather, calendar, health, and news information are set up in the following manner:
- Health and news widgets are longer than weather and events widgets, due to their information being presentable in a more compact way.
- Backgrounds of widgets should be slightly darker than reflection and transparent so that the user may distinguish the widget area while still being able to see items in the reflection.
- Widget borders and information should be drawn in a high contrast color so that it may be told apart from the reflection.
- The shorter widgets, weather and calendar, should be placed in the top left and right, with the longer widgets in the bottom left and right. This will give a symmetrical, clean layout while maintaining viability as a mirror, as the center is left open.
- Weather widget displays, most prominently, a large icon to represent the forecast, a large reading of the temperature, a verbal description of the forecast (i.e "Cloudy"), and a brief description of the high and low temperatures for the day. Below this information, separated with a horizontal line, should be a brief description of high and low temperatures for future days.
- The calendar widget displays a vertically-aligned list of tasks for the day, ordered with the time the task occurs. "Time" and "activity" columns are labelled respectively.
- The news widget features multiple headlines along with their respective authors, publishers, dates of publication, and general topic. Each article follows the same format, with articles being separated via horizontal lines. This information should be presented with a highly contrastive color such as a shade of yellow as there is a lot of information for the user to have to focus on and read at one time.
- The health widget is the most advanced as it is user-customisable. By clicking any of the four buttons along the bottom of the widget, the user can choose to display current and past health information regarding sleep, weight, exercise, and time spent in front of mirror. For example, if the user were to click the button with the hourglass symbol on it, the word "Sleep:" would be replaced by "Mirror Time:" and the user would instead be shown data on their current and former use of the mirror.

---

## B 

I have implemented my sketch in p5.js and all related code and assets are in this repository.

User information on weather, calendar events, news, and health is obtained by the program from the json files included in the "assets" folder.

---

## A

Presentation: 

<p align="center">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/uJG_VkMvCQI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>
