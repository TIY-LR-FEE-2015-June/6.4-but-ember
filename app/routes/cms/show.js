import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.modelFor('cms').find(function(model) {
      return model._id === params.id;
    });
  },
  actions: {
    delete: function(model) {
      Ember.$.ajax({
        url: 'http://tiny-lr.herokuapp.com/collections/rt-cms/' + model._id,
        method: 'DELETE',
      }).then(() =>{
        this.modelFor('cms').removeObject(model);

        this.transitionTo('cms.index');
      });
    }
  }
});
