import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'spire/tests/helpers/start-app';

var application;

module('Acceptance: MonitorNewSite', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/')
  .fillIn('input', 'http://example.com')
  .keyEvent('input', 'keyup', 13)
  .findWithAssert('#site-1')

  .then(function() {
    assert.equal(currentPath(), 'index');
  });
});
