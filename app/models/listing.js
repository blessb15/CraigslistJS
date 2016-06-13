import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  info: DS.attr(),
  date: DS.attr(),
  img: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
