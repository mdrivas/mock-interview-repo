# Mock Interview Guide — Round 3: AI Writing Assistant (For Alex)

This simulates an internal dashboard for an AI-powered writing assistant (think Ventrilo.ai). The backend is in `src/data/api3.ts`. The candidate creates components in `src/components/`.

**Context to give the candidate:** "This is an internal analytics dashboard for our AI writing assistant. It's a browser extension that helps users write — autocomplete, drafting emails, translating, and chat. We need an admin tool to understand how users are using it and where the AI is falling short."

## Setup
```
npm run dev
```
Give the candidate 5 minutes to read `src/data/api3.ts`.

---

## Phase 1: Orientation (5 min)

1. "Walk me through the data model. What entities do we have and how are they connected?"
   - **Expected:** Users have completions (AI responses). Users have sessions. Completions can have feedback reports. Completions are linked to users and have metadata like model used, type, tokens, latency, and rating.

2. "If a user reports that the AI gave a bad response, how would you trace that through this data?"
   - **Expected:** Start with feedbackReports → find the completionId → look up the completion to see the prompt, response, model used, and context. Then check the user's other completions to see if it's a pattern.

---

## Phase 2: Build Tasks (25 min)

### Task A: User Activity Dashboard
> "Build a dashboard that shows all users with their username, plan, credits used, and last active date. When I click a user, show their completions history — what they asked, what the AI responded, which model was used, and their rating. Also show their usage analytics."

**What you're watching for:**
- Promise.all for fetching completions + analytics on click
- Displaying completion data cleanly (prompt, response, model, rating)
- Handling null ratings (some completions aren't rated)
- Filter by plan (free/plus)

### Task B: Write a Backend Endpoint — Quality Issues
> "We need to find completions where the AI might have performed poorly. Write a function called `getQualityIssues()` in api3.ts that returns completions that meet ANY of these criteria: rating of 1 or 2, latency over 3000ms, or has a negative feedback report (category is NOT 'helpful'). Include the user's email and the feedback comment if there is one."

**What you're watching for:**
- Can he write the backend logic? Cross-referencing completions with feedback reports
- Does he return enriched data (user email joined in, not just userId)?
- Does he handle the OR logic correctly (any of the three criteria)?
- Does he wire it to the frontend with a button?

### Task C: Model Comparison View (if time permits)
> "Our team wants to compare how different AI models perform. Build a view that shows each model's stats: total completions, average latency, average tokens used, and average rating. There's already an endpoint for this. Highlight the best-performing model in green and the worst in red."

**What you're watching for:**
- Uses getModelPerformance() endpoint
- Conditional styling based on comparing values
- Can he derive which is best/worst from the data?

---

## Phase 3: Product Thinking (5 min)

Pick 1-2:

1. "Free users get 50 credits per day. User 'tomlearns' has hit the limit and churned (hasn't been active in 5 days). What would you add to the data model to help us understand WHY free users churn and how to prevent it?"

2. "We're seeing that autocomplete responses have no ratings — users never rate them. How would you measure autocomplete quality without explicit ratings?"

3. "If completions with high latency (>3s) correlate with lower ratings, what would you suggest we change in the system? Think about both the data model and the product."

---

## What to Watch For
- Does he read the API before coding?
- Does he talk through his approach or go silent?
- Can he write backend logic that cross-references multiple data types?
- Does he use Promise.all for parallel fetches?
- Does he handle edge cases (null ratings, empty arrays)?
- Product instinct: can he connect data patterns to user behavior?
- When stuck, does he freeze or talk through his thinking?
