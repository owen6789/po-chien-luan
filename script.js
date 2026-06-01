const data = window.siteData;

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = value;
  });
};

const iconPaths = {
  location: '<path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Z"></path><circle cx="12" cy="10" r="2.4"></circle>',
  mail: '<path d="M4 6h16v12H4z"></path><path d="m4 7 8 6 8-6"></path>',
  scholar: '<path d="m3 8 9-4 9 4-9 4-9-4Z"></path><path d="M7 10v5c1.4 1.2 3 1.8 5 1.8s3.6-.6 5-1.8v-5"></path>',
  linkedin: '<path d="M7 10v7"></path><path d="M7 7v.01"></path><path d="M11 17v-4a3 3 0 0 1 6 0v4"></path><path d="M11 10v7"></path>',
  github: '<path d="M9 19c-4 1.2-4-2-5-2.5"></path><path d="M15 22v-3.4c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6A4.6 4.6 0 0 0 18.7 7c.1-.3.5-1.7-.1-3.5 0 0-1.1-.3-3.6 1.3a12.3 12.3 0 0 0-6 0C6.5 3.2 5.4 3.5 5.4 3.5 4.8 5.3 5.2 6.7 5.3 7A4.6 4.6 0 0 0 4 10.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22"></path>',
  cv: '<path d="M7 3h7l4 4v14H7z"></path><path d="M14 3v5h5"></path><path d="M10 13h6"></path><path d="M10 17h6"></path>'
};

const makeLink = ({ label, url }) => {
  const link = document.createElement("a");
  link.href = url;
  link.textContent = label;
  if (!url.startsWith("mailto:") && !url.startsWith("#")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  return link;
};

const makeIconLink = ({ label, icon, url }) => {
  const link = makeLink({ label, url });
  link.className = `icon-link icon-link-${icon}`;
  link.setAttribute("aria-label", label);
  link.title = label;
  link.innerHTML = `
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
      ${iconPaths[icon] || iconPaths.mail}
    </svg>
    <span>${label}</span>
  `;
  return link;
};

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[char]);

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const formatAuthors = (authors) => {
  const escapedName = escapeHtml(data.profile.name);
  const namePattern = new RegExp(escapeRegExp(escapedName), "g");
  return escapeHtml(authors).replace(namePattern, `<strong>${escapedName}</strong>`);
};

const publicationMediaItem = (item, publication) => {
  const mediaShape = item.imageShape || publication.imageShape;
  const mediaClass = `publication-image ${mediaShape ? `publication-image-${mediaShape}` : ""}`;
  const title = item.label || publication.title;
  if (item.type === "video") {
    return `
      <video class="${mediaClass}" aria-label="${title}" autoplay muted loop playsinline preload="metadata">
        <source src="${item.src}" type="video/mp4">
      </video>
    `;
  }
  return `<img class="${mediaClass}" src="${item.src}" alt="${item.alt || `Thumbnail for ${publication.title}`}">`;
};

const publicationMedia = (publication) => {
  if (publication.media?.length) {
    return `
      <div class="publication-media-stack">
        ${publication.media.map((item) => publicationMediaItem(item, publication)).join("")}
      </div>
    `;
  }
  if (publication.video) {
    return publicationMediaItem({ type: "video", src: publication.video, label: `Video preview for ${publication.title}` }, publication);
  }
  return publicationMediaItem({ type: "image", src: publication.image, alt: `Thumbnail for ${publication.title}` }, publication);
};

const renderProfile = () => {
  document.title = `${data.profile.name} | Academic Website`;
  document.querySelectorAll("[data-field='profile.name']").forEach((node) => {
    node.textContent = data.profile.name;
  });
  setText("[data-field='profile.role']", data.profile.role);
  setText("[data-field='profile.kicker']", data.profile.kicker);
  setText("[data-field='profile.headline']", data.profile.headline);
  setText("[data-field='profile.contactText']", data.profile.contactText);
  setText("[data-field='profile.opportunityTitle']", data.profile.opportunityTitle);
  setText("[data-field='profile.opportunityText']", data.profile.opportunityText);

  const opportunityEmail = document.querySelector("#opportunity-email");
  if (opportunityEmail) {
    opportunityEmail.href = `mailto:${data.profile.email}`;
  }
  const opportunityLinkedIn = document.querySelector("#opportunity-linkedin");
  const linkedIn = data.profile.links.find((item) => item.label === "LinkedIn");
  if (opportunityLinkedIn && linkedIn) {
    opportunityLinkedIn.href = linkedIn.url;
    opportunityLinkedIn.target = "_blank";
    opportunityLinkedIn.rel = "noreferrer";
  }

  document.querySelectorAll("[data-field='profile.affiliation']").forEach((node) => {
    node.textContent = "";
    const affiliationText = document.createElement("span");
    affiliationText.textContent = data.profile.affiliation;
    node.append(affiliationText);

    if (data.profile.affiliationLogo) {
      const logo = document.createElement("img");
      logo.className = "epfl-logo";
      logo.src = data.profile.affiliationLogo;
      logo.alt = "EPFL logo";
      node.append(logo);
    }
  });

  const photo = document.querySelector("[data-field='profile.photo']");
  photo.src = data.profile.photo;
  photo.alt = `Portrait of ${data.profile.name}`;

  const meta = document.querySelector("#profile-meta");
  const baseMeta = [
    { label: "Location", value: data.profile.location, icon: "location" }
  ];
  [...baseMeta, ...data.profile.meta].forEach((item) => {
    const row = document.createElement("div");
    const term = document.createElement("dt");
    const definition = document.createElement("dd");
    if (item.icon) {
      const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.setAttribute("aria-hidden", "true");
      icon.setAttribute("viewBox", "0 0 24 24");
      icon.setAttribute("fill", "none");
      icon.setAttribute("stroke", "currentColor");
      icon.setAttribute("stroke-width", "1.9");
      icon.setAttribute("stroke-linecap", "round");
      icon.setAttribute("stroke-linejoin", "round");
      icon.innerHTML = iconPaths[item.icon] || "";
      term.append(icon);
    }
    const label = document.createElement("span");
    label.textContent = item.label;
    term.append(label);
    definition.textContent = item.value;
    row.append(term, definition);
    meta.append(row);
  });

  const links = document.querySelector("#profile-links");
  data.profile.links.forEach((item) => {
    links.append(makeIconLink(item));
  });
};

const renderBio = () => {
  const bio = document.querySelector("#bio-copy");
  data.bio.forEach((paragraph) => {
    const p = document.createElement("p");
    if (typeof paragraph === "string") {
      p.textContent = paragraph;
    } else {
      paragraph.segments.forEach((segment) => {
        if (typeof segment === "string") {
          p.append(document.createTextNode(segment));
        } else {
          p.append(makeLink(segment));
        }
      });
    }
    bio.append(p);
  });

  const interests = document.querySelector("#interest-list");
  data.interests.forEach((interest, index) => {
    const item = document.createElement("span");
    item.className = `interest-chip interest-chip-${index % 6}`;
    item.textContent = interest;
    interests.append(item);
  });
};

const renderNews = () => {
  const list = document.querySelector("#news-list");
  data.news.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="news-date">${item.date}</span><p>${item.text}</p>`;
    list.append(li);
  });
};

const publicationCard = (publication) => {
  const categories = publication.categories || [publication.category];
  const card = document.createElement("article");
  card.className = "publication-card";
  if (publication.imageShape) {
    card.classList.add(`publication-card-${publication.imageShape}`);
  }
  card.dataset.categories = categories.join("|");
  card.innerHTML = `
    <div class="publication-visual">
      ${publicationMedia(publication)}
      <div class="publication-links publication-links-visual"></div>
      <p class="summary summary-visual">${publication.summary}</p>
    </div>
    <div>
      <div class="publication-meta">
        <span class="venue">${publication.venue}</span>
        ${categories.map((category) => `<span class="tag tag-${slugify(category)}">${category}</span>`).join("")}
      </div>
      <h3>${publication.title}</h3>
      <p class="authors">${formatAuthors(publication.authors)}</p>
      ${publication.note ? `<p class="publication-note">${publication.note}</p>` : ""}
      <p class="summary summary-main">${publication.summary}</p>
      <div class="publication-links publication-links-main"></div>
    </div>
  `;

  const links = card.querySelector(publication.imageShape ? ".publication-links-visual" : ".publication-links-main");
  publication.links.forEach((item) => {
    const link = makeLink(item);
    link.className = `publication-link publication-link-${slugify(item.label)}`;
    links.append(link);
  });
  return card;
};

const renderPublications = () => {
  const filterRow = document.querySelector("#publication-filters");
  const list = document.querySelector("#publication-list");
  const scholar = data.profile.links.find((item) => item.label === "Google Scholar");
  const scholarLink = document.querySelector("#publication-scholar-link");

  if (scholar && scholarLink) {
    scholarLink.href = scholar.url;
    scholarLink.target = "_blank";
    scholarLink.rel = "noreferrer";
  } else {
    document.querySelector("#publication-scholar")?.setAttribute("hidden", "");
  }

  data.publicationFilters.forEach((filter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = filter;
    button.className = index === 0 ? "is-selected" : "";
      button.addEventListener("click", () => {
      filterRow.querySelectorAll("button").forEach((node) => node.classList.remove("is-selected"));
      button.classList.add("is-selected");
      list.querySelectorAll(".publication-card").forEach((card) => {
        const categories = card.dataset.categories.split("|");
        const visible = filter === "All" || categories.includes(filter);
        card.hidden = !visible;
      });
    });
    filterRow.append(button);
  });

  data.publications.forEach((publication) => {
    list.append(publicationCard(publication));
  });
};

const highlightNav = () => {
  const links = Array.from(document.querySelectorAll(".nav-links a"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-42% 0px -48% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
};

renderProfile();
renderBio();
renderNews();
renderPublications();
document.querySelector("#last-updated").textContent = data.lastUpdated;
highlightNav();
