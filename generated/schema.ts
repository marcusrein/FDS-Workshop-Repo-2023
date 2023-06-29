// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Token | null {
    return changetype<Token | null>(store.get_in_block("Token", id));
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string | null {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set owner(value: string | null) {
    if (!value) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromString(<string>value));
    }
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get ipfsURI(): string | null {
    let value = this.get("ipfsURI");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ipfsURI(value: string | null) {
    if (!value) {
      this.unset("ipfsURI");
    } else {
      this.set("ipfsURI", Value.fromString(<string>value));
    }
  }

  get updatedAtTimestamp(): BigInt | null {
    let value = this.get("updatedAtTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set updatedAtTimestamp(value: BigInt | null) {
    if (!value) {
      this.unset("updatedAtTimestamp");
    } else {
      this.set("updatedAtTimestamp", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class TokenMetadata extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenMetadata entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenMetadata must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenMetadata", id.toString(), this);
    }
  }

  static loadInBlock(id: string): TokenMetadata | null {
    return changetype<TokenMetadata | null>(
      store.get_in_block("TokenMetadata", id)
    );
  }

  static load(id: string): TokenMetadata | null {
    return changetype<TokenMetadata | null>(store.get("TokenMetadata", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get image(): string {
    let value = this.get("image");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get traitType0(): string {
    let value = this.get("traitType0");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set traitType0(value: string) {
    this.set("traitType0", Value.fromString(value));
  }

  get value0(): string {
    let value = this.get("value0");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set value0(value: string) {
    this.set("value0", Value.fromString(value));
  }

  get traitType1(): string {
    let value = this.get("traitType1");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set traitType1(value: string) {
    this.set("traitType1", Value.fromString(value));
  }

  get value1(): string {
    let value = this.get("value1");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set value1(value: string) {
    this.set("value1", Value.fromString(value));
  }

  get traitType2(): string | null {
    let value = this.get("traitType2");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set traitType2(value: string | null) {
    if (!value) {
      this.unset("traitType2");
    } else {
      this.set("traitType2", Value.fromString(<string>value));
    }
  }

  get value2(): string | null {
    let value = this.get("value2");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set value2(value: string | null) {
    if (!value) {
      this.unset("value2");
    } else {
      this.set("value2", Value.fromString(<string>value));
    }
  }

  get traitType3(): string | null {
    let value = this.get("traitType3");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set traitType3(value: string | null) {
    if (!value) {
      this.unset("traitType3");
    } else {
      this.set("traitType3", Value.fromString(<string>value));
    }
  }

  get value3(): string | null {
    let value = this.get("value3");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set value3(value: string | null) {
    if (!value) {
      this.unset("value3");
    } else {
      this.set("value3", Value.fromString(<string>value));
    }
  }

  get traitType4(): string | null {
    let value = this.get("traitType4");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set traitType4(value: string | null) {
    if (!value) {
      this.unset("traitType4");
    } else {
      this.set("traitType4", Value.fromString(<string>value));
    }
  }

  get value4(): string | null {
    let value = this.get("value4");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set value4(value: string | null) {
    if (!value) {
      this.unset("value4");
    } else {
      this.set("value4", Value.fromString(<string>value));
    }
  }

  get traitType5(): string | null {
    let value = this.get("traitType5");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set traitType5(value: string | null) {
    if (!value) {
      this.unset("traitType5");
    } else {
      this.set("traitType5", Value.fromString(<string>value));
    }
  }

  get value5(): string | null {
    let value = this.get("value5");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set value5(value: string | null) {
    if (!value) {
      this.unset("value5");
    } else {
      this.set("value5", Value.fromString(<string>value));
    }
  }

  get traitType6(): string | null {
    let value = this.get("traitType6");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set traitType6(value: string | null) {
    if (!value) {
      this.unset("traitType6");
    } else {
      this.set("traitType6", Value.fromString(<string>value));
    }
  }

  get value6(): string | null {
    let value = this.get("value6");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set value6(value: string | null) {
    if (!value) {
      this.unset("value6");
    } else {
      this.set("value6", Value.fromString(<string>value));
    }
  }

  get traitType7(): string | null {
    let value = this.get("traitType7");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set traitType7(value: string | null) {
    if (!value) {
      this.unset("traitType7");
    } else {
      this.set("traitType7", Value.fromString(<string>value));
    }
  }

  get value7(): string | null {
    let value = this.get("value7");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set value7(value: string | null) {
    if (!value) {
      this.unset("value7");
    } else {
      this.set("value7", Value.fromString(<string>value));
    }
  }

  get traitType8(): string | null {
    let value = this.get("traitType8");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set traitType8(value: string | null) {
    if (!value) {
      this.unset("traitType8");
    } else {
      this.set("traitType8", Value.fromString(<string>value));
    }
  }

  get value8(): string | null {
    let value = this.get("value8");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set value8(value: string | null) {
    if (!value) {
      this.unset("value8");
    } else {
      this.set("value8", Value.fromString(<string>value));
    }
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static loadInBlock(id: string): User | null {
    return changetype<User | null>(store.get_in_block("User", id));
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): TokenLoader {
    return new TokenLoader("User", this.get("id")!.toString(), "tokens");
  }
}

export class TokenLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Token[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Token[]>(value);
  }
}
