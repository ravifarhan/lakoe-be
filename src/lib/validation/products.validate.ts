import * as Joi from 'joi';
import { CreateProductDto } from 'src/products/dto/create-product.dto';

export const ValidateProducts = Joi.object<CreateProductDto>({
  name: Joi.string().required(),
  description: Joi.string().required(),
  attachments: Joi.string().required(),
  is_active: Joi.boolean().required(),
  variants: Joi.string().empty(),
  size: Joi.number().empty(),
  minimum_order: Joi.number().required(),
});
