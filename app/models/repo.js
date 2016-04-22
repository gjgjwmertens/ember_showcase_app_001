import DS from 'ember-data';

export default DS.Model.extend({
   fullName: DS.attr('string'),
   stargazersCount: DS.attr('number'),
   language: DS.attr('string'),
   gituser: DS.belongsTo('gituser')
});
