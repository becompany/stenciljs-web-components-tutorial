import { BeDog } from "./be-dog";

describe('be-dog', () => {

  it('builds', () => {
    expect(new BeDog()).toBeTruthy();
  });

  describe('refresh', () => {
    it('updates component state', () => {
      const component = new BeDog();
      expect(component.src).toBe('');
      component.refresh().then(() => expect(component.src).not.toBe(''));
    });
  });
});
