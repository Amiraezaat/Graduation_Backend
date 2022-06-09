const dataMethod = ['body', 'params', 'query']

const validation = schema => {
  return (req, res, next) => {
    const errorArray = []
    dataMethod.forEach(key => {
      if (schema[key]) {
        const validateResult = schema[key].validate(req[key])
        if (validateResult.error) {
          errorArray.push(validateResult.error.details)
        }
      }
    })

    if (errorArray.length) {
      res.json({ message: 'Validation Error', err: errorArray })
    } else {
      next()
    }
  }
}

module.exports = validation
