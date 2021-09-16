export const getArticles = () => {
    return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=aPsXlSYQF9REVR06EoCcd72NZ1H09U25')
    .then(response => {
        if (!response.ok) {
        throw Error('Problem loading articles')
        }
        return response.json()
    })
};