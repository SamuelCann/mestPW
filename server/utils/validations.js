const Joi = require("joi");

exports.registerValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

exports.loginValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

exports.createProductValidator = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.string().required(),
  rating: Joi.number(),
});

exports.updateProductValidator = Joi.object({
  title: Joi.string(),
  price: Joi.number(),
  image: Joi.string(),
  rating: Joi.number(),
});
