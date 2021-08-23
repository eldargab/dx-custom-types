// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, Vec, bool, i128, u32 } from '@polkadot/types';
import type { AccountId, AssetId, Balance, Hash } from '@polkadot/types/interfaces/runtime';

/** @name Address */
export interface Address extends AccountId {}

/** @name Amount */
export interface Amount extends i128 {}

/** @name AmountOf */
export interface AmountOf extends Amount {}

/** @name AssetPair */
export interface AssetPair extends Struct {
  readonly asset_in: AssetId;
  readonly asset_out: AssetId;
}

/** @name BalanceInfo */
export interface BalanceInfo extends Struct {
  readonly amount: Balance;
  readonly assetId: AssetId;
}

/** @name Chain */
export interface Chain extends Struct {
  readonly genesisHash: Bytes;
  readonly lastBlockHash: Bytes;
}

/** @name CurrencyId */
export interface CurrencyId extends AssetId {}

/** @name CurrencyIdOf */
export interface CurrencyIdOf extends AssetId {}

/** @name Fee */
export interface Fee extends Struct {
  readonly numerator: u32;
  readonly denominator: u32;
}

/** @name Intention */
export interface Intention extends Struct {
  readonly who: AccountId;
  readonly asset_sell: AssetId;
  readonly asset_buy: AssetId;
  readonly amount: Balance;
  readonly discount: bool;
  readonly sell_or_buy: IntentionType;
}

/** @name IntentionId */
export interface IntentionId extends Hash {}

/** @name IntentionType */
export interface IntentionType extends Enum {
  readonly isSell: boolean;
  readonly isBuy: boolean;
}

/** @name LookupSource */
export interface LookupSource extends AccountId {}

/** @name OrderedSet */
export interface OrderedSet extends Vec<AssetId> {}

/** @name OrmlAccountData */
export interface OrmlAccountData extends Struct {
  readonly free: Balance;
  readonly frozen: Balance;
  readonly reserved: Balance;
}

/** @name Price */
export interface Price extends Balance {}

export type PHANTOM_DEFAULT = 'default';
