import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(data) {
      /**
       * Ideally we could do this... Using Ember Data
       * But the Tiny LR Server is weird
       */
      var blog = this.modelFor('cms.update');
      blog.setProperties(data);
      blog.save().then(() => {this.transitionTo('cms.index');});

      /**
       * Before Ember Data
       * Updates a model and updates the model record
       * @return {[type]}    [description]
       */
      // Ember.$.ajax({
      //   url: 'http://tiny-lr.herokuapp.com/collections/rt-blog/' + id,
      //   method: 'PUT',
      //   data: JSON.stringify(data),
      //   contentType: 'application/json',
      // }).then(() => {
      //   Ember.setProperties(this.modelFor('cms.update'), data);

      //   this.transitionTo('cms.index');
      // });
    }
  }
});
