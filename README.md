# Project Overview

## Project Name

NBA Player's team

## Project Description

Look  up NBA players and describe them and display an image.

Or look up the players and show some of their stats 

## API and Data Sample

https://www.balldontlie.io/api/v1/players?search=lebron

```{
  "data": [
    {
      "id": 237,
      "first_name": "LeBron",
      "height_feet": 6,
      "height_inches": 8,
      "last_name": "James",
      "position": "F",
      "team": {
        "id": 14,
        "abbreviation": "LAL",
        "city": "Los Angeles",
        "conference": "West",
        "division": "Pacific",
        "full_name": "Los Angeles Lakers",
        "name": "Lakers"
      },
      "weight_pounds": 250
    }
 ```
 https://api.giphy.com/v1/gifs/search?api_key=4hzP8g2GyqB2xxyhjSmDSvbDoOp4IbTe&q=lebron+james&limit=2&offset=0&rating=g&lang=en
```
{
data: [
{
type: "gif",
id: "3o7aTnQqygA3TcukFi",
url: "https://giphy.com/gifs/nba-basketball-3o7aTnQqygA3TcukFi",
slug: "nba-basketball-3o7aTnQqygA3TcukFi",
bitly_gif_url: "http://gph.is/2dFtY7Q",
bitly_url: "http://gph.is/2dFtY7Q",
embed_url: "https://giphy.com/embed/3o7aTnQqygA3TcukFi",
username: "nba",
source: "http://nba.com",
title: "Lebron James Basketball GIF by NBA",
rating: "g",
content_url: "",
source_tld: "nba.com",
source_post_url: "http://nba.com",
is_sticker: 0,
import_datetime: "2016-10-04 13:28:27",
trending_datetime: "2020-12-30 17:20:51",
images: {
original: {
height: "270",
width: "480",
size: "1057044",
url: "https://media3.giphy.com/media/3o7aTnQqygA3TcukFi/giphy.gif?cid=b7e1fa2335lkgjxtknl7y7qfc4m3y0g7pztgylo6m9nrntyk&rid=giphy.gif&ct=g",
mp4_size: "136202",
mp4: "https://media3.giphy.com/media/3o7aTnQqygA3TcukFi/giphy.mp4?cid=b7e1fa2335lkgjxtknl7y7qfc4m3y0g7pztgylo6m9nrntyk&rid=giphy.mp4&ct=g",
webp_size: "257946",
webp: "https://media3.giphy.com/media/3o7aTnQqygA3TcukFi/giphy.webp?cid=b7e1fa2335lkgjxtknl7y7qfc4m3y0g7pztgylo6m9nrntyk&rid=giphy.webp&ct=g",
frames: "16",
hash: "d8ac4361f9829ff8f6fa4741e0929afe"
},
},
]
```
## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api 
- add a form wih a submit button
- Render data on page 
- data show image of player
- a paragrpah of the play content

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- link everything and make sure it work
- add more CSS to make it look nicer



## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes


## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | 3H | 3hrs|  |  |
| Working with API | 3H | 3hrs|  |  |
| make sure button is connect| 1H | 1hrs|  |  |
| mobile and desktop view | 2H | 2hrs|  |  |
| displaying content and image | 3H | 3hrs|  |  |
| CSS | 4H | 4hrs|  |  |
| Extra JS | 3H | 3hrs|  |  |
| Post MVP | 3H | 3hrs|  |  |
| Total | 22H | 22hrs|  |  |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function searchPlayer(player) {
	// look up a player
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  