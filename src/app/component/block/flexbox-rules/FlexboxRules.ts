import AbstractBlock from "../AbstractBlock";

export default class FlexboxRules extends AbstractBlock {
  static displayName:string = 'flexbox-rules';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
