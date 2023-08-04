import Script from 'next/script';
import { UmamiProps } from '~types/AnalyticsTypes';

export default function UmamiAnalytics({ url, id, props }: UmamiProps) {
  return (
    <Script
      src={url}
      data-website-id={id}
      data-do-not-track="true"
      {...props}
    />
  );
}
