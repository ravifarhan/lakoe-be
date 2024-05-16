import * as Joi from 'joi';
import { CreateRoleDto } from 'src/roles/dto/create-role.dto';

export const ValidateRoles = Joi.object<CreateRoleDto>({
  name: Joi.string().required(),
});
