import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
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
