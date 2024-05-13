import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ConfirmationPaymentService } from './confirmation_payment.service';
import { CreateConfirmationPaymentDto } from './dto/create-confirmation_payment.dto';
import { UpdateConfirmationPaymentDto } from './dto/update-confirmation_payment.dto';

@Controller('confirmation-payment')
export class ConfirmationPaymentController {
  constructor(
    private readonly confirmationPaymentService: ConfirmationPaymentService,
  ) {}

  @Post()
  create(@Body() createConfirmationPaymentDto: CreateConfirmationPaymentDto) {
    return this.confirmationPaymentService.create(createConfirmationPaymentDto);
  }

  @Get()
  findAll() {
    return this.confirmationPaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.confirmationPaymentService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConfirmationPaymentDto: UpdateConfirmationPaymentDto,
  ) {
    return this.confirmationPaymentService.update(
      id,
      updateConfirmationPaymentDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.confirmationPaymentService.remove(id);
  }
}
