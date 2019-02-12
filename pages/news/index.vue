<template>
  <div class="container-fluid" style="padding-top: 6rem;">
    <div class="article__wrapper">
      <div class="article">
        <ul style="list-style-type: none;">
          <li class="article__item">Editor's Pick</li>
          <li class="article__item">Headline</li>
          <li class="article__item">National</li>
          <li class="article__item">Africa</li>
          <li class="article__item">International</li>
          <li class="article__item">Sport</li>
        </ul>
        <hr>
      </div>
      <div class="content-wrapper">
        <article class="row section_margin animate-box fadeInUp animated-fast">
          <div class="col-md-3 col-12 col-lg-3 animate-box fadeInUp animated-fast">
              <a href="single.html">
                <img src="/img/walta_posters.jpg" alt>
              </a>
          </div>
          <div class="col-md-9 col--12 col-lg-6 animate-box fadeInUp animated-fast">
            <h3 class="alith_post_title">
              <a href="/single_news">Magna aliqua ut enim ad minim veniam</a>
            </h3>
            <div class="post_meta">
              <a href="page-author.html" class="meta_author_avatar">
                <img src="assets/images/author-avatar.png" alt="author details">
              </a>
              <span class="meta_author_name">
                <a href="page-author.html" class="author">Steven Job</a>
              </span>
              <span class="meta_categories">
                <a href="archive.html">Politics</a>,
                <a href="archive.html">News</a>
              </span>
              <span class="meta_date">18 Sep, 2018</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
.article__wrapper {
  min-height: 52px;
  margin-bottom: 24px;
}
.article {
  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  font-size: 19px;
  color: #2e2e2f;
  background-color: #f3f3f3;
  border-bottom: 1px #000000;
  text-align: -webkit-center;
  border-bottom: 1px #a9a9a9;
}
@media (max-width: 599px) {
  .article li {
    display: inline-block;
  }
}
.article__item {
  flex: 1;
  text-align: center;
  font-weight: 900;
  font-size: 16px;
  padding: 16px 8px;
  /* text-transform: uppercase; */
  cursor: pointer;
}
</style>
