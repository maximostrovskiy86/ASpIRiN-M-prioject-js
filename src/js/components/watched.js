import { watchedContainer } from '../const/refs';
import newApiService from "../services/apiSevise";
import watchedMediaItem from '../../templates/watched.hbs';
import newDataModification from "./dataModification";

const watchedBtn = document.querySelector('.modal__watched-btn');

const onWatchedBtnClick = async (e) => {
    const data = await newApiService.fetchGetMediaTrending(1);
    const genres = await newApiService.fetchGetGenres();
    const genresArr = [...genres.genres];
    const watchedName = document.querySelector('.modal__content-discription-title');
    console.log('name');
    console.log(watchedName);
    console.log(watchedName.textContent);
    console.log(data);

    const findedMovie = data.results.filter(item => {
        return item.title == watchedName.textContent;
    });

    console.log(...findedMovie);
    let newDate = newDataModification.getDate(...findedMovie);
    //let newGenres = newDataModification.getGenres([...findedMovie.genre_ids], genresArr);

    console.log(newDate);
     console.log(...findedMovie.genre_ids);

    //appendWatchedMediaMarkup(...findedMovie);
};

watchedBtn.addEventListener('click', onWatchedBtnClick);

// function appendWatchedMediaMarkup(movie) {
//     return watchedContainer.insertAdjacentHTML('beforeend', watchedMediaItem(movie));
// }
