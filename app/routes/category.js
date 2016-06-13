import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    save(params){
      var newListing = this.store.createRecord('listing', params);
      var thisCategory = params.category;
      thisCategory.get('listings').addObject(newListing);
      newListing.save().then(function(){
        return thisCategory.save();
      });
    }
  }
});
