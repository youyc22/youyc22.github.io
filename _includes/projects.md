<h2 id="projects" style="margin: 2px 0px -15px;">Selected Projects</h2>

<div class="publications">
<ol class="bibliography">

{% for item in site.data.projects.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if item.image %}
    <img src="{{ item.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% if item.conference_short %}
    <abbr class="badge">{{ item.conference_short }}</abbr>
    {% endif %}
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title">
        {% if item.demo %}
        <a href="{{ item.demo }}" target="_blank">{{ item.title }}</a>
        {% else %}
        {{ item.title }}
        {% endif %}
      </div>
      <div class="author">{{ item.authors }}</div>
      <div class="periodical"><em>{{ item.conference }}</em>
      </div>
    <div class="links">
      {% if item.demo %}
      <a href="{{ item.demo }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Demo</a>
      {% endif %}
      {% if item.code %}
      <a href="{{ item.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if item.page %}
      <a href="{{ item.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if item.notes %}
      <strong> <i style="color:#e74d3c">{{ item.notes }}</i></strong>
      {% endif %}
    </div>
  </div>
</div>
</li>
<br>

{% endfor %}

</ol>
</div>


