import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  
  const port = configService.get('HTTP_PORT') || 3000; 
  console.log(`Servidor rodando na porta: ${port}`); 

  await app.listen(port);
}
bootstrap();