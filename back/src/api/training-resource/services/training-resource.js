'use strict';

/**
 * training-resource service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::training-resource.training-resource');
