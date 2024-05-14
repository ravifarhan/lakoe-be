import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [UsersModule, InvoicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
