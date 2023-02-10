'use strict';

/**
 * web-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-article.web-article');
