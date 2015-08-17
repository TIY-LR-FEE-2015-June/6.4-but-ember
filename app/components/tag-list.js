import Ember from 'ember';

export default Ember.Component.extend({
  bookmarks: [],

  tags: Ember.computed('bookmarks', 'bookmarks.@each', function() {
    return this.get('bookmarks').reduce(function(prev, current) {
      var tag = current.get('tag');

      if (prev.indexOf(tag) === -1) {
        prev.push(tag);
      }

      return prev;
    }, []);
  }),
});
