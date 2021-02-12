import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpStatus,
  Res,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDTO } from './pokemon.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Post('/create')
  async createPokemon(@Res() res, @Body() createProductDTO: CreatePokemonDTO) {
    const createdPokemon = await this.pokemonService.createPokemon(
      createProductDTO,
    );
    return res.status(HttpStatus.CREATED).json({
      pokemon: createdPokemon,
    });
  }

  @Get('/')
  async getAllPokemons(@Res() res) {
    const pokemons = await this.pokemonService.getPokemons();
    return res.status(HttpStatus.OK).json({
      pokemons,
    });
  }

  @Get('/:pokemonID')
  async getOnePokemon(@Res() res, @Param('pokemonID') pokemon_ID) {
    const pokemon = await this.pokemonService.getPokemon(pokemon_ID);
    if (!pokemon) throw new NotFoundException('Pokemon does not exist');
    return res.status(HttpStatus.OK).json({
      pokemon,
    });
  }

  @Delete('/delete/:pokemonID')
  async deletePokemon(@Res() res, @Param('pokemonID') pokemon_ID) {
    const deletedPokemon = await this.pokemonService.deletePokemon(pokemon_ID);
    if (!deletedPokemon) throw new NotFoundException('Pokemon does not found');
    return res.status(HttpStatus.OK).json({
      status: 'deleted',
      pokemon: deletedPokemon,
    });
  }

  @Put('/update/:pokemonID')
  async updatePokemon(
    @Res() res,
    @Body() createPokemonDTO: CreatePokemonDTO,
    @Param('pokemonID') pokemon_ID,
  ) {
    const updatedPokemon = await this.pokemonService.updatePokemon(
      pokemon_ID,
      createPokemonDTO,
    );
    return res.status(HttpStatus.OK).json({
      status: 'updated',
      pokemon: updatedPokemon,
    });
  }
}
