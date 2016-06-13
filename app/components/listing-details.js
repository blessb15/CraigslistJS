import Ember from 'ember';

export default Ember.Component.extend({
  showUpdate: false,
  actions: {
    delete(listing) {
      this.sendAction('delete', listing);
    },
    update(listing) {
      var params = {
        name: this.get('name') ? this.get('name'):null,
        info: this.get('info') ? this.get('info'):null,
        date: this.get('date') ? this.get('date'):null,
        img: this.get('img') ? this.get('img'):null,
        category: this.get('category') ? this.get('category'):null,
      };
      this.set('showUpdate', false);
      this.sendAction('update', params, listing);
    },
    updateForm() {
      this.set('showUpdate', true);
    }
  }
});
