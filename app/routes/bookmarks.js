import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('bookmark');

    /**
     * Before Ember Data
     */
    // return Ember.$.ajax('http://tiny-lr.herokuapp.com/collections/rt-bookmarks');
  }
});

