import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    /**
     * Grabs the models from the bookmarks route
     * and filters it by the route parameter 'filter'
     */
    return this.modelFor('bookmarks').filter(function(model) {
      /**
       * We need to use `model.get` since ember wraps model parameters
       */
      return model.get('tag') === params.filter;
    });
  }
});
