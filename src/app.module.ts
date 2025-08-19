import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AppController } from './app.controller';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule],
  controllers: [AppController],
  providers: [],
})

// @Module({  FIXME: когда нибудь должно быть так
//   imports: [
//     ConfigModule.forRoot({ isGlobal: true }),
//     DatabaseModule,
//     LoggerModule,
//     AuthModule,
//     UsersModule,
//     MailModule,
//     QueueModule,
//     PaymentsModule,
//     ProductsModule,
//     FilesModule,
//   ],
// })
export class AppModule {}
