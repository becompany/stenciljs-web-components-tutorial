import { newE2EPage } from '@stencil/core/testing';

describe('be-cat', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<be-cat></be-cat>');
    const element = await page.find('be-cat');
    expect(element).toHaveClass('hydrated');
  });

  it('renders a random content', async () => {
    const page = await newE2EPage();

    await page.setContent('<be-cat></be-cat>');
    const element = await page.find('be-cat be-media video, be-cat be-media img');
    expect(element).toBeTruthy();

  });


  it('updates content on click event', async () => {
    const page = await newE2EPage();

    await page.setContent('<be-cat></be-cat>');
    const beDogElement = await page.find('be-cat');
    const videoSrcElement = await page.find('be-cat be-media video source');
    const imageElement = await page.find('be-cat be-media img');
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
    beDogElement.click().then( () => {
      const videoSrcElementReloaded =
        page.find('be-cat be-media video source');
      const imageElementReloaded = await page.find('be-cat be-media img');
      if (videoSrcElementReloaded) {
        expect(videoSrcElementReloaded.getAttribute('src')).not.toEqual(videoSrc);
      } else if (imageElementReloaded) {
        expect(imageElementReloaded.getAttribute('src')).not.toEqual(imageSrc);
      }
    });
    */
  });

});
