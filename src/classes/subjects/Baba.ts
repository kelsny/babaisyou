import mappings from "../../mappings";
import { Entity } from "../base/Entity";

export class Baba extends Entity {
    constructor(x: number, y: number) {
        super("subject", "BABA", x, y, ...mappings.sprites.get("subject:BABA")!);
    }
}
