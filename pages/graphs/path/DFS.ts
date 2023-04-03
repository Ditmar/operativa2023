import { Vertex } from "../Vertex";

export class DFS {
    constructor() {
        
    }
    dfs(vertex: Vertex) {
        if (vertex.isVisited) {
            return;
        }
        console.log('--->' + vertex.getLabel());
        vertex.isVisited = true;
        vertex.neighbors.forEach(element => {
            this.dfs(element);
        });
    }
}