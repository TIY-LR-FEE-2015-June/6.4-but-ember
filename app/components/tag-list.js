import Ember from 'ember';

export default Ember.Component.extend({
  bookmarks: [],

  tags: Ember.computed('bookmarks', 'bookmarks.@each', function() {
    return this.get('bookmarks').reduce(function(prev, current) {
      if (prev.indexOf(current.tag) === -1) {
        prev.push(current.tag);
      }

      return prev;
    }, []);
  }),
});
