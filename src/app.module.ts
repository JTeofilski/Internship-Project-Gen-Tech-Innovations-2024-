import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from 'db/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from 'utils/logger.middleware';
import { SeatModule } from './seat/seat.module';
import { MovieModule } from './movie/movie.module';
import { GenreModule } from './genre/genre.module';
import { AuditoriumModule } from './auditorium/auditorium.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    SeatModule,
    MovieModule,
    GenreModule,
    AuditoriumModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
