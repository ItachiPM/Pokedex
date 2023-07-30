import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokeIndexModule } from './modules/poke-index/poke-index.module';

@Module({
  imports: [PokeIndexModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
