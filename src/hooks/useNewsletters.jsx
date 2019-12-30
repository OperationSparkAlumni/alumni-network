import { useState, useEffect } from 'react';

import newsletterData from '../mockedData/newsletters';

function useNewsletters () {
  const [ newsletters, setNewsletters ] = useState([]);

  useEffect(() => {
    setNewsletters(newsletterData);
  }, []);

  const expandNewsletter = (id) => {
    const updatedNewsletters = newsletters.map((newsletter) => {
      if (newsletter.id === id) newsletter.expanded = true;
      return newsletter;
    });
    setNewsletters(updatedNewsletters);
  }

  return [newsletters, expandNewsletter];
}

export default useNewsletters;
