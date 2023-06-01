import { SwitchboardProgram } from "../../SwitchboardProgram.js";
import * as types from "../types/index.js"; // eslint-disable-line @typescript-eslint/no-unused-vars

import * as borsh from "@coral-xyz/borsh";
import { PublicKey } from "@solana/web3.js"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { BN } from "@switchboard-xyz/common"; // eslint-disable-line @typescript-eslint/no-unused-vars

export interface AggregatorSetMinJobsParamsFields {
  minJobResults: number;
}

export interface AggregatorSetMinJobsParamsJSON {
  minJobResults: number;
}

export class AggregatorSetMinJobsParams {
  readonly minJobResults: number;

  constructor(fields: AggregatorSetMinJobsParamsFields) {
    this.minJobResults = fields.minJobResults;
  }

  static layout(property?: string) {
    return borsh.struct([borsh.u32("minJobResults")], property);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new AggregatorSetMinJobsParams({
      minJobResults: obj.minJobResults,
    });
  }

  static toEncodable(fields: AggregatorSetMinJobsParamsFields) {
    return {
      minJobResults: fields.minJobResults,
    };
  }

  toJSON(): AggregatorSetMinJobsParamsJSON {
    return {
      minJobResults: this.minJobResults,
    };
  }

  static fromJSON(
    obj: AggregatorSetMinJobsParamsJSON
  ): AggregatorSetMinJobsParams {
    return new AggregatorSetMinJobsParams({
      minJobResults: obj.minJobResults,
    });
  }

  toEncodable() {
    return AggregatorSetMinJobsParams.toEncodable(this);
  }
}
