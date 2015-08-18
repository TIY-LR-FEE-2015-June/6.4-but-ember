import Ember from 'ember';

export default Ember.Controller.extend({
  lastName: Ember.computed(function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
