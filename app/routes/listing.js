import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  },
  actions: {
    delete(listing) {
      listing.destroyRecord();
      this.transitionTo('index');
    },
    update(params, listing) {
      Object.keys(params).forEach(function(key) {
        if(params[key] != null) {
          listing.set(key, params[key]);
        }
      });
      listing.save();
    }
  }
});
