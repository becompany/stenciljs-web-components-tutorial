import {Component, Prop, State} from '@stencil/core';

@Component({
  tag: 'be-cat',
  styleUrl: 'be-cat.css'
})

export class BeCat {

  @State() src: string = '';
  @Prop() class: string;

  refresh() {
    return fetch('https://aws.random.cat/meow')
      .then(response => {
        if (response.ok) {
          response.json().then(json => {
            this.src = json.file;
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
