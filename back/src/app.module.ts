import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokeApiModule } from './modules/poke-api/poke-api.module';

@Module({
  imports: [PokeApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
