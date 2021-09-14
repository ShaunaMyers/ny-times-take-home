### At a minimum, you must show:

- A list of articles
  - Do they have a pic and description included? (research API- check in the browser and PostMan to see what you're getting in the response)
  
- A “detailed” view for each article (as opposed to summary/list view)
  - Will need a specific component and Router view for each article so that a user can click on the article and see it in more detail
  - If there isn't a title/summary then I can description then I can shorten the description and use the shortened description to entice a user to click on the article to see more
  
- Articles in the list must link to the detailed article view you create
  - When user clicks on article it takes them to a detailed view using React Router
  
- Some sort of search, filter, OR sort
  - Allow user to search for articles:
    - By keyword in article description/title (* priority * because as a user I would want to find news relating to something I heard about...generally we hear from some other platform or from a person about a story and then we go look it up)
    - Sort and/or search By date (as a user I would want to know what has happened today or recently...or maybe I want to see what happened on a particular day

### Application Design Inspirations:
  - All color schemes seem to be mostly white with a small accent color here and there. This makes sense for a news site. You would want to keep it crisp, fairly formal, and easy to navigate and read. I think I will stick to this theme (at least initially and then think about adding a different color scheme if time permits).
  - [Reuters](https://www.reuters.com/?edition-redirect=uk) 
    - Like how there's a larger, main article to the left (feature article) and others that are smaller and in column view on the right hand side
  - [NY Times](https://www.nytimes.com/international/) 
    - Like how lower on the page (scroll down) their articles are in column view but each description is to the left of the picture (display row) and each article has a dividing line above it
  - [Press Gazette](https://pressgazette.co.uk/category/news/) 
    - This had a similar format as the Ny Times, with the dividing line about the articles that are displayed in column view, but each article is displayed in row view, with the pic next to the short description about the article and the date above the description
