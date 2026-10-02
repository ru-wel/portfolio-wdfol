import { useEffect } from 'react';

const SITE = 'Reuel Christian Sundiam';
const DEFAULT_DESCRIPTION =
  'Portfolio of Reuel Christian Sundiam, a full-stack web developer building automations, LLM-powered tools and web apps with React, Node.js, PostgreSQL and n8n.';

// Every route used to share index.html's title, so tabs, history and search
// results all read the same. Pass a page name for "Page · Reuel Christian
// Sundiam", or nothing for the home title.
export const usePageTitle = (page, description = DEFAULT_DESCRIPTION) => {
  useEffect(() => {
    document.title = page
      ? `${page} · ${SITE}`
      : `${SITE}: full-stack developer, AI & automation`;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
  }, [page, description]);
};
