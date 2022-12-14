import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Uses react-router-dom to read hashes from url when footnote links are clicked
// Handles scrolling to the clicked reference
export default function useFootnoteRefs() {
  // current page url info from react-router-dom
  const { pathname, hash, key } = useLocation();

  // base url and path array
  const base_url = window.location.href.split("/#/")[0];
  const path = pathname.split("/");
  // current page
  const page = path[path.length - 1];

  useEffect(() => {
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // scrolls to footnote and gives it tab focus
        element.scrollIntoView();
        element.focus();
      }
    }, 0);
  // do this on route change
  }, [pathname, hash, key]);

  // Give the base_url and current page to the calling component
  return { base_url, page }
}