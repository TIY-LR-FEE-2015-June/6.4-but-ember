import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.modelFor('bookmarks').filter(function(model) {
      return model.get('tag') === params.filter;
    });
  }
});
