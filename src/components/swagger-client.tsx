"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function SwaggerClient(props: {
  // biome-ignore lint/suspicious/noExplicitAny:
  spec: Record<string, any>;
}) {
  return <SwaggerUI spec={props.spec} />;
}