import { Vertex } from "./Vertex";

export class Edge {
    weight: number;
    constructor(private from: Vertex, private to: Vertex) {
        this.weight = 1;
    }

    setWeight(weight: number) {
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    getFrom() {
        return this.from;
    }
    getTo() {
        return this.to;
    }
}