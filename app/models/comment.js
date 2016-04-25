import DS from 'ember-data';

export default DS.Model.extend({
   text: DS.attr('string'),
   createdBy: DS.attr('string'),
   createdDate: DS.attr('date', {
      defaultValue() { return new Date(); }
   }),
   bug: DS.belongsTo('bug')
});
