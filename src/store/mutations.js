
const mutations = {
    // 使用 关键字获取 对应的食谱
    SEARCHMEALSBYNAME(state, meals) {
        state.mealsByName = meals;
    },
    // 使用 关letter获取 对应的食谱
    SEARCHMEALSBYLETTER(state, meals) {
        state.mealsByLetter = meals;
    },
    // 使用 关ingredient获取 对应的食谱
    SEARCHMEALSBYINGREDIENT(state, meals) {
        state.mealsByIngredient = meals;
    },
    // 根据ingredient获取全部的meals
    GETMEALSBYALLINGREDIENTS(state, meals) {
        state.mealsByAllIngredient = meals;
    },
    // 获取random meal 使用 循环10次
    GETRANDOMMEALSFOR_10(state, meals) {
        state.randomMeals_10.push(meals)
    },

}

export default mutations