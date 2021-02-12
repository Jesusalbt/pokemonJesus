import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PokemonModule,
    MongooseModule.forRoot(
      'mongodb+srv://jesus:jesusgre-3615216@cluster0.9n1oc.mongodb.net/pokemon-db?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
