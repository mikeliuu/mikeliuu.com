declare const window: Window & { dataLayer: Record<string, unknown>[] };

type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

type GtmEvent = {
  event: string;
} & Record<string, any>;

export const pageview = (url: string) => {
  window.dataLayer.push({
    event: "pageview",
    value: url,
  });
};

export const event = ({ event, ...params }: GtmEvent) => {
  window.dataLayer.push({
    event,
    ...params,
  });
};
