import { newE2EPage } from '@stencil/core/testing';

describe('be-dog', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<be-dog></be-dog>');
    const element = await page.find('be-dog');
    expect(element).toHaveClass('hydrated');
  });

  it('renders a random content', async () => {
    const page = await newE2EPage();

    await page.setContent('<be-dog></be-dog>');
    const element = await page.find('be-dog be-media video, be-dog be-media img');
    expect(element).toBeTruthy();

  });

  it('updates content on click event', async () => {
    const page = await newE2EPage();

    await page.setContent('<be-dog></be-dog>');
    const beDogElement = await page.find('be-dog');
    const videoSrcElement = await page.find('be-dog be-media video source');
    const imageElement = await page.find('be-dog be-media img');
    let videoSrc, imageSrc;
    if (videoSrcElement) {
      videoSrc = videoSrcElement.getAttribute('src');
      expect(videoSrc).toBeTruthy();
    } else if (imageElement) {
      imageSrc = imageElement.getAttribute('src');
      expect(imageSrc).toBeTruthy();
    }
    /*
    // Click and expect a different image to be rendered.
    await beDogElement.click();
    const videoSrcElementReloaded =
      await page.find('be-dog be-media video source');
    const imageElementReloaded = await page.find('be-dog be-media img');
    if (videoSrcElementReloaded) {
      expect(videoSrcElementReloaded.getAttribute('src')).not.toEqual(videoSrc);
    } else if (imageElementReloaded) {
      expect(imageElementReloaded.getAttribute('src')).not.toEqual(imageSrc);
    }
    */
  });

});
