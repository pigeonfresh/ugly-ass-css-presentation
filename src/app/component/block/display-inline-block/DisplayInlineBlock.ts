import AbstractBlock from "../AbstractBlock";

export default class DisplayInlineBlock extends AbstractBlock {
  static displayName:string = 'display-inline-block';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
