import Ember from 'ember';

export default Ember.TextField.extend({
  keyUp: function(e) {
    if (e.keyCode === 13) {
      this.sendAction('action', Ember.$('input').val());
    }
  }
});
