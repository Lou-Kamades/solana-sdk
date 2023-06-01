import { SwitchboardProgram } from "../../SwitchboardProgram.js";
import * as types from "../types/index.js"; // eslint-disable-line @typescript-eslint/no-unused-vars

import * as borsh from "@coral-xyz/borsh";
import { PublicKey } from "@solana/web3.js"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { BN } from "@switchboard-xyz/common"; // eslint-disable-line @typescript-eslint/no-unused-vars

export interface AggregatorLockParamsFields {}

export interface AggregatorLockParamsJSON {}

export class AggregatorLockParams {
  constructor(fields: AggregatorLockParamsFields) {}

  static layout(property?: string) {
    return borsh.struct([], property);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new AggregatorLockParams({});
  }

  static toEncodable(fields: AggregatorLockParamsFields) {
    return {};
  }

  toJSON(): AggregatorLockParamsJSON {
    return {};
  }

  static fromJSON(obj: AggregatorLockParamsJSON): AggregatorLockParams {
    return new AggregatorLockParams({});
  }

  toEncodable() {
    return AggregatorLockParams.toEncodable(this);
  }
}
