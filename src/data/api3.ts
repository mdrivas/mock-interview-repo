// Mock Backend API for an AI Writing Assistant Platform (similar to Ventrilo.ai)
// Internal dashboard for managing users, AI completions, and usage analytics

export type User = {
  id: string
  email: string
  username: string
  plan: "free" | "plus"
  creditsUsed: number
  creditsLimit: number // free = 50/day, plus = unlimited (-1)
  language: string
  createdAt: string
  lastActiveAt: string
}

export type Completion = {
  id: string
  userId: string
  prompt: string
  response: string
  model: "gpt-4o" | "claude-sonnet" | "gemini-pro"
  type: "autocomplete" | "draft" | "translate" | "chat"
  tokensUsed: number
  latencyMs: number
  rating: number | null // 1-5 user rating, null if not rated
  sourceContext: string // what tab/page the user was on
  createdAt: string
}

export type Session = {
  id: string
  userId: string
  startedAt: string
  endedAt: string
  completionsCount: number
  tabsOpen: number
}

export type FeedbackReport = {
  id: string
  userId: string
  completionId: string
  category: "hallucination" | "too_long" | "wrong_tone" | "off_topic" | "helpful" | "other"
  comment: string
  createdAt: string
}

// --- Mock Data ---

const users: User[] = [
  { id: "u1", email: "sarah@startup.io", username: "sarahcodes", plan: "plus", creditsUsed: 47, creditsLimit: -1, language: "en", createdAt: "2025-08-15", lastActiveAt: "2026-04-20" },
  { id: "u2", email: "james@university.edu", username: "jameswriting", plan: "free", creditsUsed: 48, creditsLimit: 50, language: "en", createdAt: "2026-01-10", lastActiveAt: "2026-04-20" },
  { id: "u3", email: "maria@consulting.com", username: "mariag", plan: "plus", creditsUsed: 120, creditsLimit: -1, language: "es", createdAt: "2025-11-20", lastActiveAt: "2026-04-19" },
  { id: "u4", email: "alex@freelance.dev", username: "alexdev", plan: "free", creditsUsed: 12, creditsLimit: 50, language: "en", createdAt: "2026-03-01", lastActiveAt: "2026-04-18" },
  { id: "u5", email: "yuki@company.jp", username: "yukisan", plan: "plus", creditsUsed: 89, creditsLimit: -1, language: "ja", createdAt: "2025-12-05", lastActiveAt: "2026-04-20" },
  { id: "u6", email: "tom@student.edu", username: "tomlearns", plan: "free", creditsUsed: 50, creditsLimit: 50, language: "en", createdAt: "2026-02-28", lastActiveAt: "2026-04-15" },
  { id: "u7", email: "lisa@agency.co", username: "lisawrites", plan: "plus", creditsUsed: 203, creditsLimit: -1, language: "en", createdAt: "2025-06-10", lastActiveAt: "2026-04-20" },
]

const completions: Completion[] = [
  { id: "c1", userId: "u1", prompt: "Help me write a follow-up email to the client about the project timeline", response: "Hi [Client], I wanted to follow up on our discussion about the project timeline. Based on our last meeting, we're on track to deliver the first milestone by...", model: "gpt-4o", type: "draft", tokensUsed: 245, latencyMs: 1200, rating: 5, sourceContext: "Gmail - Inbox", createdAt: "2026-04-20T09:30:00" },
  { id: "c2", userId: "u1", prompt: "autocomplete: Based on the Q1 metrics, our revenue grew by", response: "15% quarter-over-quarter, driven primarily by enterprise client acquisition and a 23% increase in average contract value.", model: "claude-sonnet", type: "autocomplete", tokensUsed: 42, latencyMs: 340, rating: null, sourceContext: "Google Docs - Q1 Report", createdAt: "2026-04-20T09:45:00" },
  { id: "c3", userId: "u2", prompt: "Summarize this research paper abstract about neural networks", response: "This paper presents a novel architecture for transformer-based models that reduces computational complexity from O(n²) to O(n log n) while maintaining comparable accuracy on standard NLP benchmarks...", model: "gpt-4o", type: "chat", tokensUsed: 380, latencyMs: 2100, rating: 4, sourceContext: "arxiv.org - Paper View", createdAt: "2026-04-20T10:00:00" },
  { id: "c4", userId: "u2", prompt: "Help me draft a cover letter for a software engineering internship", response: "Dear Hiring Manager, I am writing to express my strong interest in the Software Engineering Internship position at your company. As a third-year Computer Science student with hands-on experience in...", model: "gpt-4o", type: "draft", tokensUsed: 520, latencyMs: 2800, rating: 3, sourceContext: "LinkedIn - Job Posting", createdAt: "2026-04-19T14:20:00" },
  { id: "c5", userId: "u3", prompt: "Translate this proposal to Spanish", response: "Estimado equipo, Me complace presentar nuestra propuesta para el proyecto de transformación digital. Nuestro enfoque se centra en tres pilares fundamentales...", model: "gpt-4o", type: "translate", tokensUsed: 410, latencyMs: 1800, rating: 5, sourceContext: "Google Docs - Proposal Draft", createdAt: "2026-04-19T16:00:00" },
  { id: "c6", userId: "u4", prompt: "autocomplete: The function takes a callback parameter and", response: "returns a Promise that resolves when the callback completes. If the callback throws an error, the Promise is rejected with that error.", model: "claude-sonnet", type: "autocomplete", tokensUsed: 38, latencyMs: 280, rating: null, sourceContext: "VS Code - index.ts", createdAt: "2026-04-18T11:30:00" },
  { id: "c7", userId: "u5", prompt: "Draft a meeting agenda for the product review", response: "Product Review Meeting Agenda\n\n1. Q1 Performance Review (15 min)\n2. User Feedback Summary (10 min)\n3. Roadmap Priorities for Q2 (20 min)\n4. Engineering Resource Allocation (10 min)\n5. Action Items & Next Steps (5 min)", model: "claude-sonnet", type: "draft", tokensUsed: 156, latencyMs: 890, rating: 5, sourceContext: "Google Calendar - Meeting Details", createdAt: "2026-04-20T08:00:00" },
  { id: "c8", userId: "u1", prompt: "What does this error mean: TypeError: Cannot read properties of undefined", response: "This error occurs when you try to access a property on a variable that is `undefined`. Common causes include: accessing an object before it's initialized, misspelling a property name, or not handling null/undefined returns from API calls.", model: "gemini-pro", type: "chat", tokensUsed: 189, latencyMs: 950, rating: 4, sourceContext: "Chrome DevTools - Console", createdAt: "2026-04-20T10:15:00" },
  { id: "c9", userId: "u6", prompt: "Help me write an essay introduction about climate change", response: "Climate change represents one of the most pressing challenges facing humanity in the 21st century. While the scientific consensus on anthropogenic global warming has strengthened considerably over the past decades, the urgency of addressing its multifaceted impacts has never been more apparent. This essay explores the interconnected dimensions of climate change, from its environmental ramifications to the socioeconomic disparities it exacerbates, and evaluates the efficacy of current mitigation strategies in light of recent policy developments and technological innovations that promise to reshape our approach to sustainability.", model: "gpt-4o", type: "draft", tokensUsed: 780, latencyMs: 4200, rating: 2, sourceContext: "Google Docs - Essay Draft", createdAt: "2026-04-15T20:00:00" },
  { id: "c10", userId: "u7", prompt: "autocomplete: Our client engagement strategy focuses on", response: "building long-term partnerships through consistent communication, measurable deliverables, and proactive problem-solving.", model: "claude-sonnet", type: "autocomplete", tokensUsed: 35, latencyMs: 310, rating: null, sourceContext: "Notion - Strategy Doc", createdAt: "2026-04-20T11:00:00" },
  { id: "c11", userId: "u7", prompt: "Draft a LinkedIn post about our agency's new AI capabilities", response: "🚀 Exciting news! At [Agency], we're embracing AI to supercharge our creative process. Our team is now using AI-assisted tools to: ✅ Generate initial campaign concepts 3x faster ✅ Analyze competitor content at scale ✅ Personalize client deliverables...", model: "gpt-4o", type: "draft", tokensUsed: 340, latencyMs: 1600, rating: 4, sourceContext: "LinkedIn - Create Post", createdAt: "2026-04-20T11:30:00" },
  { id: "c12", userId: "u3", prompt: "autocomplete: El presupuesto del proyecto incluye", response: "los costos de desarrollo, implementación y capacitación del equipo, con un margen del 15% para contingencias.", model: "claude-sonnet", type: "autocomplete", tokensUsed: 45, latencyMs: 350, rating: null, sourceContext: "Google Sheets - Budget", createdAt: "2026-04-20T09:00:00" },
  { id: "c13", userId: "u2", prompt: "Explain polymorphism in object-oriented programming", response: "Polymorphism is a fundamental concept in OOP that allows objects of different classes to be treated as objects of a common parent class. There are two main types: compile-time (method overloading) and runtime (method overriding). For example, a Shape class might have a draw() method, and subclasses like Circle and Rectangle each implement their own version...", model: "gpt-4o", type: "chat", tokensUsed: 420, latencyMs: 2300, rating: 5, sourceContext: "Stack Overflow - Question Page", createdAt: "2026-04-18T16:45:00" },
  { id: "c14", userId: "u4", prompt: "autocomplete: The API endpoint accepts", response: "a JSON payload with the following required fields: userId (string), action (enum), and an optional metadata object for additional context.", model: "claude-sonnet", type: "autocomplete", tokensUsed: 40, latencyMs: 290, rating: null, sourceContext: "VS Code - api-docs.md", createdAt: "2026-04-18T11:45:00" },
  { id: "c15", userId: "u5", prompt: "Translate this meeting summary to Japanese", response: "会議の概要：Q1のパフォーマンスレビューでは、主要なKPIが目標を12%上回ったことが報告されました。次のステップとして、Q2のロードマップの優先順位を再評価する必要があります。", model: "gpt-4o", type: "translate", tokensUsed: 280, latencyMs: 1500, rating: 5, sourceContext: "Slack - #product-team", createdAt: "2026-04-19T15:00:00" },
  { id: "c16", userId: "u6", prompt: "Help me write a response to a discussion board post about AI ethics", response: "While AI offers tremendous potential for improving efficiency and decision-making across industries, the ethical implications of its deployment cannot be overlooked. The fundamental concern lies not in the technology itself, but in the frameworks — or lack thereof — governing its use. As we've seen with algorithmic bias in hiring tools and predictive policing systems, the consequences of unchecked AI deployment disproportionately affect marginalized communities. Therefore, it is imperative that we establish robust governance structures that prioritize transparency, accountability, and inclusivity in AI development.", model: "gpt-4o", type: "draft", tokensUsed: 650, latencyMs: 3800, rating: 1, sourceContext: "Canvas - Discussion Board", createdAt: "2026-04-14T21:00:00" },
]

const sessions: Session[] = [
  { id: "sess1", userId: "u1", startedAt: "2026-04-20T09:00:00", endedAt: "2026-04-20T12:00:00", completionsCount: 8, tabsOpen: 6 },
  { id: "sess2", userId: "u2", startedAt: "2026-04-20T09:30:00", endedAt: "2026-04-20T11:00:00", completionsCount: 3, tabsOpen: 4 },
  { id: "sess3", userId: "u3", startedAt: "2026-04-19T15:00:00", endedAt: "2026-04-19T17:30:00", completionsCount: 5, tabsOpen: 8 },
  { id: "sess4", userId: "u5", startedAt: "2026-04-20T07:00:00", endedAt: "2026-04-20T09:30:00", completionsCount: 4, tabsOpen: 5 },
  { id: "sess5", userId: "u7", startedAt: "2026-04-20T10:00:00", endedAt: "2026-04-20T13:00:00", completionsCount: 6, tabsOpen: 9 },
  { id: "sess6", userId: "u4", startedAt: "2026-04-18T10:00:00", endedAt: "2026-04-18T12:30:00", completionsCount: 3, tabsOpen: 3 },
  { id: "sess7", userId: "u6", startedAt: "2026-04-15T19:00:00", endedAt: "2026-04-15T21:30:00", completionsCount: 2, tabsOpen: 2 },
  { id: "sess8", userId: "u1", startedAt: "2026-04-19T14:00:00", endedAt: "2026-04-19T16:00:00", completionsCount: 5, tabsOpen: 7 },
  { id: "sess9", userId: "u2", startedAt: "2026-04-19T13:00:00", endedAt: "2026-04-19T15:00:00", completionsCount: 4, tabsOpen: 5 },
]

const feedbackReports: FeedbackReport[] = [
  { id: "f1", userId: "u2", completionId: "c4", category: "wrong_tone", comment: "Too formal for a startup cover letter", createdAt: "2026-04-19T14:25:00" },
  { id: "f2", userId: "u6", completionId: "c9", category: "too_long", comment: "I asked for an introduction, got a whole paragraph that's way too dense", createdAt: "2026-04-15T20:05:00" },
  { id: "f3", userId: "u6", completionId: "c16", category: "off_topic", comment: "I wanted to respond to the specific post, not write a general essay", createdAt: "2026-04-14T21:05:00" },
  { id: "f4", userId: "u1", completionId: "c1", category: "helpful", comment: "Perfect tone and structure", createdAt: "2026-04-20T09:35:00" },
  { id: "f5", userId: "u5", completionId: "c15", category: "helpful", comment: "Translation was natural and accurate", createdAt: "2026-04-19T15:05:00" },
  { id: "f6", userId: "u3", completionId: "c5", category: "helpful", comment: "Great translation, very professional", createdAt: "2026-04-19T16:05:00" },
]

// --- API Functions ---

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Users
export async function getUsers(): Promise<User[]> {
  await delay(400)
  return users
}

export async function getUserById(id: string): Promise<User | undefined> {
  await delay(200)
  return users.find(u => u.id === id)
}

// Completions
export async function getCompletions(): Promise<Completion[]> {
  await delay(500)
  return completions
}

export async function getCompletionsByUser(userId: string): Promise<Completion[]> {
  await delay(300)
  return completions.filter(c => c.userId === userId)
}

export async function getCompletionsByType(type: Completion["type"]): Promise<Completion[]> {
  await delay(300)
  return completions.filter(c => c.type === type)
}

// Sessions
export async function getSessions(): Promise<Session[]> {
  await delay(400)
  return sessions
}

export async function getSessionsByUser(userId: string): Promise<Session[]> {
  await delay(300)
  return sessions.filter(s => s.userId === userId)
}

// Feedback
export async function getFeedbackReports(): Promise<FeedbackReport[]> {
  await delay(400)
  return feedbackReports
}

export async function getFeedbackByCompletion(completionId: string): Promise<FeedbackReport[]> {
  await delay(200)
  return feedbackReports.filter(f => f.completionId === completionId)
}

// Analytics
export async function getUserAnalytics(userId: string): Promise<{
  totalCompletions: number
  totalTokens: number
  avgLatency: number
  avgRating: number
  completionsByType: Record<string, number>
  totalSessions: number
}> {
  await delay(400)
  const userCompletions = completions.filter(c => c.userId === userId)
  const ratedCompletions = userCompletions.filter(c => c.rating !== null)
  const userSessions = sessions.filter(s => s.userId === userId)

  const completionsByType: Record<string, number> = {}
  userCompletions.forEach(c => {
    completionsByType[c.type] = (completionsByType[c.type] || 0) + 1
  })

  return {
    totalCompletions: userCompletions.length,
    totalTokens: userCompletions.reduce((sum, c) => sum + c.tokensUsed, 0),
    avgLatency: userCompletions.length > 0
      ? Math.round(userCompletions.reduce((sum, c) => sum + c.latencyMs, 0) / userCompletions.length)
      : 0,
    avgRating: ratedCompletions.length > 0
      ? Math.round((ratedCompletions.reduce((sum, c) => sum + c.rating!, 0) / ratedCompletions.length) * 10) / 10
      : 0,
    completionsByType,
    totalSessions: userSessions.length,
  }
}

export async function getModelPerformance(): Promise<{
  model: string
  totalCompletions: number
  avgLatency: number
  avgTokens: number
  avgRating: number
}[]> {
  await delay(400)
  const models = ["gpt-4o", "claude-sonnet", "gemini-pro"] as const
  return models.map(model => {
    const modelCompletions = completions.filter(c => c.model === model)
    const rated = modelCompletions.filter(c => c.rating !== null)
    return {
      model,
      totalCompletions: modelCompletions.length,
      avgLatency: modelCompletions.length > 0
        ? Math.round(modelCompletions.reduce((sum, c) => sum + c.latencyMs, 0) / modelCompletions.length)
        : 0,
      avgTokens: modelCompletions.length > 0
        ? Math.round(modelCompletions.reduce((sum, c) => sum + c.tokensUsed, 0) / modelCompletions.length)
        : 0,
      avgRating: rated.length > 0
        ? Math.round((rated.reduce((sum, c) => sum + c.rating!, 0) / rated.length) * 10) / 10
        : 0,
    }
  })
}
