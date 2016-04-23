import Ember from 'ember';

export default Ember.Controller.extend({
   sortProperties: ['title'],
   sortedModel: Ember.computed.sort('model', 'sortProperties'),
   testVar: 'test',
   showList: false,
   showSortedList: false,
   actions: {
      showBugList() {
         console.log('show list');
         this.set('showList', !this.get('showList'));
      },
      showSortedList() {
         console.log('show sorted list');
         this.set('showSortedList', !this.get('showSortedList'));
      }
   }
});
