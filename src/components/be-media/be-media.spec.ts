import { BeMedia } from "./be-media";

describe('be-media', () => {

  it('builds', () => {
    expect(new BeMedia()).toBeTruthy();
  });

  describe('isVideo', () => {
    it('return true when the src attribute is a mp4 video', () => {
      const component = new BeMedia();
      component.src = 'https://random.dog/8a57201a-d183-4978-a20c-ae8ecff21134.mp4';
      expect(component.isVideo()).toBe(true);
    });

    it('return false when the src attribute is not a mp4 video', () => {
      const component = new BeMedia();
      component.src = 'https://random.dog/21149-31365-11062.jpg';
      expect(component.isVideo()).toBe(false);
    });
  });
});
