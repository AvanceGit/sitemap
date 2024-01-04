import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SitemapComponent = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const response = await axios.get('/sitemap.xml');
        const text = response.data;

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');

        const extractedLinks = Array.from(xmlDoc.getElementsByTagName('loc')).map(node => node.textContent);
        setLinks(extractedLinks);
      } catch (error) {
        console.error('Error fetching sitemap:', error);
      }
    };

    fetchSitemap();
  }, []);
  return (
    <div>
      <h1>Sitemap Links</h1>
      <ul>

        {links.map((link, index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SitemapComponent;
