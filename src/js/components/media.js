import {outputRefs} from "../const/refs";
import newApiService from "../services/apiSevise";
import itemMediaTpl from '../../templates/item-media.hbs';




const onLoadPage = async () => {
  const genres = await newApiService.fetchGetGenres();
  console.log(genres)

  const data = await newApiService.fetchGetMediaTrending();
  const result = data.results.map(item => ({
    ...item,
    genres: genres
  }))

  appendMediaMarkup(data);
}

onLoadPage();

function appendMediaMarkup({results}) {
  return outputRefs.insertAdjacentHTML('beforeend', itemMediaTpl(results));
}



// document.addEventListener('DOMContentLoaded', onLoadPage)