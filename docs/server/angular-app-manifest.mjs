
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/EstudioJuridico/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/EstudioJuridico/home",
    "route": "/EstudioJuridico"
  },
  {
    "renderMode": 2,
    "route": "/EstudioJuridico/home"
  },
  {
    "renderMode": 2,
    "route": "/EstudioJuridico/quienes-somos"
  },
  {
    "renderMode": 2,
    "route": "/EstudioJuridico/areas-de-practica"
  },
  {
    "renderMode": 2,
    "route": "/EstudioJuridico/defensas-penales"
  },
  {
    "renderMode": 2,
    "route": "/EstudioJuridico/ubicacion"
  },
  {
    "renderMode": 2,
    "route": "/EstudioJuridico/contacto"
  },
  {
    "renderMode": 2,
    "redirectTo": "/EstudioJuridico/home",
    "route": "/EstudioJuridico/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5016, hash: 'f2cf0585c5c65e00cabbfc959e5f92bb183fc5052891c77b648d95a8bc8b7987', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1108, hash: '2067d408bfdfa8e0e7627379f573b75f000907bbd6c7d2c8379aef9bb630be5c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 48990, hash: 'fa27970ef9e95f4819dfba196de9e7c27e20f93926fcf1e92fbc1fe428ad7207', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'quienes-somos/index.html': {size: 31548, hash: '570c3fb4d88ee9a3b53250103abc978a970b82e6990624b7d87e4a555691a7f9', text: () => import('./assets-chunks/quienes-somos_index_html.mjs').then(m => m.default)},
    'ubicacion/index.html': {size: 29501, hash: '90c08c90ae83f57c1831604a338aaec663c67a35451cc0fa8f653e0ab25ff0d3', text: () => import('./assets-chunks/ubicacion_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 34967, hash: '4a3ce73782df4c589c8f54dc8d0c363bae4df3ee4f9e0a0b64535f4fe2d99e0a', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'areas-de-practica/index.html': {size: 30404, hash: 'fedfaa468adf1e33414828c75a791450ba73a5c9b18df79b97580d438a953638', text: () => import('./assets-chunks/areas-de-practica_index_html.mjs').then(m => m.default)},
    'defensas-penales/index.html': {size: 35340, hash: '8f84ed40d679aaa48c4f9d5c1c8f924b23b2838ece65cc30f2a7a5f7c5fd5f14', text: () => import('./assets-chunks/defensas-penales_index_html.mjs').then(m => m.default)},
    'styles-4M2DKYD4.css': {size: 231767, hash: 'j2VnVR/GmIQ', text: () => import('./assets-chunks/styles-4M2DKYD4_css.mjs').then(m => m.default)}
  },
};
