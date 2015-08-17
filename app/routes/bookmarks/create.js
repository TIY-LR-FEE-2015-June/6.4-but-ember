import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    /**
     * Create a new bookmark instance that we'll save to the server
     */
    return this.store.createRecord('bookmark');
  },

  actions: {
    /**
     * Fired by the `save` action in the create template
     * @param  {[type]} bookmark Bookmark model sent from the template action
     */
    save: function(bookmark) {
      bookmark.save().then(() => {
        /**
         * Change to the bookmarks main route
         */
        this.transitionTo('bookmarks');
      });
    }
  }
});
