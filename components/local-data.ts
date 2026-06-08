import { posts as defaultPosts } from './aeline-content'

export type BlogPost = {
  title: string
  date: string
  slug: string
  image: string
  text: string
}

export type Lead = {
  id: string
  name: string
  email: string
  company: string
  message: string
  createdAt: string
}

const POST_KEY = 'bravera_blog_posts'
const LEAD_KEY = 'bravera_contact_leads'

const isBrowser = typeof window !== 'undefined'

function safeParse<T>(value: string | null, fallback: T): T {
  try {
    return value ? (JSON.parse(value) as T) : fallback
  } catch {
    return fallback
  }
}

export function getStoredPosts(): BlogPost[] {
  if (!isBrowser) return defaultPosts
  const stored = safeParse<BlogPost[]>(window.localStorage.getItem(POST_KEY), [])
  return stored.length ? stored : defaultPosts
}

export function savePosts(posts: BlogPost[]) {
  if (!isBrowser) return
  window.localStorage.setItem(POST_KEY, JSON.stringify(posts))
}

export function getStoredLeads(): Lead[] {
  if (!isBrowser) return []
  return safeParse<Lead[]>(window.localStorage.getItem(LEAD_KEY), [])
}

export function saveLeads(leads: Lead[]) {
  if (!isBrowser) return
  window.localStorage.setItem(LEAD_KEY, JSON.stringify(leads))
}

export function addLead(lead: Omit<Lead, 'id' | 'createdAt'>) {
  if (!isBrowser) return
  const current = getStoredLeads()
  const next: Lead = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    ...lead,
  }
  const updated = [next, ...current]
  saveLeads(updated)
}
