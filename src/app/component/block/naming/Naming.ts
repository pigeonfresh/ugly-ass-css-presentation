import AbstractBlock from "../AbstractBlock";

export default class Naming extends AbstractBlock {
  static displayName:string = 'naming';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
