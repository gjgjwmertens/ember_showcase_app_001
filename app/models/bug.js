import DS from 'ember-data';

export default DS.Model.extend({
   title: DS.attr('string'),
   description: DS.attr('string'),
   createdDate: DS.attr('date', {
      defaultValue() { return new Date(); }
   }),
   isActive: DS.attr('boolean', {defaultValue: true}),
   comments: DS.hasMany('comment')
});
