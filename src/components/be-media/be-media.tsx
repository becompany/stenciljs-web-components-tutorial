import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'be-media',
  styleUrl: 'be-media.css'
})

export class BeMedia {

  @Prop() src: string;

  @Prop() class: string;

  isVideo() {
    if (this.src.endsWith('.mp4')) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    if (this.isVideo()) {
      return (
        <video class={this.class} autoPlay>
          <source src={this.src} type="video/mp4"/>
        </video>
      );
    } else {
      return (
        <img class={this.class} src={this.src}/>
      );
    }
  }
}
