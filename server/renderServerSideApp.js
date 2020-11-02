const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const Helmet = require('react-helmet');
const Loadable = require('react-loadable');
const { getBundles } = require('react-loadable/webpack');

const App = require('../src/components/App');
const { fetchDataForRender } = require('./fetchDataForRender');
const { indexHtml } = require('./indexHtml');
const stats = require('../build/react-loadable.json');
const { ServerDataProvider } = require('../src/state/serverDataContext');

const ServerApp = ({ context, data, location }) => {
  return (
    <ServerDataProvider value={data}>
      <StaticRouter location={location} context={context}>
        <App />
      </StaticRouter>
    </ServerDataProvider>
  );
};

const renderServerSideApp = (req, res) => {
  Loadable.preloadAll()
    .then(() => fetchDataForRender(ServerApp, req))
    .then((data) => renderApp(ServerApp, data, req, res));
};

function renderApp(ServerApp, data, req, res) {
  const context = {};
  const modules = [];

  const markup = ReactDOMServer.renderToString(
    <Loadable.Capture report={(moduleName) => modules.push(moduleName)}>
      <ServerApp location={req.url} data={data} context={context} />
    </Loadable.Capture>
  );

  if (context.url) {
    res.redirect(context.url);
  } else {
    const fullMarkup = indexHtml({
      helmet: Helmet.renderStatic(),
      serverData: data,
      bundles: getBundles(stats, modules),
      markup,
    });

    res.status(200).send(fullMarkup);
  }
}

module.exports = { renderServerSideApp: renderServerSideApp };
