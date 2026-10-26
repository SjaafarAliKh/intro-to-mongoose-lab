const Recipe = require('./models/Recipe')   // the functions need Recipe, so import it here


// 3. createRecipe(newRecipe)
async function createRecipe(newRecipe) {
    try {
        const createdRecipe = await Recipe.create(newRecipe)
        console.log(createdRecipe)
    }
    catch (error) {
        console.log('Failed to create recipe.')
    }
}
//createRecipe(newRecipe)


// 4. getAllRecipes()
async function getAllRecipes() {
    try {
        const allRecipes = await Recipe.find()
        console.log(allRecipes)
    }
    catch (error) {
        console.log('Failed to get recipes.', error.message)

    }
}


// 5. getRecipeById(id)
async function getRecipeById(id) {
    try {
        const foundRecipe = await Recipe.findById(id)

        if (foundRecipe) {
            console.log(foundRecipe)
        } else {
            console.log('No recipe with this ID exists.')
        }
    }
    catch (error) {
        console.log('No recipe with this ID exists.')
    }
}


// 6. updateRecipe(recipeId, newRecipeData)
async function updateRecipe(recipeId, newRecipeData) {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(
            recipeId,
            newRecipeData,
            { new: true, runValidators: true } // runValidators applies min/max/enum on updates
        )

        if (updatedRecipe) {
            console.log(updatedRecipe)
        } else {
            console.log('No recipe with this ID exists.')
        }
    }
    catch (error) {
        console.log('Failed to update recipe.', error.message)
    }
}

// 7. deleteRecipe(recipeId)
async function deleteRecipe(recipeId) {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(recipeId)

        if (deletedRecipe) {
            console.log('Recipe successfully deleted.')
        } else {
            console.log('No recipe with this ID exists.')
        }
    }
    catch (error) {
        console.log('Failed to delete recipe.', error.message)
    }
}


// "share these 5 functions with other files"
module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
}

                 
