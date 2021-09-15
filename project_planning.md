- [x] Research API- check in the browser and postman to see what you're getting in the response
- [x] Create MVP for phase 1
- [x] Create phase 2 with some "nice to have" features
- [x] Add links to design inspirations and describe what you like about each one
- [x] [Wireframing](https://miro.com/welcomeonboard/eWdlTW1KTHpHeDlXem9oUVFUNGM0TDJPbm5ISURFbU1rWUVkalVqVnQ2SjNVSUxaQUs0RUFKZG1qZGVJc0R6RXwzMDc0NDU3MzU3NzAyMTI5NTQw?invite_link_id=622521353271)


### At a minimum, you must show:

#### Phase 1

- A list of articles
  - User should see articles displayed on the home page
  
- A “detailed” view for each article (as opposed to summary/list view)
  - Will need a specific component and Router view for each article so that a user can click on the article and see it in more detail
  - Show title with photo
  
- Articles in the list must link to the detailed article view you create
  - When user clicks on article it takes them to a detailed view- using React Router
  
- Search articles for specific article(s)
  - Allow user to search for articles:
    - By keyword in article description/title (* priority * because as a user I would want to find news relating to something I heard about...generally we hear from some other platform or from a person about a story and then we go look it up)

- Mobile Responsiveness
  - Application layout should adjust to the user's device

- Basic accessibility
  - Hover styling on all clickable elements

#### Phase 2 

- User should be able to click header and return home

- User should see a return home button on an Article's detailed view that will take them back to the home page

- User should see a link to show them all articles after they have clicked search (if the search is successful and returns results)

- User should see messages
  - When no search results exist after trying to search
  - Where there are errors loading articles or a single article

- Allow user to filter articles by date
  - Sort and/or search By date (as a user I would want to know what has happened today or recently...or maybe I want to see what happened on a particular day

- Accessibility
  - Focusable elements/tab through the page
  - Color 
  - Font 

### Phase 3

- Add tabs or a drop down menu at top of nav bar, that when clicked would show articles from particular sections: arts, sports, business, food, health, movies, world


### Application Design Inspirations:
  - All color schemes seem to be mostly white with a small accent color here and there. This makes sense for a news site. You would want to keep it crisp, fairly formal, and easy to navigate and read. I think I will stick to this theme (at least initially and then think about adding a different color scheme if time permits).
  - [Reuters](https://www.reuters.com/?edition-redirect=uk) 
    - Like how there's a larger, main article to the left (feature article) and others that are smaller and in column view on the right hand side
  - [NY Times](https://www.nytimes.com/international/) 
    - Like how lower on the page (scroll down) their articles are in column view but each description is to the left of the picture (display row) and each article has a dividing line above it
  - [Press Gazette](https://pressgazette.co.uk/category/news/) 
    - This had a similar format as the Ny Times, with the dividing line about the articles that are displayed in column view, but each article is displayed in row view, with the pic next to the short description about the article and the date above the description
