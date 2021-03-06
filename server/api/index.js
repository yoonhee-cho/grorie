const router = require('express').Router()
module.exports = router

router.use('/groceryItems', require('./groceryItems'))
router.use('/users', require('./users'))
router.use('/recipe', require('./recipe'))
router.use('/menus', require('./menu'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
