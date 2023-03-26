import axiosClient from "../api/axiosClient";

const actions = {
    // 使用 关键字获取 对应的食谱
    searchMealsByName({ commit }, keyword) {
        axiosClient.get(`/search.php?s=${keyword}`)
            .then(({ data }) => {
                // console.log(data.meals);
                commit("SEARCHMEALSBYNAME", data.meals)
            })
    },
    // 使用 关letter获取 对应的食谱
    searchMealsByLetter({ commit }, letter) {
        axiosClient.get(`/search.php?f=${letter}`)
            .then(({ data }) => {
                commit("SEARCHMEALSBYLETTER", data.meals)
            })
    },
    // 使用 关ingredient获取 对应的食谱
    searchMealsByIngredient({ commit }, ingredient) {
        axiosClient.get(`/filter.php?i=${ingredient}`)
            .then(({ data }) => {
                commit("SEARCHMEALSBYINGREDIENT", data.meals)
            })
    },
    // 根据ingredient获取全部的meals
    getMealsByAllIngredients({ commit }) {
        axiosClient.get("/list.php?i=list")
            .then(({ data }) => {
                commit("GETMEALSBYALLINGREDIENTS", data.meals)
            })
    },
    // 获取random meal 使用 循环10次
    getRandomMealsFor_10({ commit }) {
        for (let i = 0; i < 10; i++) {
            axiosClient.get("random.php")
                .then(({ data }) => {
                    // console.log(data.meals);
                    commit('GETRANDOMMEALSFOR_10', data.meals[0])
                })
        }
    }
}

export default actions