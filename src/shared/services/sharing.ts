/**
 * Graph sharing service.
 *
 * Sharing model:
 * - Owner on Free plan: shared links are read-only
 * - Owner on Pro plan: shared links allow editing
 * - All sharing is async (no real-time collaboration)
 * - CRDT sync handles merge conflicts silently
 * - No permissions granularity (all-or-nothing per link)
 * - No team/group concept
 * - No folder/category organization for graphs
 */

export interface ShareLink {
  graphId: string;
  token: string;
  mode: 'read_only' | 'editable';
  createdAt: Date;
  expiresAt?: Date;
}

export function createShareLink(
  graphId: string,
  ownerPlan: 'free' | 'pro'
): ShareLink {
  return {
    graphId,
    token: generateToken(),
    mode: ownerPlan === 'pro' ? 'editable' : 'read_only',
    createdAt: new Date(),
  };
}

function generateToken(): string {
  return Math.random().toString(36).substring(2, 15);
}
