import { Edge } from "./Edge";
import { Label } from "./Label";

export class Vertex {
    neighbors: Vertex[];
    edges: Edge[];
    isVisited: boolean = false;
    routeLabel: Label;
    weight: Record<string, Edge> = {};
    constructor(private label: string) {
        this.neighbors = [];
        this.edges = [];
        this.routeLabel = new Label(Number.POSITIVE_INFINITY, null);
    }

    public setIsVisited(isVisited: boolean) {
        this.isVisited = isVisited;
    }

    public getNeighbors() {
        return this.neighbors;
    }

    public getRouteLabel() {
        return this.routeLabel;
    }

    public getWeight(to: Vertex): Edge {
        return this.weight[`${this.getLabel()}_${to.getLabel()}`];
    }

    public setRouteLabel(weight: number, parentVertex: Vertex | null) {
        this.routeLabel = new Label(weight, parentVertex);
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
        this.weight[`${this.getLabel()}_${vertex.getLabel()}`] = edge;
    }
}