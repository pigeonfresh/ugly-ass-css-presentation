import AbstractBlock from "../AbstractBlock";

export default class InspectTips extends AbstractBlock {
  static displayName:string = 'inspect-tips';
  private static IS_ACTIVE: string = 'is-active';
  private interval: number = 3000;
  private box = this.getElement('.box');

  constructor(el:HTMLElement) {
    super(el);

    setInterval(() => {
      this.box.classList.contains(InspectTips.IS_ACTIVE)
        ? this.box.classList.remove(InspectTips.IS_ACTIVE)
        : this.box.classList.add(InspectTips.IS_ACTIVE);
    }, this.interval)


  }

  public dispose() {
    super.dispose();
  }
}
