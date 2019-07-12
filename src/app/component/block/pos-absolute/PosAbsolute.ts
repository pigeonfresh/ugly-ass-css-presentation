import AbstractBlock from "../AbstractBlock";

export default class PosAbsolute extends AbstractBlock {
  static displayName:string = 'pos-absolute';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
