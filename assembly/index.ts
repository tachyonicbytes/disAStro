// disAStro entry file.

import Big from "as-big";
import { JSON } from "json-as";
import { RegExp } from "regexp";
import { StringSink } from "as-string-sink/assembly";
import { ByteSink } from "byte-parse-as/assembly";
import uuid from "as-uuid/assembly";


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

export function test3(arr: string[]): string {
  let res = new StringSink();
  for (let i = 0, len = arr.length; i < len; i++) {
    res.write("12");
  }
  return res.toString();
}

export function test4(): string {
  let buffer = new ByteSink();
  buffer.write(`Some content that should end up as bytes`);
  return buffer.toString();
}

export function test5(): Player {
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

  let json = JSON.stringify<Player>(data);
  return JSON.parse<Player>("[1, 2, 3]");
}

// const parsed = JSON.parse<Player>(stringified);
// return stringified;
export { Big, JSON, RegExp, StringSink, ByteSink, uuid };
