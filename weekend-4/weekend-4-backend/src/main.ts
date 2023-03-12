import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {  
  const app = await NestFactory.create(AppModule);

  setupOpenAPI(app);
  enableCors(app);

  await app.listen(3000);
}
bootstrap();

function setupOpenAPI(app: INestApplication) {
  const config = new DocumentBuilder()
  .setTitle('Encode Weekend 4 API')
  .setDescription('API for weekend 4 project in Encode Bootcamp - Late - Team 1')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

function enableCors(app: INestApplication) {
  const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    allowedHeaders: 'Content-Type, Accept, Authorization',
  };

  app.enableCors(corsOptions);
}