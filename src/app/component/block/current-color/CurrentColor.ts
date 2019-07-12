import AbstractBlock from "../AbstractBlock";

export default class CurrentColor extends AbstractBlock {
  static displayName:string = 'current-color';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
