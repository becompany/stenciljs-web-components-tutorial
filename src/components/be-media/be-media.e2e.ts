import { newE2EPage } from '@stencil/core/testing';

describe('be-media', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<be-media></be-media>');
    const element = await page.find('be-media');
    expect(element).toHaveClass('hydrated');
  });

  it('renders video element on video source', async () => {
    const page = await newE2EPage();

    await page.setContent('<be-media src="https://random.dog/8a57201a-d183-4978-a20c-ae8ecff21134.mp4"></be-media>');
    const element = await page.find('be-media video');
    expect(element).toBeTruthy();

  });
  it('renders img element on non video source', async () => {
    const page = await newE2EPage();

    await page.setContent('<be-media src="https://random.dog/8a57201a-d183-4978-a20c-ae8ecff21134.mp4"></be-media>');
    const element = await page.find('be-media video');
    expect(element).toBeTruthy();
  });
});
