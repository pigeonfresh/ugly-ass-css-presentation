import AbstractBlock from "../AbstractBlock";

export default class FlexboxCentering extends AbstractBlock {
  static displayName:string = 'flexbox-centering';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
