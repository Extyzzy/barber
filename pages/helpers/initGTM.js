export const initGTM = () => {
  if (window.gtmDidInit) {
    return false;
  }
  window.gtmDidInit = true;
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.onload = () => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: 'gtm.js',
      'gtm.start': new Date().getTime(),
      'gtm.uniqueEventId': 0,
    });

    window.dataLayer.push({
      original_location: `${document.location.protocol}//${document.location.hostname}${document.location.pathname}${document.location.search}`,
    });
  }; // this part ensures PageViews is always tracked
  script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-KZX9SCK6`;

  document.head.appendChild(script);

  return true;
};