import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var posts = this.modelFor('blog');

    return posts.find(function(post) {
      return post._id === params.id;
    });
  }
});
