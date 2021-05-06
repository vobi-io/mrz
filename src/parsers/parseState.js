'use strict';

const STATES = require('../generated/states');

const cleanText = require('./cleanText');

module.exports = function parseState(source) {
  let updatedSource = source
  if (updatedSource && updatedSource.includes('GE0')) {
    updatedSource = updatedSource.replace('GE0', 'GEO')
  } else if (updatedSource === 'D<<' ) {
    updatedSource = 'D'
  }

  source = cleanText(updatedSource);
  let state = STATES[updatedSource];
  
  if (!state) {
    throw new Error(`invalid state code: ${source}`);
  }

  return {
    value: source,
    start: 0,
    end: source.length,
  };
};
