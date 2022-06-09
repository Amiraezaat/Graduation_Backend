const roles = require('../../roles')
const adminPolicy = require('./adminPolicy')
const userPolicy = require('./userPolicy')

const opts = {
  [roles.USER]: {
    can: userPolicy
  },
  [roles.ADMIN]: {
    can: adminPolicy
  }
}

module.exports = opts
