import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePokemonDTO } from './pokemon.dto';
import { Pokemon } from './pokemon.interface';
// import {  pokemonSchema} from "./pokemon.schema";

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel('Pokemon') private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async getPokemons(): Promise<Pokemon[]> {
    const pokemons = await this.pokemonModel.find({});
    return pokemons;
  }

  async getPokemon(pokemonID: string): Promise<Pokemon> {
    const pokemon = await this.pokemonModel.findById(pokemonID);
    return pokemon;
  }

  async createPokemon(createPokemonDTO: CreatePokemonDTO): Promise<Pokemon> {
    const pokemon = new this.pokemonModel(createPokemonDTO);
    await pokemon.save();
    return pokemon;
  }

  async deletePokemon(pokemonID: string): Promise<Pokemon> {
    const deletedPokemon = await this.pokemonModel.findByIdAndDelete(pokemonID);
    return deletedPokemon;
  }

  async updatePokemon(
    pokemonID: string,
    createPokemonDTO: CreatePokemonDTO,
  ): Promise<Pokemon> {
    const updatedPokemon = await this.pokemonModel.findByIdAndUpdate(
      pokemonID,
      createPokemonDTO,
      { new: true },
    );
    return updatedPokemon;
  }
}
