let React = require('react');
let { createDevTools } = require('redux-devtools');
// let LogMonitor = require('redux-devtools-log-monitor');
let { default: LogMonitor } = require('redux-devtools-log-monitor');
let { default: DockMonitor } = require('redux-devtools-dock-monitor');

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-j' defaultIsVisible={false}>
    <LogMonitor />
  </DockMonitor>
);

export default DevTools;
