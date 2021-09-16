
import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';
import { outputRefs } from '../const/refs';;
import newApiService from "../services/apiSevise";
import newDataModification from "./dataModification";

import itemMediaTpl from '../../templates/item-media.hbs';

const onLoadPage = async () => {
  const genres = await newApiService.fetchGetGenres();

  const data = await newApiService.fetchGetMediaTrending(1);
  console.log('data', data);
  const paginationOptions = {
    itemsPerPage: 20,
    visiblePages: 5,
    // totalItems: Math.ceil(data.total_results / data.results),
    totalItems: data.total_results,
  };
  const container = document.getElementById('tui-pagination-container');

  const pagination = new Pagination(container, paginationOptions);
  pagination.on('afterMove', async ({ page }) => {
    console.log(page);
    await newApiService.fetchGetMediaTrending(page);
  });

  const genresArr = [...genres.genres];

  const result = data.results.map(item => ({
    ...item,

  release_date: newDataModification.getDate(item),
genre_ids: newDataModification.getGenres([...item.genre_ids], genresArr)
}));


  // function getDate(item) {
  //   const rDate = new Date(item.release_date);
  //   const year = rDate.getFullYear();
  //   return year;
  // }
  //
  // function getGenres(arr) {
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < genresArr.length; j++) {
  //       if (genresArr[j].id == arr[i]) {
  //         newArr.push(genresArr[j].name);
  //       }
  //     }
  //   }
  //   return newArr;
  // }

  const newData = { ...data, results: result };

  appendMediaMarkup(newData);
};
onLoadPage();

function appendMediaMarkup({ results }) {
  return outputRefs.insertAdjacentHTML('beforeend', itemMediaTpl(results));
}
