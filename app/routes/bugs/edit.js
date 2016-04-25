import Ember from 'ember';

export default Ember.Route.extend({
   model: function (params) {
      return this.store.findRecord('bug', params.id);
   },
   actions: {
      afterEdit: function (bug) {
         this.transitionTo('bugs.details.comments', bug);
      }
   }
});
