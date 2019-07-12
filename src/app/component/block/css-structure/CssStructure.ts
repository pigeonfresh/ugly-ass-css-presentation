import AbstractBlock from "../AbstractBlock";

export default class CssStructure extends AbstractBlock {
  static displayName:string = 'css-structure';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
