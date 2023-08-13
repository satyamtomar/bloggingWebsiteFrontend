import Agent from "./superAgent";
// import config from '../config/configg';
import { ServerError } from '../utils/helpers';
const BACKEND_URL = '';

function addSaveLater(payload ,cb) {
  Agent
    .fire('post', `http://localhost:3000/add-to-save-laters`)
    .send(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}

function getSaveLaters(payload ,cb) {
    Agent
      .fire('get', `http://localhost:3000/get-save-laters`)
      .query(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }

  
function removeFromSaveLaters(payload ,cb) {
    Agent
      .fire('delete', `http://localhost:3000/remove-from-save-laters`)
      .send(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
export default {
    // userSignUp
    addSaveLater,
    getSaveLaters,
    removeFromSaveLaters
  }