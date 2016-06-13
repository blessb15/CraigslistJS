import Ember from 'ember';

export default Ember.Component.extend({
  sorted: ['date:dsc'],
  sortedListings: Ember.computed.sort("category.listings", "sorted"),
});
