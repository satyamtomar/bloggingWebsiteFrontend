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

  function searchPosts(payload ,cb) {
    Agent
      .fire('get', `http://localhost:3000/search-posts`)
      .query(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }


  function topPosts(payload ,cb) {
    Agent
      .fire('get', `http://localhost:3000/get-top-posts`)
      .query(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
  function getRecommendations(payload ,cb) {
    Agent
      .fire('get', `http://localhost:3000/get-recommendations`)
      .query(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
  function editPost(payload ,cb) {
    Agent
      .fire('put', `http://localhost:3000/update-post`)
      .send(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }

  function getAPost(payload ,cb) {
    Agent
      .fire('get', `http://localhost:3000/get-post`)
      .query(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }

  function deletePost(payload ,cb) {
    Agent
      .fire('delete', `http://localhost:3000/get-post`)
      .send(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
export default {
    createBlog,
    myBlogs,
    viewBlogs,
    filterBlogByTopic,
    searchPosts,
    topPosts,
    getRecommendations
    ,editPost,
    getAPost,
    deletePost
//   editUserDetails
  }