import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { pokemonSchema } from './pokemon.schema';
import {  MongooseModule} from "@nestjs/mongoose";


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Pokemon', schema: pokemonSchema }]),
  ],
  providers: [PokemonService],
  controllers: [PokemonController],
})
export class PokemonModule {}
