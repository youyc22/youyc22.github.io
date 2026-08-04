<h2 id="publications">Publications</h2>

<div class="publication-list">
{% for item in site.data.publications.main %}
  <article class="publication-card">
    {% if item.image %}
    <div class="publication-media">
      <button class="lightbox-trigger" type="button" data-lightbox-trigger data-lightbox-src="{{ item.full_image | default: item.image | relative_url }}" aria-label="Enlarge teaser for {{ item.title }}" aria-haspopup="dialog">
        <img src="{{ item.image | relative_url }}" alt="Teaser for {{ item.title }}" width="{{ item.image_width }}" height="{{ item.image_height }}" loading="lazy" decoding="async">
      </button>
      {% if item.conference_short %}<span class="publication-badge">{{ item.conference_short }}</span>{% endif %}
    </div>
    {% endif %}
    <div class="publication-content">
      <h3 class="publication-title"><a href="{{ item.pdf }}" target="_blank" rel="noopener">{{ item.title }}</a></h3>
      <p class="publication-authors">{{ item.authors }}</p>
      <p class="publication-venue">{{ item.conference }}</p>
      <div class="action-links" aria-label="Links for {{ item.title }}">
        {% if item.pdf %}<a href="{{ item.pdf }}" target="_blank" rel="noopener">Paper</a>{% endif %}
        {% if item.code %}<a href="{{ item.code }}" target="_blank" rel="noopener">Code</a>{% endif %}
        {% if item.demo %}<a href="{{ item.demo }}" target="_blank" rel="noopener">Project</a>{% endif %}
        {% if item.page %}<a href="{{ item.page }}" target="_blank" rel="noopener">Project</a>{% endif %}
        {% if item.bibtex %}<a href="{{ item.bibtex }}" target="_blank" rel="noopener">BibTeX</a>{% endif %}
      </div>
    </div>
  </article>
{% endfor %}
</div>

<p class="publication-note"><sup>†</sup> Equal contribution.</p>
