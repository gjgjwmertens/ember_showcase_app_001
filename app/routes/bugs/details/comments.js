import Ember from 'ember';

export default Ember.Route.extend({
   model() {
      return this.modelFor('bugs/details').get('comments');
   },
   actions: {
      delete(comment) {
         console.log('Delete commnet');
         console.log(comment);
         comment.destroyRecord();
      }
   }
});
