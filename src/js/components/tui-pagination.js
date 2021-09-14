import 'tui-pagination/dist/tui-pagination.css';

import Pagination from 'tui-pagination';

const container = document.getElementById('tui-pagination-container');
const instance = new Pagination(container, { totalItems: 100, itemsPerPage: 10, visiblePages: 5 });

instance.getCurrentPage();
