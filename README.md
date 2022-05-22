# Social network : Front-end

## Pages

- Register [V0]
- Login [V0.1]
- Home [V1]
- Profile detail [V2]
  - Modify information [v4]
  - Contacts [V5]
  - Filter for type of contact [V6]
- Contact detail [V3]
  - Displays if friend, enemy or unconnected [V5]

## Data layer

### Users

- Current user
  - Logout: Reset
  - Login
  - Modify information
- Contacts
  - Add/delete user to contacts
  - Modify status (friend, enemy or unconnected)

### UI

- Loading
- Error

## Components

- Header
  - Render basic information
  - Render links to pages
- Footer
  - Render basic information
- Login form
  - Render input forms and button
  - Receive information to change state
  - Submit user form
- Register form
  - Render input forms and button
  - Submit register form
- Profile sneek peak
  - Render user card
  - Show whether user is a contact, and whether that contact is friend or enemy
  - Redirect to profile detail when clicked
- Profile detail
  - Render detailed information
  - Show whether user is a contact, and whether that contact is friend or enemy

## Versions

- V0: Register user
  - **V0.1: Login existing user**
- V1: Home page, showing all existing users
- V2: Logged-in user detailed profile
- V3: Other users detailed profile
- V4: Modify logged-in user profile
- V5: Users display whether it's friend, enemy or unconnected
- V6: Filter logged-in user's friends or enemies
