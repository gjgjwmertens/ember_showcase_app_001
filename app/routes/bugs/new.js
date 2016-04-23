import Ember from 'ember';

export default Ember.Route.extend({
   model() {
      return this.store.createRecord('bug');
   },
   actions: {
      saveBug: function (bug) {
         var router = this;
         bug.save().then(function () {
            // console.log(arguments);
            console.log('Bug saved: ' + bug.get('title'));
            router.transitionTo('bugs.details', bug);
         });
      }
   }
});
