const joi = require('joi')

module.exports = {
  Sign_up_schema: {
    body: joi
      .object()
      .required()
      .keys({
        firstName: joi
          .string()
          .required()
          .messages({
            'any.required': 'oops , ypu must send name',
            'string.empty': 'oops , name cannot be empty',
            'string.base': 'oops , name must be string'
          }),
        lastName: joi
          .string()
          .required()
          .messages({
            'any.required': 'oops , ypu must send name',
            'string.empty': 'oops , name cannot be empty',
            'string.base': 'oops , name must be string'
          }),
        phone: joi
          .number()

          .required()
          .messages({
            'any.required': 'oops! phone is required',
            'string.empty': 'oops this field connot be empty',
            'number.base': 'oops , this field must be numbers only'
          }),
        age: joi
          .number()
          .greater(16)
          .required()
          .messages({
            'any.required': 'oops! age is required',
            'string.empty': 'oops this field connot be empty',
            'number.base': 'oops , this field must be numbers only',
            'number.greater': 'age must be greater than 16'
          }), // must greater than 16 years old
        Current_Address: joi
          .string()
          .required()
          .messages({
            'any.required': 'oops! Current_Address is required',
            'string.empty': 'oops this field connot be empty',
            'string.base': 'oops , this field must be string'
          }),
        city: joi
          .string()
          .required()
          .messages({
            'any.required': 'oops! city is required',
            'string.empty': 'oops this field connot be empty',
            'string.base': 'oops , this field must be string'
          }),
        country: joi
          .string()
          .required()
          .messages({
            'any.required': 'oops! country is required',
            'string.empty': 'oops this field connot be empty',
            'string.base': 'oops , this field must be string'
          }),
        Gender: joi
          .string()
          .required()
          .messages({
            'any.required': 'oops! Gender is required',
            'string.empty': 'oops this field connot be empty',
            'string.base': 'oops , this field must be string'
          }), // male or female
        Social_Status: joi
          .string()
          .required()
          .messages({
            'any.required': 'oops! Social_Status is required',
            'string.empty': 'oops this field connot be empty',
            'string.base': 'oops , this field must be string'
          }), // single , married
        Eduction_Status: joi
          .string()
          .required()
          .messages({
            'any.required': 'oops! Social_Status is required',
            'string.empty': 'oops this field connot be empty',
            'string.base': 'oops , this field must be string'
          }), // student , graduated
        Job: joi
          .string()
          .required()
          .messages({
            'any.required': 'oops! Job is required',
            'string.empty': 'oops this field connot be empty',
            'string.base': 'oops , this field must be string'
          }),
        Birth_Day: joi
          .date()
          .required()
          .messages({
            'any.required': 'oops! Birth_Day is required'
          }), //2020-8-11
        National_ID: joi.string().required()
      })
  }
}
