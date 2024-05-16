import * as joi from 'joi';
import { CreateStoreDto } from 'src/stores/dto/create-store.dto';

export const ValidateStores = joi.object<CreateStoreDto>({
  name: joi.string().required(),
  slogan: joi.string().required(),
  description: joi.string().required(),
  domain: joi.string().required(),
  logo_attachment: joi.string().required(),
  banner_attachment: joi.string().required(),
});
