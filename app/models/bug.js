import DS from 'ember-data';

export default DS.Model.extend({
   title: DS.attr('string'),
   description: DS.attr('string'),
   createdDate: DS.attr('date'),
   isActive: DS.attr('boolean', {default: true}),
   comments: DS.hasMany('comment')
});
