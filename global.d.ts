import en from "./_messages/en.json";

type Messages = typeof en;
declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}

declare module '*.svg' {
    import React = require('react')
  import React from "react";
  // export const ReactComponent: React.FC<React.SVGProps<SVGAElement>>
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}