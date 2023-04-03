import { Edge } from "./Edge";

export class Vertex {
    neighbors: Vertex[];
    edges: Edge[];
    isVisited: boolean = false;
    constructor(private label: string) {
        this.neighbors = [];
        this.edges = [];
    }
    public getLabel() {
        return this.label;
    }
    public addNeighbor(vertex: Vertex, weight: number = 1, directed: boolean = false) {
        this.neighbors.push(vertex);
        if (!directed) {
            const edge1 = new Edge(vertex, this)
            edge1.setWeight(weight);
            this.edges.push(edge1);
            vertex.neighbors.push(this);
        }
        const edge = new Edge(this, vertex)
        edge.setWeight(weight);
        this.edges.push(edge);
    }
}