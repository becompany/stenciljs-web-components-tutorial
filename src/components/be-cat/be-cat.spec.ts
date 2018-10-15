import { BeCat } from "./be-cat";

describe('be-cat', () => {

  it('builds', () => {
    expect(new BeCat()).toBeTruthy();
  });

  describe('refresh', () => {
    it('updates component state', () => {
      const component = new BeCat();
      expect(component.src).toBe('');
      component.refresh().then(() => expect(component.src).not.toBe(''));
    });
  });
});
