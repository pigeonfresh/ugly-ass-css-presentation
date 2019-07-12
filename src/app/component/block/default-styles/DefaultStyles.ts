import AbstractBlock from "../AbstractBlock";

export default class DefaultStyles extends AbstractBlock {
  static displayName:string = 'default-styles';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
