import Agent from "./superAgent";
// import config from '../config/configg';
import { ServerError } from '../utils/helpers';
const BACKEND_URL = '';

  
  
// function getBorhanUserDetails( cb) {
//     Agent
//       .fire('get', `${BACKEND_URL}/website/getBorhanUserDetails`)
//       .end((err, res) => {
//         var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
//         if (typeof cb === 'function') return cb(error, res && res.body);
//       });
//   }
function userSignUp(payload ,cb) {
  Agent
    .fire('post', `http://localhost:3000/sign-up`)
    .send(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}
//   const editBorhanUserDetails=(payload,cb)=>{
//     Agent
//     .fire('put', `${BACKEND_URL}/website/editBorhanUserDetails`)
//     .send(payload)
//     .end((err, res) => {
//       var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
//       if (typeof cb === 'function') return cb(error, res && res.body);
//     });
//   }
  
export default {
    userSignUp
  }