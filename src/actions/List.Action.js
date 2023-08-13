import Agent from "./superAgent";
// import config from '../config/configg';
import { ServerError } from '../utils/helpers';
const BACKEND_URL = '';

function createList(payload ,cb) {
  Agent
    .fire('post', `http://localhost:3000/create-list`)
    .send(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}
function addToList(payload ,cb) {
    Agent
      .fire('post', `http://localhost:3000/add-to-list`)
      .send(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }

  function viewLists(payload ,cb) {
    Agent
      .fire('get', `http://localhost:3000/view-all-lists`)
      .query(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
  function deleteFromList(payload ,cb) {
    Agent
      .fire('delete', `http://localhost:3000/remove-from-list`)
      .send(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }

  function getAList(payload ,cb) {
    Agent
      .fire('get', `http://localhost:3000/get-list`)
      .query(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
export default {
    // userSignUp

    getAList,
    deleteFromList,
    createList,
    viewLists,
    addToList
  }