import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
   location: config.locationType
});

Router.map(function () {
   this.route('bugs', function () {
      this.route('new');
      this.route('edit', {path: 'edit/:id'});
      this.route('details', {
            path: ':id'
         },
         function () {
            this.route('comments',
            function () {
               this.route('new');
               this.route('edit', {
                  path: ':comment_id/edit'
               });
            });
         }
      );
   });
   this.route('gituser');
   this.route('repo');
});

export default Router;
