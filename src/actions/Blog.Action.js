import Agent from "./superAgent";
// import config from '../config/configg';
import { ServerError } from '../utils/helpers';
const BACKEND_URL = '';

  function createBlog(payload ,cb) {
    Agent
      .fire('post', `http://localhost:3000/create-post`)
      .send(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
  
  function myBlogs(payload ,cb) {
    Agent
      .fire('get', `http://localhost:3000/view-my-posts`)
      .query(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
 
  function viewBlogs(payload ,cb) {
    Agent
      .fire('get', `http://localhost:3000/view-posts`)
      .query(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
  function filterBlogByTopic(payload ,cb) {
    Agent
      .fire('get', `http://localhost:3000/search-topics`)
      .query(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
export default {
    createBlog,
    myBlogs,
    viewBlogs,
    filterBlogByTopic
//   editUserDetails
  }