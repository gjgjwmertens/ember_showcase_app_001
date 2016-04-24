import Ember from 'ember';

export default Ember.Route.extend({
   model: function (params) {
      return this.store.findRecord('bug', params.id);
   },
   actions: {
      activeStateChanged(new_value, em) {
         var bug = em.get('bug');
         console.log('Active state changed to: ' + new_value);
         bug.save().then(function () {
            console.log('Status saved');
         });
      }
   }
});
