const router = require('express').Router()
const { getRecipes, postRecipe, getSingleRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipes')

router.get('/', (req, res) => {
    res.send('<h1> API /h1>')
})

router.get('/recipes', getRecipes)

router.post('/recipes', postRecipe)

router.get('/recipes/:id', getSingleRecipe)

router.put('/recipes/:id', updateRecipe)

router.delete('/recipes/:id', deleteRecipe)

router.get('/users', (req, res) => {
    res.send('<h1> Users</h1>')
})

router.get('/ingredients', (req, res) => {
    res.send('<h1> Ingredients </h1>')
})


module.exports = router;