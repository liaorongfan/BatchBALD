export const style = `
d-byline {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  contain: content;
  font-size: 0.7rem;
  line-height: 1.5rem;
  padding: 1.5rem 0;
}

d-byline .byline {
  grid-template-columns: repeat(5, 1fr);
  grid-column: text-start / page-end;
}

d-byline h3 {
  font-size: 0.55rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
  text-transform: uppercase;
}

d-byline a,
d-article d-byline a {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  border-bottom: none;
}

d-article d-byline a:hover {
  text-decoration: underline;
  border-bottom: none;
}

d-byline .authors {
  font-weight: 600;
}
d-byline .affiliations {
}

`;


export function bylineTemplate(frontMatter) {
  return `
  <div class="byline grid">
    <div class="authors">
      <h3>Authors</h3>
      ${frontMatter.authors.map(author => `
        <div>
          ${author.personalURL
            ? `<a class="name" href="${author.personalURL}">${author.name}</a>`
            : `<div class="name">${author.name}</div>`
          }
        </div>
      `).join("")}
    </div>
    <div class="affiliations">
      <h3>Affiliations</h3>
      ${frontMatter.authors.map(author => `
        <div>
          ${author.affiliationURL
            ? `<a class="affiliation" href="${author.affiliationURL}">${author.affiliation}</a>`
            : `<div class="affiliation">${author.affiliation}</div>`
          }
        </div>
      `).join("")}
    </div>
    <div>
      <h3>Published</h3>
      <div>${frontMatter.publishedMonth}. ${frontMatter.publishedDay} ${frontMatter.publishedYear}</div>
    </div>
    <div>
      <h3>Cite as</h3>
      <div>${frontMatter.concatenatedAuthors}, ${frontMatter.publishedYear}</div>
    </div>
    <div>
      <h3>DOI</h3>
      <div>${frontMatter.doi}</div>
    </div>
  </div>
`;
}

export class Byline extends HTMLElement {

  static get is() { return 'd-byline'; }

  set frontMatter(frontMatter) {
    this.innerHTML = bylineTemplate(frontMatter);
  }

}
