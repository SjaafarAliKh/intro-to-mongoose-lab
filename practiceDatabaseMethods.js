const mongoose = require('mongoose')
require('dotenv').config()
const connectToDB = require('./db')


// "get the 5 functions from recipeUtils.js"
const {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
} = require('./recipeUtils')

connectToDB() // connect to database


const newRecipe = {
    name: "Um Ali",
    instructions: "bake at 180C",
    prepTime: 80,
    difficulty: "Medium"
}

createRecipe(newRecipe)
//getAllRecipes()
//getRecipeById('6adf3a12ef14548b9f39ae7e')
//updateRecipe('6adf3a12ef14548b9f39ae7e', { prepTime: 360 })
//deleteRecipe('6adf3a45e11d19d1bdbeb05a')


// test
/*
getRecipeById('abc')   
updateRecipe('abc', { prepTime: 1 }) 
deleteRecipe('abc') 
*/

/* 
test
updateRecipe('6adf3cc4e9a5cf99bb6ec1e5', { prepTime: 1 })   // fails: prepTime below min 5
updateRecipe('6adf464c6c05ca6cad671b5e', { prepTime: 90 })  // works: prints the updated recipe
deleteRecipe('6adf464c6c05ca6cad671b5e')                    // prints: Recipe successfully deleted.
deleteRecipe('6adf464c6c05ca6cad671b5e')                    // run again: No recipe with this ID exists.  


*/
