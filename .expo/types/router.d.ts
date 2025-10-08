/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/analytics` | `/(tabs)/menu` | `/(tabs)/order` | `/(tabs)/order-history` | `/(tabs)/settings` | `/_sitemap` | `/analytics` | `/menu` | `/order` | `/order-history` | `/settings`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
