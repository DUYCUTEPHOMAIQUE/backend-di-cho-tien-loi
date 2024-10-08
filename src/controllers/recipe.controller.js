const { model } = require("mongoose");
const { SuccessResponse } = require("../core/success.response");
const RecipeService = require("../services/recipe.service");
const { update } = require("lodash");

class RecipeController {
  createRecipe = async (req, res, next) => {
    try {
      new SuccessResponse({
        message: {
          en: "success",
          vi: "Thêm công thức nấu ăn thành công",
        },
        statusCode: "357",
        metadata: await RecipeService.createRecipe(req.body),
      }).send(res);
    } catch (error) {
      next(error);
    }
  };

  updateRecipe = async (req, res, next) => {
    try {
      const recipeId = req.params.id;
      return new SuccessResponse({
        message: {
          en: "Recipe updated successfully.",
          vn: "Cập nhật công thức nấu ăn thành công",
        },
        statusCode: 370,
        metadata: await RecipeService.updateRecipe(recipeId, req.body),
      }).send(res);
    } catch (error) {
      next(error);
    }
  };

  deleteRecipe = async (req, res, next) => {
    try {
      //
      const recipeId = req.params.id;
      return new SuccessResponse({
        message: {
          en: "Your recipe was deleted successfully.",
          vn: "Công thức của bạn đã được xóa thành công",
        },
        statusCode: 376,
        metadata: await RecipeService.deleteRecipe(recipeId),
      }).send(res);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new RecipeController();
