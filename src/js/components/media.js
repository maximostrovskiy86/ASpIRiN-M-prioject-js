import { outputRefs } from "../const/refs";
import newApiService from "../services/apiSevise";
import newDataModification from "./dataModification";
import itemMediaTpl from '../../templates/item-media.hbs';

const onLoadPage = async () => {
  const genres = await newApiService.fetchGetGenres();

  const data = await newApiService.fetchGetMediaTrending();

  const genresArr = [...genres.genres];

  const result = data.results.map(item => ({
    ...item,
    release_date: newDataModification.getDate(item),
    genre_ids: newDataModification.getGenres([...item.genre_ids], genresArr)
  }));

  // newDataModification.getDate();
  // newDataModification.getDate();
  // function getDate(item) {
  //   const rDate = new Date(item.release_date);
  //   return rDate.getFullYear();
  // }

  // function getGenres(arr) {
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < genresArr.length; j++) {
  //       if (genresArr[j].id == arr[i]) {
  //         newArr.push(genresArr[j].name);
  //       }
  //     }
  //   }
  //   newArr.splice(3);
  //   return newArr.join(',');
  // }

  const newData = { ...data, results: result };

  appendMediaMarkup(newData);
}
onLoadPage();

function appendMediaMarkup({ results }) {
  return outputRefs.insertAdjacentHTML('beforeend', itemMediaTpl(results));
}