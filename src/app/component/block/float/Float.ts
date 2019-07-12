import AbstractBlock from "../AbstractBlock";

export default class Float extends AbstractBlock {
  static displayName:string = 'float';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
