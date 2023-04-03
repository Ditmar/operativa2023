import { Edge } from "../Edge";
import { Vertex } from "../Vertex";

export class Prim {
    private initVertex: Vertex;
    // void
    private visited: Vertex[] = [];
    private unvisited: Vertex[] = [];
    constructor(v1: Vertex, graph: Vertex[]) {
        this.initVertex = v1;
        // n
        this.unvisited = graph;

    }
    private getMinimumEdge(): Vertex {
        let minEdge: Edge = new Edge(this.initVertex, this.initVertex);
        minEdge.setWeight(Infinity);
        let minVertex: Vertex = this.initVertex;
        this.visited.forEach(vertex => {
            vertex.edges.forEach(edge => {
                if (this.unvisited.includes(edge.getTo()) && edge.getWeight() < minEdge.getWeight()) {
                    minEdge = edge;
                    minVertex = edge.getTo();
                }
            });
        });
        return minVertex;

    }
    public prim() {
        //paso 1
        const result = new Vertex(this.initVertex.getLabel())

        this.visited.push(this.initVertex);
        this.unvisited = this.removeItem(this.initVertex);
        this.print();
        while (this.unvisited.length > 0) {
            //paso 2
            let vertex: Vertex = this.getMinimumEdge();
            //paso 3
            this.visited.push(vertex);
            this.unvisited = this.removeItem(vertex);
            this.print();
            //result.addNeighbor(vertex, minEdge.getWeight(), true);
        }
    }
    public getTree() {
        return this.resultTree;
    }
    private removeItem(vertex: Vertex) {
        return this.unvisited.filter(item => item.getLabel() !== vertex.getLabel());
    }
    private print() {
        let printString = '{';
        this.visited.forEach(vertex => {
            printString += `${vertex.getLabel()},`;
        });
        printString += '}';
        console.log(printString);
        let printString2 = '{';
        this.unvisited.forEach(vertex => {
            printString2 += `${vertex.getLabel()},`;
        });
        printString2 += '}';
        console.log(printString2);
    }
}