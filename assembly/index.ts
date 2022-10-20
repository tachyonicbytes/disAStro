// Entry file for disAStro.

import Big from "as-big";
import { JSON } from "json-as";

export function test1(): string {
  let r = Big.of(0.1) + Big.of(0.2);  // Big(0.3)
  return r.toString();
}

// Examples from json-as
// @ts-ignore
@json
class Vec2 {
  x: f32
  y: f32
}

// @ts-ignore
@json
class Player {
  firstName: string
  lastName: string
  lastActive: i32[]
  age: i32
  pos: Vec2
  isVerified: boolean
}

export function test2(): string {
  // @ts-ignore
  const data: Player = {
    firstName: "Emmet",
    lastName: "West",
    lastActive: [8, 27, 2022],
    age: 23,
    pos: {
      x: -3.4,
      y: 1.2
    },
    isVerified: true
  }

  return JSON.stringify<Player>(data);
}

// const parsed = JSON.parse<Player>(stringified);
// return stringified;
export { Big, JSON };
