# Project-3 (Queer History Month)

## Server

### Models

User
username: String, required
profilePicture: String
pronoun: [string], required
password: String, required
type: [normal, admin] (if we work on the Wishlist - only for qhm staff to login and create event)
Authentication

Event
eventName: String, required
location: String, required (Wishlist: make into actual label in Google map)
Date: date, required
Time: time, optional
createdUser: ObjectId, ref: User, required
Comment (Wishlist)
comment: String, required
image: String (optional)
Attendance
event: ObjectId, ref: Event, required

### Endpoints

GET /home -> Fetch all events (display 3 random events)
GET /events -> Fetch all events
GET /events/:Id -> Fetch single event
POST /events -> Create event
PATCH /events/:Id - Update a single event
DELETE /events/:Id - Deletes a single event
POST /events/:Id -> Create the attendance
DELETE /events/:Id -> Delete the attendance
GET /tour -> Display info for the tour

## Client

### Pages

HomePage => Introduction & some of event
EventDisplayAllPage => Should display all events
EventDisplaySinglePage => 1/ Should display a specific event 2/ attendance 3/ “Edit or Delete” Button (3/ allow comment 4 / edit comment 5/ delete comment)
EventCreatePage => Display a form to create event
EventEditDeletePage => Display a form to edit or delete event
TourPage => 1/ Google API with pin to show the tour locations 2/ Click on the pin will show different related info on the side (Map Component => Boolean & Information Component)

### Components

Navbar
RandomEventsContent => It’s going to be used to render 3 events (whether random or not)
EventList => It’s going to be used to render multiple events
EventForm => It’s going to be used to create or update a event
EventButton => It’s going to be used to delete a event
SingleEventContent => It’s going to be used to render single event
AttendanceButton => It’s going to be used to delete a event
AttendanceList => It’s going to be used to render user who attendance (pic + username)
TourMap => It’s going to call for the API and with pin added on it
MapInfo => It’s going to render corresponding information for each pin onClick

### Services (To be updated)

eventLoadSingle -> GET /events/:id
eventLoadAll -> GET /events
eventLoadRandom -> GET /events/random (for /home)
eventAdd -> POST /events
eventEdit -> PATCH /events/:Id
eventDelete -> DELETE /events/:Id
attendenceAdd -> POST /events/:id/attend (?)
attendenceDelete -> DELETE /events/:Id/attend (?)
tourMap ->
mapInfo ->

Hello this is a Test from Wibi: " Hey Queenie!"
