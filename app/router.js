import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blog', {path: 'exercise-b'}, function() {
    this.route('show', {path: ':id'});
  });

  this.route('bookmarks', {path: 'exercise-c'}, function() {
    this.route('create');
    this.route('filtered', {path: ':filter'});
  });
});

export default Router;
