const mongoose = require('mongoose')
const Recipe = require('./models/Recipe')


async function connectToDB() { //connection to the database
    try {
        await mongoose.connect('mongodb://localhost:27017/recipes')
        console.log('Connected to database!')
    }
    catch (error) {
        console.log("Connection failed. ", error)
    }
}
connectToDB() // connect to database


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
    const allRecipes = await Recipe.find()
    console.log(allRecipes)
}


// 5. getRecipeById(id)
async function getRecipeById(id) {
    const foundRecipe = await Recipe.findById(id)

    if (foundRecipe) {
        console.log(foundRecipe)
    } else {
        console.log('No recipe with this ID exists.')
    }
}


// 6. updateRecipe(recipeId, newRecipeData)
async function updateRecipe(recipeId, newRecipeData) {
    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, newRecipeData, { new: true })
    console.log(updatedRecipe)
}



// 7. deleteRecipe(recipeId)
async function deleteRecipe(recipeId) {
    await Recipe.findByIdAndDelete(recipeId)
    console.log('Recipe successfully deleted.')
}



const newRecipe = {
    name: "cake",
    instructions: "bake at 180C",
    prepTime: 120,
    difficulty: "Medium"
}

//createRecipe(newRecipe)
//getAllRecipes()
//getRecipeById('6adf3a12ef14548b9f39ae7e')
//updateRecipe('6adf3a12ef14548b9f39ae7e', { prepTime: 360 })
//deleteRecipe('6adf3a45e11d19d1bdbeb05a')
