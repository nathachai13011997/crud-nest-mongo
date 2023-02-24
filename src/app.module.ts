import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { ProductsModule } from './products/products.module';
import { EmployeesModule } from './employees/employees.module';
// ProductsModule, 
@Module({
  imports: [EmployeesModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/mydb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}