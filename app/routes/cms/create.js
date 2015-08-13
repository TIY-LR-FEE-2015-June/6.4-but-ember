import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(data) {
      Ember.$.ajax({
        url: 'http://tiny-lr.herokuapp.com/collections/rt-cms',
        method: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
      }).then((data) => {
        this.modelFor('cms').addObject(data);

        this.transitionTo('cms.index');
      });
    }
  }
});
