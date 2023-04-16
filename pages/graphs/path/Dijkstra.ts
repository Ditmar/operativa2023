import { Vertex } from '../Vertex';

export class Dijkstra {
    private source: Vertex;
    private graph: Vertex[];
    constructor(source: Vertex, graph: Vertex[]) {
        this.source = source;
        this.graph = graph;
    }
    public findShortestPath() {
        // Initialize the source vertex
        this.source.setRouteLabel(0, null);
        // permanent label
        this.source.setIsVisited(true);
        // todo mejorar optimizacion de codigo
        while (this.isAllVertexPermanent()) 
        {
            //todo create while method
            this.source.neighbors.forEach((neighbor) => {
                if (!neighbor.isVisited) {
                    let weight = this.source.getRouteLabel()?.getWeight() || 0;
                    weight += this.source.getWeight(neighbor).getWeight();
                    if (weight < neighbor.getRouteLabel()?.getWeight()) {
                        neighbor.setRouteLabel(weight, this.source);
                    }
                }   
            });
            let minWeight = Number.POSITIVE_INFINITY;
            let minVertex: Vertex | any  = null;
            // mejorar optimizacion de codigo con pilas
            this.graph.forEach((vertex) => {
                if (!vertex.isVisited && vertex.getRouteLabel()?.getWeight() < minWeight) {
                    minWeight = vertex.getRouteLabel()?.getWeight() || 0;
                    minVertex = vertex;
                }
            });
            if (minVertex !== null) {
                minVertex.setIsVisited(true);
                this.source = minVertex;
            }
        }
    }
    private isAllVertexPermanent() {
        for (let i = 0; i < this.graph.length; i++) {
            if (!this.graph[i].isVisited) {
                return true;
            }
        }
        return false;
    }
    public printRouteLabels() {
        this.graph.forEach((vertex) => {
            console.log(`[Vertex: ${vertex.getLabel()}, Weight: ${vertex.getRouteLabel()?.getWeight()}, Parent Vertex: ${vertex.getRouteLabel()?.getParentVertex()?.getLabel()}]`);
        });
    }
}