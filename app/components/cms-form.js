import Ember from 'ember';

export default Ember.Component.extend({
  setupData: function() {
    this.setProperties({
      title: this.get('post.title'),
      author: this.get('post.author'),
      body: this.get('post.body'),
    });
  }.on('init'),

  actions: {
    save: function() {
      var data = this.getProperties('title', 'author', 'body');

      this.sendAction('save', data);
    }
  }
});
