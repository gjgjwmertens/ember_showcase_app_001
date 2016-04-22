import JSONAPISerializer from 'ember-data/serializers/json-api';
import Ember from 'ember';

export default JSONAPISerializer.extend(
   {
      keyForAttribute: function (key) {
         return Ember.String.decamelize(key);
      }
   });
