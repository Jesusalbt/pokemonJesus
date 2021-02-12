import {  Document } from "mongoose";

export interface Pokemon extends Document {
  readonly name: string;
  readonly attribute: string;
  readonly number: number;
  readonly img: string;
 
}
