import Agent from "./superAgent";
// import config from '../config/configg';
import { ServerError } from '../utils/helpers';
const BACKEND_URL = '';

function addToDraft(payload ,cb) {
  Agent
    .fire('post', `http://localhost:3000/add-to-drafts`)
    .send(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}

function deleteFromDraft(payload ,cb) {
    Agent
      .fire('delete', `http://localhost:3000/remove-from-drafts`)
      .send(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }

  function getDrafts(payload ,cb) {
    Agent
      .fire('get', `http://localhost:3000/get-drafts`)
      .query(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
export default {
    // userSignUp

    addToDraft,
getDrafts,
deleteFromDraft
  }