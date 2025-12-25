# Setup Payments

We are using [Autumn](https://useautumn.com) for payments and usage tracking.

You can fetch documentation at [llms.txt](https://docs.useautumn.com/llms.txt). Explore the documentation if something is not explained below.

## Provider Setup
1. Wrap your app with the AutumnProvider in `src/web/components/provider.tsx`:

```tsx
import { AutumnProvider } from "autumn-js/react";
import { env } from "cloudflare:workers";
export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AutumnProvider betterAuthUrl={env.VITE_BASE_URL}>
      {children}
    </AutumnProvider>
  );
}
```

## Better Auth Integration
2. Add the autumn plugin to your Better Auth config in `src/api/auth.ts`:

```typescript
import { autumn } from "autumn-js/better-auth";

export const auth = betterAuth({
  // ... other config
  plugins: [
    autumn()
  ],
});
```

## Config
3. Add the following config at `autumn.config.ts` in the project root:

```typescript
import { feature, product, featureItem, pricedFeatureItem, priceItem } from "atmn";

// Define features
export const messages = feature({
  id: "messages",
  name: "Messages",
  type: "continuous_use",
});

// Define products/plans
export const freePlan = product({
  id: "free",
  name: "Free",
  is_default: true,
  items: [
    featureItem({
      feature_id: messages.id,
      included_usage: 100,
      interval: "month",
    }),
  ],
});

export const proPlan = product({
  id: "pro",
  name: "Pro",
  items: [
    priceItem({
      price: 200,
      interval: "month",
    }),
    pricedFeatureItem({
      feature_id: messages.id,
      price: 5,
      interval: "month",
      included_usage: 1000,
      billing_units: 100,
      usage_model: "pay_per_use",
    }),
  ],
});

export default {
  products: [freePlan, proPlan],
  features: [messages],
};
```

## Frontend Usage

### Access Customer Data
4. Use the `useCustomer` hook to access customer/subscription info:

```tsx
import { useCustomer } from "autumn-js/react";

function MyComponent() {
  const { customer } = useCustomer();
  console.log("Autumn customer:", customer);
  return <div>Welcome!</div>;
}
```

### Checkout Dialog
5. Use `checkout` with `CheckoutDialog` to let users purchase a plan:

```tsx
import { useCustomer, CheckoutDialog } from "autumn-js/react";

function PurchaseButton() {
  const { checkout } = useCustomer();

  return (
    <button
      onClick={async () => {
        await checkout({
          productId: "pro",
          dialog: CheckoutDialog,
        });
      }}
    >
      Select Pro Plan
    </button>
  );
}
```

## Backend Usage

### Check Feature Access
6. Use the Autumn SDK to check if a user has access to a feature:

```typescript
import { Autumn } from "autumn-js";

const autumn = new Autumn({
  secretKey: process.env.AUTUMN_SECRET_KEY,
});

const { data } = await autumn.check({
  customer_id: "user_id_from_auth",
  feature_id: "messages",
  required_balance: 1,
});

if (!data.allowed) {
  console.log("User has run out of messages");
  return;
}
```

### Track Usage
7. Use `autumn.track()` to record consumable usage (AI messages, credits, API calls):

```typescript
await autumn.track({
  customer_id: "user_id_from_auth",
  feature_id: "messages",
  value: 1,
});
```

You can send negative values to increase balance (e.g., when refunding or adjusting limits).

### Set Usage Directly
8. Use `autumn.usage()` for non-consumable features (seats, workspaces) where you want to set the absolute value:

```typescript
await autumn.usage({
  customer_id: "user_id_from_auth",
  feature_id: "seats",
  value: 3,
});
```

Note: This overwrites the current usage value rather than incrementing it.