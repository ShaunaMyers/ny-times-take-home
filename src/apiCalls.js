export const getArticles = () => {
    return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=aPsXlSYQF9REVR06EoCcd72NZ1H09U25')
    .then(response => {
        if (!response.ok) {
        throw Error('Oops, problem loading articles. Please refresh the page.')
        }
        return response.json()
    })
};