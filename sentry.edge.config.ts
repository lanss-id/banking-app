import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4d946618f132e4cf75ada7ffcd45a90d@o4507716314136576.ingest.us.sentry.io/4507716316954624",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
