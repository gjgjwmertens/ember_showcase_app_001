// import JSONAPIAdapter from 'ember-data/adapters/json-api';
//
// export default JSONAPIAdapter.extend({
// });
import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
   host: 'https://api.github.com',
   pathForType: function (type) {
      if(type === 'gituser') {
         return 'users';
      }
      return type;
   }
});
