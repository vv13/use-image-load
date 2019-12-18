class MockImage {
  private source: string;
  private ee: any;
  private loadCb: any;
  private errorCb: any;

  constructor() {
    this.source = '';
  }

  set onload(cb: any) {
    this.loadCb = cb;
  }

  set onerror(cb: any) {
    this.errorCb = cb;
  }

  set src(value: string) {
    this.source = value;
    if (value === 'success.png') {
      setTimeout(() => {
        if (this.loadCb) {
          this.loadCb();
        }
      }, 200);
    } else {
      setTimeout(() => {
        if (this.errorCb) {
          this.errorCb();
        }
      }, 200);
    }
  }

  get src() {
    return this.source;
  }
}

module.exports = MockImage;
