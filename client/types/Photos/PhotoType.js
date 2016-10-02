// @flow

class Photo {

  meta: {
    label: string
  }

  src: string

  constructor(label: string, src: string){
    this.meta = {
      label
    }
    this.src = src;
  }
}

export {Photo};
