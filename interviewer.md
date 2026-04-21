# Interview Questions (Interviewer Only — Do Not Share)

Reveal each phase **verbally**, one at a time. Do not show this document to the candidate.

---

## Phase 1: Orientation (5 min)

Hand them the repo and say:

> "Take 5 minutes to read through `src/data/api.ts`. Don't build anything yet — just get familiar."

After 5 minutes, ask:

1. "Walk me through what data this system has and how the entities relate to each other."
2. "If I wanted to know which products are selling the best, which endpoint would you use?"

**What you're watching for:**
- Does he read before touching the keyboard?
- Can he trace that `Order.customerId` links to a `Customer`? (This matters for Phase 2.)
- Does he find `getProductAnalytics()` or does he try to figure it out manually?

---

## Phase 2: Build Task — Order Dashboard (15 min)

Once orientation is done, say:

> "Now let's build something. Before you write any code — whiteboard or talk me through your approach first."

Then give the prompt:

> "Build a dashboard that lists all orders. I need to see the customer's **name** (not just their ID), the order total, status, and date. Add a dropdown to filter by status."

**Interviewer note:** There is no single endpoint that returns this — he has to call `getOrders()` AND `getCustomers()` and join the data on the frontend. Don't point this out. See if he catches it.

**Pseudocode to listen for (any order is fine):**
1. Fetch all orders + fetch all customers
2. Map each order to its customer name
3. Render the list
4. Add a filter dropdown that re-filters the in-memory data (no extra API call needed)

**What you're watching for:**
- Does he reach for `Promise.all` or does he waterfall the fetches?
- Does he handle loading state?
- Does he hardcode customer names or actually join the data?
- Does he filter in-memory or try to re-fetch on filter change?

---

## Phase 2b: Extend the Dashboard — Update Order Status (optional, 10 min)

Only attempt this if Phase 2 finishes with ~10 min left. Build on what he just made:

> "Now add the ability to change an order's status using a dropdown on each row. The change should be reflected immediately in the UI."

**Interviewer note:** This uses `updateOrderStatus(orderId, newStatus)`. Watch whether he updates state correctly after the async call resolves — a common mistake is mutating state directly or not waiting for the promise.

**What you're watching for:**
- Does he call the API and then update state, or skip the API call and just set state locally?
- Does he handle the in-flight loading state per row, or block the whole UI?
- Does the UI actually reflect the change without a page refresh?

---

## Phase 3: Product Thinking (5 min)

Wrap up with one or two of these — pick based on where the conversation naturally goes:

1. "A customer calls saying they never received their order. How would you use this system to help them?"
2. "What's missing from this data model that would hurt the business at scale?"
3. "If orders were growing 10x, what would you change about how the data is structured or fetched?"

**What you're watching for:**
- Can he zoom out from implementation to user impact?
- Does he spot real gaps (e.g., no shipping tracking, no address field, no timestamps on status changes)?
- Does he think about performance, or only correctness?

---

## Timing Guide

| Phase | Time | Hard stop? |
|---|---|---|
| Orientation | 5 min | Yes — cut it off, move on |
| Order Dashboard | 15 min | Soft — let him finish a thought |
| Update Status (optional) | 10 min | Skip if Phase 2 ran long |
| Product Thinking | 5 min | Yes — save at least 3 min for this |
