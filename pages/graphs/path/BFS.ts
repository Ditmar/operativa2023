import { Vertex } from "../Vertex";

export class BFS {
    private vertex: Vertex;
    constructor(vertex: Vertex) {
        this.vertex = vertex;
    }
    bfs() {
        const queue: Vertex[] = [];
        queue.push(this.vertex);
        this.vertex.isVisited = true;
        while (queue.length > 0) {
            const current = queue.shift();
            if (!current) {
                return;
            }
            console.log(current.getLabel());
            current.neighbors.forEach((neighbor) => {
                if (!neighbor.isVisited) {
                    queue.push(neighbor);
                    neighbor.isVisited = true;
                }
            });
        }
    }
}