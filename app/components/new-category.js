import Ember from 'ember';

export default Ember.Component.extend({
  addCategory: false,
  actions: {
    save(){
      var params = {
        name: this.get('name'),
      };
      // console.log(params);
      this.set('addCategory', false);
      this.sendAction('save', params);
    },
    showForm() {
      this.set('addCategory', true);
    }
  }
});
