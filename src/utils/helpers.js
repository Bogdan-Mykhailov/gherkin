'use strict';

const getUpdatedText = (text) => {
  if (text.length > 17) {
    return text.slice(0, 16) + '1';
  }
  return text + '1';
};

const getUserNameFromUrl = (url) => {
  let userName = '';
  const urlParts = url.split('/');
  userName = urlParts[urlParts.indexOf('u') + 1];

  return userName;
};

module.exports = { getUpdatedText, getUserNameFromUrl };
