import { prop, getModelForClass } from '@typegoose/typegoose';

class Recipe {
  @prop()
  name: string;

  @prop()
  lastname: string;

  @prop()
  email: string;

  @prop()
  password: string;
}

const RecipeModel = getModelForClass(Recipe);

export default RecipeModel;
