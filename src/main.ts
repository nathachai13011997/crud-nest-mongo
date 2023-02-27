import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs'

const port = process.env.SERVER_PORT

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  const dir_logs = "./logs"
  if(!fs.existsSync(dir_logs)){
    fs.mkdirSync(dir_logs)
  }
  console.log(`server runing port ${port}`);
}
bootstrap();
