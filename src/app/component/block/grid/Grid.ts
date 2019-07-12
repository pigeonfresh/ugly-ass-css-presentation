import AbstractBlock from "../AbstractBlock";

export default class Grid extends AbstractBlock {
  static displayName:string = 'grid';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
