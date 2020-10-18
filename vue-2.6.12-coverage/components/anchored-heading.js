Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'div', // tag name
      {},
      [
        createElement('h1', this.$slots.default),
        createElement(
          'h' + this.level,
          this.$slots['sub-heading'] || 'some sub heading...'
        ),
      ]
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});