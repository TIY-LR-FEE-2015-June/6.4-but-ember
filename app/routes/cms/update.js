import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.modelFor('cms').find(function(model) {
      return model._id === params.id;
    });
  },

  actions: {
    save: function(data) {
      var id = this.modelFor('cms.update')._id;
      Ember.$.ajax({
        url: 'http://tiny-lr.herokuapp.com/collections/rt-cms/' + id,
        method: 'PUT',
        data: JSON.stringify(data),
        contentType: 'application/json',
      }).then(() => {
        Ember.setProperties(this.modelFor('cms.update'), data);

        this.transitionTo('cms.index');
      });
    }
  }
});
