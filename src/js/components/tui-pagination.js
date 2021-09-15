import 'tui-pagination/dist/tui-pagination.css';

import Pagination from 'tui-pagination';

const container = document.getElementById('tui-pagination-container');
// const instance = new Pagination(container, { totalItems: 100, itemsPerPage: 10, visiblePages: 5 });
// instance.getCurrentPage();

// import Pagination from 'tui-pagination';
import { newApiService } from '../services/apiSevise';

const paginationContainer = document.getElementById('pagination');

const paginationOptions = {
  itemsPerPage: 20,
  visiblePages: 5,
};

function pagination(totalResults, currentPage) {
  if (!totalResults || totalResults < 20) {
    paginationContainer.innerHTML = '';
    return;
  }

  const pagination = new Pagination(paginationContainer, paginationOptions);

  pagination.setTotalItems(totalResults);
  pagination.movePageTo(currentPage);

  pagination.on('afterMove', newApiService);
}

export default pagination;
