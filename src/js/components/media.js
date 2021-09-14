import {outputRefs} from "../const/refs";
import newApiService from "../services/apiSevise";
import itemMediaTpl from '../../templates/item-media.hbs';

const onLoadPage = async () => {
  const genres = await newApiService.fetchGetGenres();

  const data = await newApiService.fetchGetMediaTrending();

  const genresArr = [...genres.genres];

  const result = data.results.map(item => ({
    ...item,
    release_date: getDate(item),
    genre_ids: getGenres([...item.genre_ids])
  }));

  function getDate(item) {
    const rDate = new Date(item.release_date);
    const year = rDate.getFullYear();
    return year;
  }

  function getGenres(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < genresArr.length; j++) {
        if (genresArr[j].id == arr[i]) {
          newArr.push(genresArr[j].name);
        }
      }
    }
    return newArr;
  }

  const newData = {...data, results: result};
  console.log(newData);

  appendMediaMarkup(newData);
}

onLoadPage();

function appendMediaMarkup({results}) {
  return outputRefs.insertAdjacentHTML('beforeend', itemMediaTpl(results));
}