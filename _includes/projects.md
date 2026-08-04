<div class="project-list">
{% for item in site.data.projects.main %}
  <article class="project-card">
    <div class="project-media">
      {% if item.image %}
      <button class="lightbox-trigger" type="button" data-lightbox-trigger data-lightbox-src="{{ item.full_image | default: item.image | relative_url }}" aria-label="Enlarge preview of {{ item.title }}" aria-haspopup="dialog">
        <img src="{{ item.image | relative_url }}" alt="Preview of {{ item.title }}" width="{{ item.image_width }}" height="{{ item.image_height }}" loading="lazy" decoding="async">
      </button>
      {% else %}
      <div class="project-visual" aria-hidden="true"><span>{{ item.visual }}</span></div>
      {% endif %}
      {% if item.tag %}<span class="project-tag">{{ item.tag }}</span>{% endif %}
    </div>
    <div class="project-content">
      <div class="project-kicker"><span>{{ item.year }}</span><span>{{ item.role }}</span></div>
      <h3>{{ item.title }}</h3>
      <p class="project-summary">{{ item.summary }}</p>
      {% if item.people %}<p class="project-people">{{ item.people }}</p>{% endif %}
      <p class="project-outcome">{{ item.outcome }}</p>
      <div class="action-links" aria-label="Links for {{ item.title }}">
        {% if item.demo %}<a href="{{ item.demo }}" target="_blank" rel="noopener">Demo</a>{% endif %}
        {% if item.code %}<a href="{{ item.code }}" target="_blank" rel="noopener">Code</a>{% endif %}
        {% if item.page %}<a href="{{ item.page }}" target="_blank" rel="noopener">Project</a>{% endif %}
      </div>
    </div>
  </article>
{% endfor %}
</div>
