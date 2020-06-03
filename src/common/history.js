// import createHistory from 'history/createHashHistory';
// A singleton history object for easy API navigation
// const history = createHistory();
const createHashHistory = require("history").createHashHistory
const history = createHashHistory()
export default history;
