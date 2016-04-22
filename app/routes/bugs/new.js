import Ember from 'ember';

export default Ember.Route.extend({
   model() {
      return this.store.createRecord('bug');
   },
   actions: {
      saveBug: function (bug) {
         bug.save().then(function () {
            console.log('Bug saved: ' + bug.get('title'));
         });
      }
   }
});
