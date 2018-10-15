import {Component, Prop, State} from '@stencil/core';

@Component({
  tag: 'be-dog',
  styleUrl: 'be-dog.css'
})

export class BeDog {

  @State() src: string = '';
  @Prop() class: string;

  refresh() {
    return fetch('https://random.dog/woof.json')
      .then(response => {
        if (response.ok) {
          response.json().then(json => {
            this.src = json.url;
          });
        }
      })
      .catch(error => console.error(error));
  }

  componentWillLoad() {
    if (this.src === '') {
      return this.refresh();
    }
  }

  render() {
    return <be-media onClick={() => this.refresh()} src={this.src} class={this.class}></be-media>;
  }
}
