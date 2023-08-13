import Agent from "./superAgent";
// import config from '../config/configg';
import { ServerError } from '../utils/helpers';
const BACKEND_URL = '';

  function getUserDetails(payload ,cb) {
    Agent
      .fire('get', `http://localhost:3000/get-profile`)
      .query(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
  

  function editUserDetails(payload ,cb) {
    Agent
      .fire('post', `http://localhost:3000/edit-user-details`)
      .send(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }

  function viewOnePost(payload ,cb) {
    Agent
      .fire('get', `http://localhost:3000/get-post`)
      .query(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }

  

  
export default {
  getUserDetails,
  viewOnePost,
  editUserDetails
  }