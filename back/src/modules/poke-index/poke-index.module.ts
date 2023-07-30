import { Module } from '@nestjs/common';
import { PokeIndexController } from './poke-index.controller';
import { PokeIndexService } from './poke-index.service';

@Module({
  controllers: [PokeIndexController],
  providers: [PokeIndexService],
})
export class PokeIndexModule {}