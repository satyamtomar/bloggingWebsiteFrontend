import Agent from "./superAgent";
// import config from '../config/configg';
import { ServerError } from '../utils/helpers';
const BACKEND_URL = '';

function getRevisionHistory(payload ,cb) {
  Agent
    .fire('get', `http://localhost:3000/get-all-versions-of-post`)
    .query(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}


function getAVersionOfHistory(payload ,cb) {
    Agent
      .fire('get', `http://localhost:3000/view-a-version-of-post`)
      .query(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
export default {
    // userSignUp
    getRevisionHistory,
    getAVersionOfHistory
  }