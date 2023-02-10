'use strict';

/**
 * interview-prep service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::interview-prep.interview-prep');
