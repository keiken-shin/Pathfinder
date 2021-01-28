interface CustomNode {
  id: string,
  row: number,
  column: number,
  status: string,
  distance: number,
  previousNode: CustomNode | null
}

class Node {
  id: string;
  distance: number;
  previousNode: CustomNode | null;

  constructor(
    public row: number,
    public column: number,
    public status: string
  ){
    this.id = `${row}-${column}`;
    this.distance = 0;
    this.previousNode = null;
  }
}

export {
  Node,
  CustomNode
}