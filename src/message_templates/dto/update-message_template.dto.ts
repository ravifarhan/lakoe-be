import { PartialType } from '@nestjs/mapped-types';
import { CreateMessageTemplateDto } from './create-message_template.dto';

export class UpdateMessageTemplateDto extends PartialType(
  CreateMessageTemplateDto,
) {
  name: string;
  content: string;
}
