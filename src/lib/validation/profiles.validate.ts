import * as Joi from 'joi';
import { CreateProfileDto } from 'src/profiles/dto/create-profile.dto';

export const ValidateProfiles = Joi.object<CreateProfileDto>({
  locations: Joi.string().required(),
});
