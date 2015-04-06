import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('website');
  },

  actions: {
    addWebsite: function(url) {
      var website = this.store.createRecord('website', { url: url });
      website.save();
    }
  }
});
