import { Vertex } from './Vertex';

export class Label {
    private weight: number;
    private parentVertext: Vertex | null;
    constructor(weight: number, parentVertext: Vertex | null) {
        this.weight = weight;
        this.parentVertext = parentVertext;
    }
    public getWeight() {
        return this.weight;
    }
    public setWeight(weight: number) {
        this.weight = weight;
    }
    public getParentVertex() {
        return this.parentVertext;
    }
    public setParentVertex(parentVertext: Vertex) {
        this.parentVertext = parentVertext;
    }
    public print() {
        console.log(`[Weight: ${this.weight}, Parent Vertex: ${this.parentVertext.getLabel()}]`);
    }
}