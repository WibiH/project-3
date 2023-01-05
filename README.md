# Project-3 (Queer History Month)

## Server

### Models

User

- username: String, required
- profilePicture: String
- pronoun: [string], required
- password: String, required
- type: [normal, admin] (if we work on the Wishlist - only for qhm staff to login and create event)

Authentication

Event

- eventName: String, required
- location: String, required (Wishlist: make into actual label in Google map)
- Date: date, required
- Time: time, optional
- createdUser: ObjectId, ref: User, required

Comment (Wishlist)

- comment: String, required
- image: String (optional)

Attendance

- event: ObjectId, ref: Event, required

### Endpoints

- GET /home -> Fetch all events (display 3 random events)
- GET /events -> Fetch all events (Q)
- GET /events/:Id -> Fetch single event (Q)
- POST /events -> Create event (Q)
- PATCH /events/:Id - Update a single event (Q)
- DELETE /events/:Id - Deletes a single event (Q)
- POST /events/:Id -> Create the attendance (Q)
- DELETE /events/:Id -> Delete the attendance (Q)
- GET /tour -> Display info for the tour (Brandon)
- GET /profile -> Display user info and the events they are going to attend (Wibi)

## Client

### Pages

HomePage => Introduction & some of event
EventDisplayAllPage => Should display all events (Q)
EventDisplaySinglePage => 1/ Should display a specific event 2/ attendance 3/ “Edit or Delete” Button (3/ allow comment 4 / edit comment 5/ delete comment) (Q)
EventCreatePage => Display a form to create event
EventEditDeletePage => Display a form to edit or delete event
TourPage => 1/ Google API with pin to show the tour locations 2/ Click on the pin will show different related info on the side (Map Component => Boolean & Information Component) (Brandon)
Profile => 1/ User info 2/ Event that user attending (Wibi)

### Components

- Navbar
- RandomEventsContent => It’s going to be used to render 3 events (whether random or not)
- EventList => It’s going to be used to render multiple events (Q)
- EventForm => It’s going to be used to create or update a event
- EventButton => It’s going to be used to delete a event
- SingleEventContent => It’s going to be used to render single event (Q)
- AttendanceButton => It’s going to be used to delete a event
- AttendanceList => It’s going to be used to render user who attendance (pic + username)
- TourMap => It’s going to call for the API and with pin added on it (Brandon)
- MapInfo => It’s going to render corresponding information for each pin onClick (Brandon)
- Profile => It’s going to render user info (Wibi)
- UserAttendedEvents => It’s going to be used to render list of events that user going to attend (Wibi)

### Services (To be updated)

- eventLoadSingle -> GET /events/:id
- eventLoadAll -> GET /events
- eventLoadRandom -> GET /events/random (for /home)
- eventAdd -> POST /events
- eventEdit -> PATCH /events/:Id
- eventDelete -> DELETE /events/:Id
- attendenceAdd -> POST /events/:id/attend (?)
- attendenceDelete -> DELETE /events/:Id/attend (?)
- tourMap ->
- mapInfo ->
