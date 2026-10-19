/** Preload image URLs so they are cached before the invitation is shown. */
export function preloadImages(urls: string[]): Promise<void> {
  const unique = [...new Set(urls.filter(Boolean))];

  return Promise.all(
    unique.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.decoding = 'async';
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = url;
        }),
    ),
  ).then(() => undefined);
}

export const INVITATION_IMAGE_URLS = [
  '/WhatsApp Image 2026-10-16 at 20.40.02.jpeg',
  '/icon_arrive.jpg',
  '/icon_church.jpg',
  '/icon_eat.jpg',
  '/icon_dance.jpg',
] as const;
