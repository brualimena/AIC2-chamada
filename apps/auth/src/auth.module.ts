import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'database/src/prisma.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/auth/.env',
      validationSchema: Joi.object({
        HTTP_PORT: Joi.number().required(),        
        DATABASE_URL: Joi.string().required(),
      })
    })  
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
