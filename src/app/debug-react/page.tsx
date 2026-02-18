"use client";

import React, { useEffect, useState } from 'react';

export default function DebugPage() {
  const [debugInfo, setDebugInfo] = useState<any>(null);

  useEffect(() => {
    // @ts-ignore
    const event = React.useEffectEvent;
    // @ts-ignore
    const expEvent = React.experimental_useEffectEvent;

    setDebugInfo({
      version: React.version,
      hasUseEffectEvent: typeof event,
      hasExperimentalUseEffectEvent: typeof expEvent,
      keys: Object.keys(React).filter(k => k.toLowerCase().includes('effect')),
    });
  }, []);

  if (!debugInfo) return <div>Loading...</div>;

  return (
    <div style={{ padding: 40, fontFamily: 'monospace' }}>
      <h1>React Runtime Debug</h1>
      <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
    </div>
  );
}
