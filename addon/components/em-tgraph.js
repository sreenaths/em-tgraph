import Ember from 'ember';

import layout from '../templates/components/em-tgraph';

import fullscreen from '../utils/fullscreen';
import GraphView from '../utils/graph-view';
import DataProcessor from '../utils/data-processor';

export default Ember.Component.extend({

  layout: layout,

  classNames: ['dag-view-container'],

  errMessage: null,

  isHorizontal: false,
  hideAdditionals: false,
  isFullscreen: false,

  pathname: Ember.computed(function() {
    return window.location.pathname;
  }).volatile(),

  _onOrientationChange: function () {
  }.observes('isHorizontal'),

  _onTglAdditionals: function () {
    GraphView.additionalDisplay(this.get('hideAdditionals'));
  }.observes('hideAdditionals'),

  _onTglFullScreen: function () {
    fullscreen.toggle(this.get('element'));
  }.observes('isFullscreen'),

  actions: {
    tglOrientation: function() {
      var isTopBottom = GraphView.toggleLayouts();
      this.set('isHorizontal', !isTopBottom);
    },
    tglAdditionals: function() {
      this.set('hideAdditionals', !this.get('hideAdditionals'));
    },
    fullscreen: function () {
      this.set('isFullscreen', !this.get('isFullscreen'));
    },
    fitGraph: function () {
      GraphView.fitGraph();
    },
    configure: function () {
      this.sendAction('configure');
    }
  },

  didInsertElement: function () {
    var result = DataProcessor.graphifyData(this.get('data'));

    if(typeof result === "string") {
      this.set('errMessage', result);
    }
    else {
      GraphView.create(
        this,
        this.get('element'),
        result
      );
    }
  }

});
