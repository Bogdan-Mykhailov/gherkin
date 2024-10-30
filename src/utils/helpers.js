'use strict';

const getUpdatedText = (text) => {
  if (text.length > 17) {
    return text.slice(0, 16) + '1';
  }
  return text + '1';
};

module.exports = getUpdatedText;
