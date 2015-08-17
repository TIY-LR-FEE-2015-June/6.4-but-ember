import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findById('blog', params.id);
  },
  actions: {
    delete: function(blog) {
      blog.destroyRecord();

      this.transitionTo('cms.index');
    }
  }
});
