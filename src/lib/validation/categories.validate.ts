import * as Joi from 'joi';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';

export const ValidateCategories = Joi.object<CreateCategoryDto>({
  name: Joi.string().required(),
});
