import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';
import {outputRefs} from '../const/refs';
import newApiService from "../services/apiSevise";
import newDataModification from "./dataModification";

import itemMediaTpl from '../../templates/item-media.hbs';

const onLoadPage = async () => {
  const genres = await newApiService.fetchGetGenres();

  const data = await newApiService.fetchGetMediaTrending(1);
  const paginationOptions = {
    itemsPerPage: 20,
    visiblePages: 5,
    totalItems: data.total_results,
  };

  const container = document.getElementById('tui-pagination-container');

  const pagination = new Pagination(container, paginationOptions);
  pagination.on('afterMove', async ({page}) => {
    console.log(page);
    await newApiService.fetchGetMediaTrending(page);
  });

  const genresArr = [...genres.genres];

  const result = data.results.map(item => ({
    ...item,
    release_date: newDataModification.getDate(item),
    genre_ids: newDataModification.getGenres([...item.genre_ids], genresArr)
  }));

  const newData = {...data, results: result};

  appendMediaMarkup(newData);
};
onLoadPage();

function appendMediaMarkup({results}) {
  return outputRefs.insertAdjacentHTML('beforeend', itemMediaTpl(results));
}
