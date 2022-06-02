

export class MovieList extends Array {
    constructor() {
        super();
    }
    sortByRating() {
        var movies = this;
        movies = movies.sort((a, b) => {
            return b.rating - a.rating;
        });
        return movies;
    }
    filterByRating(rating:number = 1) {
        var movies = this.map(item => item);
        movies = movies.filter(movie => {
            return movie.rating >= rating;
        });
        return movies;
    }
}