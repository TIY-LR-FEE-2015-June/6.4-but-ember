import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('bookmark');
  },

  actions: {
    save: function(bookmark) {
      bookmark.save().then(() => {
        this.transitionTo('bookmarks');
      });
    }
  }
});
