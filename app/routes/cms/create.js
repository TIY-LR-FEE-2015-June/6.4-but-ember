import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('blog');
  },

  actions: {
    save: function(data) {
      var blog = this.modelFor('cms.create');
      blog.setProperties(data);
      blog.save().then(() => {
        this.transitionTo('cms.index');
      });

      /**
       * Before Ember Data
       */
      // Ember.$.ajax({
      //   url: 'http://tiny-lr.herokuapp.com/collections/rt-cms',
      //   method: 'POST',
      //   data: JSON.stringify(data),
      //   contentType: 'application/json',
      // }).then((data) => {
      //   this.modelFor('cms').addObject(data);

      //   this.transitionTo('cms.index');
      // });
    }
  }
});
