import AbstractBlock from "../AbstractBlock";

export default class Done extends AbstractBlock {
  static displayName:string = 'done';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
