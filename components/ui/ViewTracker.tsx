'use client';

import { useEffect } from 'react';
import { track } from '@/lib/analytics';

/** Fires a journal_view event once when an article mounts. */
export default function ViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    track('journal_view', { slug });
  }, [slug]);
  return null;
}
