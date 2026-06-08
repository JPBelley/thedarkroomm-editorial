# Site Architecture — The Darkroomm

## Public routes

```
/                              Homepage
/presets                       Full catalog, filterable by category + tags
/presets/[slug]                Individual product page
/collections/[category]        Browse by category (cinematic, moody, urban, landscape, vintage…)
/creators                      All creators
/creators/[username]           Creator storefront + their products
/bundles                       Curated multi-pack deals
/bundles/[slug]                Individual bundle page
/search?q=                     Search results
```

## Buyer account

```
/account                       Profile + settings
/account/downloads             Purchased presets with download links
/account/orders                Order history
```

## Creator dashboard

```
/dashboard                     Overview, revenue, recent sales
/dashboard/products            All their listings
/dashboard/products/new        Upload a new pack
/dashboard/products/[id]       Edit existing pack
/dashboard/payouts             Stripe Connect earnings + payout history
/dashboard/profile             Edit their public creator page
```

## Auth

```
/login
/signup
/reset-password
```

## Data model — key entities

- **Creator** — user with seller role, public profile, connected Stripe account
- **Product** — individual preset pack, belongs to a creator, belongs to a category
- **Category** — broad grouping (Cinematic, Moody, Urban, Landscape, Vintage)
- **Tag** — specific attributes (film grain, teal & orange, golden hour, portrait, travel…)
- **Bundle** — curated set of multiple products at a combined price
- **Order** — purchase record linking a buyer to one or more products
- **License** — personal use vs. commercial use (build the field now even if you launch with one type)

## Product URL decision

Flat URLs: `/presets/[slug]` — not `/creators/[username]/[slug]`

Better for SEO, easier to share, creator is visible on the product page not in the URL.

## Notes

- Free presets should be a supported product type from day one (best acquisition tool)
- Tags + categories both needed: categories for browsing, tags for filtering within a category
- Download links are signed + time-limited URLs from Supabase Storage — never expose the raw file path
- Row-level security in Supabase handles data isolation between creators automatically
```
