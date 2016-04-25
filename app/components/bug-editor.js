import Ember from 'ember';

const BugEditorComponent = Ember.Component.extend({
   actions: {
      saveBug(bug) {
         var component = this;
         console.log('saving bug');
         this.get('bug')
             .save()
             .then(function () {
                console.log('bug saved');
                component.sendAction('saveRedirect', bug);
             }, function (err) {
                console.log('error saving bug: ' + err);
             });
      }
   }
});

BugEditorComponent.reopenClass({
   positionalParams: ['bug']
});

export default BugEditorComponent;