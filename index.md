---
layout: homepage
description: Yichen You is a first-year Ph.D. student at Tsinghua University broadly interested in LLMs, including model architectures (esp. looped models), post-training (esp. RL), and long-horizon agents.
---

## About Me

<p class="profile-lead">I am <strong>Yichen You</strong>, a first-year Ph.D. student in E.E. at Tsinghua University. I am broadly interested in <strong>LLMs</strong>, including <strong>model architectures</strong> (esp. looped models), <strong>post-training</strong> (esp. RL), and <strong>long-horizon agents</strong>. I am currently an intern at <a href="https://www.deepseek.com/">DeepSeek</a>, focusing on RL for LLM.</p>

Outside research, I enjoy movies, badminton, and working out. [More about me →]({{ "/about/" | relative_url }})

{% include_relative _includes/education-experience.html %}

{% include_relative _includes/publications.md selected=true %}

<p class="section-link"><a href="{{ "/publications/" | relative_url }}">View all publications →</a></p>

## Selected Honors

<div class="honors-grid">
  <article class="honor-card">
    <span class="honor-year">2026</span>
    <h3>Outstanding Graduate (Top 5%)</h3>
    <p>Tsinghua University</p>
  </article>
  <article class="honor-card">
    <span class="honor-year">2025</span>
    <h3>Global 2nd Place</h3>
    <p><a href="https://www.kaggle.com/c/ai-mathematical-olympiad-progress-prize-2/leaderboard" target="_blank" rel="noopener">AI Mathematical Olympiad — Progress Prize 2</a>, among 2,212 teams</p>
  </article>
  <article class="honor-card">
    <span class="honor-year">2024</span>
    <h3>Dai Yusen Innovation Scholarship</h3>
    <p>Comprehensive Excellence</p>
  </article>
  <article class="honor-card">
    <span class="honor-year">2023</span>
    <h3>National Scholarship</h3>
    <p>Comprehensive Excellence</p>
  </article>
</div>

<p class="section-link"><a href="{{ "/honors/" | relative_url }}">View all honors →</a></p>

<section id="message" aria-labelledby="message-heading" tabindex="-1">
  <h2 id="message-heading">Leave a message</h2>

  {% assign form_id = site.formspree_form_id | default: "" %}
  {% if form_id != "" %}
  <p>Your message goes to my private inbox. Leave the name and email fields blank if you prefer to stay anonymous.</p>

  <form class="message-form" method="post" action="https://formspree.io/f/{{ form_id | url_encode }}">
    <div class="message-form__field">
      <label for="message-text">Message</label>
      <textarea id="message-text" name="message" rows="6" maxlength="5000" required></textarea>
    </div>

    <div class="message-form__field">
      <label for="message-name">Name <span class="message-form__optional">(optional)</span></label>
      <input id="message-name" name="name" type="text" autocomplete="name" maxlength="100">
    </div>

    <div class="message-form__field">
      <label for="message-email">Email for a reply <span class="message-form__optional">(optional)</span></label>
      <input id="message-email" name="email" type="email" autocomplete="email" maxlength="254">
    </div>

    <input type="text" name="_gotcha" autocomplete="off" tabindex="-1" hidden>
    <button type="submit">Send message</button>
  </form>
  {% else %}
  <p>The message form is currently unavailable.</p>
  {% endif %}
</section>
