import AbstractBlock from "../AbstractBlock";

export default class BeforeAfter extends AbstractBlock {
  static displayName:string = 'before-after';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
