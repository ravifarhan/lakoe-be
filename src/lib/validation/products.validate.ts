import * as Joi from 'joi';
import { CreateProductDto } from 'src/products/dto/create-product.dto';

export const ValidateProducts = Joi.object<CreateProductDto>({
  name: Joi.string().required(),
  url: Joi.string().required(),
  description: Joi.string().required(),
  attachments: Joi.string().required(),
  price: Joi.number().required(),
  minimum_order: Joi.number().required(),
  stock: Joi.number().required(),
  sku: Joi.string().required(),
  weight: Joi.number().required(),
  long: Joi.number().required(),
  wide: Joi.number().required(),
  height: Joi.number().required(),
  is_active: Joi.boolean().required(),
  variants: Joi.string().empty(),
  size: Joi.string().empty(),
});
