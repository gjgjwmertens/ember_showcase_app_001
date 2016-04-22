import Ember from 'ember';

export default Ember.Route.extend({
   actions: {
      createBug: function () {
         var store = this.store;

         var newBug = store.createRecord('bug', {
            title: 'Demo bug',
            description: 'Demo description'
         });

         newBug.save().then(function () {
            console.log('Bug record saved');
         });
      },
      findBug: function () {
         var store = this.store;

         store.findRecord('bug', 'go477').then(function (loadedBug) {
            console.log('found bug: ' + loadedBug.get('title'));
            console.log('created: ' + loadedBug.get('createdDate'));

            var peekBug = store.peekRecord('bug', 'go477');

            if(peekBug) {
               console.log('peek bug: ' + peekBug.get('title'));
               console.log('created: ' + peekBug.get('createdDate'));
            }
         });

         // not implemented in localstore adapter
         // store.queryRecord('bug', {filter: {id: 'dc2bf'}}).then(function (loadedBug) {
         //    console.log('found bug: ' + loadedBug.get('title'));
         //    console.log('created: ' + loadedBug.get('createdDate'));
         // });
      },
      editBug: function () {
         var store = this.store;

         store.findRecord('bug', 'go477').then(function (loadedBug) {
            console.log('found bug: ' + loadedBug.get('title'));
            console.log('created: ' + loadedBug.get('createdDate'));

            loadedBug.set('title', 'Updated title');
            loadedBug.save().then(function () {
               console.log('Bug saved');
            });

         });
      }
   }
});
