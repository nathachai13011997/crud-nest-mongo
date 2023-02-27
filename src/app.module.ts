import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { ProductsModule } from './products/products.module';
import { EmployeesModule } from './employees/employees.module';
// ProductsModule,

const modulesImport = [
  EmployeesModule,
]

@Module({
  imports: [
    ...modulesImport,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/mydb'),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
