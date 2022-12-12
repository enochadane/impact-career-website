'use strict';

/**
 * trending-job service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trending-job.trending-job');
