import AbstractBlock from "../AbstractBlock";

export default class Caniuse extends AbstractBlock {
  static displayName:string = 'caniuse';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
