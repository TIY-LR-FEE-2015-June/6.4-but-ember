import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string', {defaultValue: 'Hello World'}),
  body: DS.attr(),
});
