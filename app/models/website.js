import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),

  elementId: function() {
    return "site-" + this.get('id');
  }.property('id')
});
