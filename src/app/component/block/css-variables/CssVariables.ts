import AbstractBlock from "../AbstractBlock";

export default class CssVariables extends AbstractBlock {
  static displayName:string = 'css-variables';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
