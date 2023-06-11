import { mount as mountMarketingApp } from "marketing/MarketingApp";
import React, { useEffect, useRef } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      mountMarketingApp(ref.current);
    }
  });

  return <div ref={ref} />;
};
