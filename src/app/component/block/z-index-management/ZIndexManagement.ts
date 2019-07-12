import AbstractBlock from "../AbstractBlock";

export default class ZIndexManagement extends AbstractBlock {
  static displayName:string = 'z-index-management';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
