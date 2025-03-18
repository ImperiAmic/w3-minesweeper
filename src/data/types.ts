export type Cell = {
  hasMine: boolean;
  adjacentMinesTotal: number;
};

export type Board = {
  rowsTotal: number;
  columnsTotal: number;
};
