# Mock Interview Guide (For the Interviewer)

This is an e-commerce order management system for an eyewear company. The "backend" is in `src/data/api.ts` — mock data with async API functions.

## How to Run
```
npm run dev
```

## Interview Flow (30 min)

### Phase 1: Orientation (5 min)
Give the candidate 5 minutes to read through `src/data/api.ts`. Then ask:
- "Walk me through what data this backend has and how the entities relate to each other."
- "If I wanted to know which products are selling the best, which endpoint would I use?"

### Phase 2: Build Tasks (20 min)
Pick 2-3 of these. Have them create components in `src/components/`. Watch how they work — do they read the API first? Do they handle loading? Do they think about the user?

**Task A: Order Dashboard**
"Build a dashboard that shows all orders. Display the customer name (not just ID), order total, status, and date. Add a dropdown to filter by status."

Note: This requires them to fetch orders AND customers, then join the data on the frontend. The order only has customerId, not the name.

**Task B: Product Catalog with Reviews**
"Build a product catalog page. Show all products with their name, price, and stock status. When I click a product, show its reviews and analytics (total sold, avg rating)."

Note: Tests clicking to expand, fetching additional data on demand, displaying nested information.

**Task C: Customer Profile**
"I want to click a customer and see everything about them — their info, order history, total spent, and any reviews they've left. Build that."

Note: Requires multiple API calls and combining data from different endpoints.

**Task D: Update Order Status**
"Add the ability to change an order's status using a dropdown. The change should be reflected immediately in the UI."

Note: Tests calling a mutation endpoint and updating state. Watch if they handle the async update correctly.

### Phase 3: Product Thinking (5 min)
After they build something, ask:
- "What's missing from this data model that would help the business?"
- "If orders were growing 10x, what would you change about how this data is structured?"
- "A customer calls saying they never received their order. How would you use this system to help them?"

## What to Watch For
- Do they read the API before building? Or just start coding blindly?
- Do they handle loading states?
- Do they think about the user experience, not just getting data on screen?
- When stuck, do they talk through their thinking or freeze?
- Can they explain WHY they made a decision?
