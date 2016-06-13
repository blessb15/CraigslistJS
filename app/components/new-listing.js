import Ember from 'ember';

export default Ember.Component.extend({
  newListing: false,
  actions: {
    save(){
      var params = {
        name: this.get('name'),
        info: this.get('info'),
        date: this.get('date'),
        img: this.get('img'),
        category: this.get('category'),
      };
      console.log(params);
      this.set('newListing', false);
      this.sendAction('save', params);
    },
    showForm(){
      this.set('newListing', true);
    }
  }
});
