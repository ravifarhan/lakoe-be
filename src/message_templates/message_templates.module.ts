import { Module } from '@nestjs/common';
import { MessageTemplatesService } from './message_templates.service';
import { MessageTemplatesController } from './message_templates.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MessageTemplatesController],
  providers: [MessageTemplatesService, PrismaService],
})
export class MessageTemplatesModule {}
