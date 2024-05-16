import * as joi from 'joi';
import { CreateCourierDto } from 'src/couriers/dto/create-courier.dto';

export const ValidateCouriers = joi.object<CreateCourierDto>({
  courier_code: joi.string().required(),
  courier_service_name: joi.string().required(),
  courier_service_code: joi.string().required(),
  price: joi.number().required(),
  // invoicesId: joi.string().required(),
  // order_id: joi.string().required()
});
