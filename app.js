// app.js


const booksPerPage = 10;
let currentPage = 1;

const titleFilter = document.getElementById('titleFilter');
const authorFilter = document.getElementById('authorFilter');
const subjectFilter = document.getElementById('subjectFilter');
const publishDateFilter = document.getElementById('publishDateFilter');

const bookTable = document.getElementById('bookTable').getElementsByTagName('tbody')[0];
const pagination = document.getElementById('pagination');
const filterCounters = document.getElementById('filterCounters');

let bookList = [];

function fetchData()
