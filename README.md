The Twitter project A project for creating tweet cards with additional
interactivity when clicking the "Follow" button.

The layout is fixed in pixels, semantic and valid. There are no errors in the
browser console. The work is done on native JS using collections or on React.
Interactivity works according to the terms of reference. The code is formatted
and uncommented. There is a README.md file in the repository. Technical task
According to the layout, it is necessary to implement user cards. When clicking
on the "Follow" button, the text changes to "Following". The color of the button
also changes. The number of followers increases by 1.

When updating the page, the state of the button and the number of followers
remain unchanged.

When you click the button again, its text and color change to their original
state. Also, the number of followers decreases by 1.

The mockapi.io library was used for the user backend with fields: id, user,
tweets, followers, avatar. Avatar images must be specified with separate urls in
the “avatar” property.

There should be from 12 users with different values (at your discretion) in the
database. Implemented pagination. One pagination page should display at least 3
tweets, the rest should be loaded when you click Load More.

Routes are prescribed in the application. If the user entered by a non-existent
route, he must be redirected to the home page. '/' – Home component, home page.
'/tweets' - the tweets component, a page displaying tweets with a back button
that leads to the main page.
