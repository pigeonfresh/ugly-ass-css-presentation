import AbstractBlock from "../AbstractBlock";

export default class Flexbox extends AbstractBlock {
  static displayName:string = 'flexbox';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
