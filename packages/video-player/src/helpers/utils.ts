export function extensionToMimeType(filename: string) {
  const mimes = { mp4: 'video/mp4', ogv: 'video/ogg', webm: 'video/webm' };
  const ext = (filename.match(/\.([^.]*?)(?=\?|#|$)/) || [])[1];
  // @ts-ignore
  if (ext in mimes) return mimes[ext];

  return;
}

export function prepareVideoSources(source: any) {
  let sources: any;
  if (!source) {
    sources = [];
  } else if (source instanceof Array) {
    sources = source
      .map((item) => {
        const type = extensionToMimeType(item);
        return typeof type === 'undefined'
          ? { src: item }
          : { src: item, type };
      })
      .filter((item) => item);
  } else {
    const type = extensionToMimeType(source);
    sources =
      typeof type === 'undefined' ? [{ src: source }] : [{ src: source, type }];
  }
  return sources;
}

export function uid() {
  let firstPart: string | number = (Math.random() * 46656) | 0;
  let secondPart: string | number = (Math.random() * 46656) | 0;
  firstPart = ('000' + firstPart.toString(36)).slice(-3);
  secondPart = ('000' + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
}

export async function preloadImage(url: string) {
  return new Promise((resolve: any) => {
    if (url) {
      const image = new Image();
      image.addEventListener(
        'load',
        () => {
          resolve(image);
        },
        { once: true }
      );
      image.addEventListener(
        'error',
        () => {
          resolve();
        },
        { once: true }
      );
      image.src = url;
    } else {
      resolve();
    }
  });
}
