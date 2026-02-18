const React = require('react');
console.log('React version:', React.version);
console.log('Exports:', Object.keys(React).filter(k => k.toLowerCase().includes('effect')));
