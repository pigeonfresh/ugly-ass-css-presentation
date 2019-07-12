import AbstractBlock from "../AbstractBlock";

export default class NiceDeclarations extends AbstractBlock {
  static displayName:string = 'nice-declarations';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
