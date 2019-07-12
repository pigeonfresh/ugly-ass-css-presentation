import AbstractBlock from "../AbstractBlock";

export default class Links extends AbstractBlock {
  static displayName:string = 'links';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
