import { Schema } from 'mongoose';

export const pokemonSchema = new Schema({
  name: String,
  attribute: String,
  number: Number,
  img: String,
});
