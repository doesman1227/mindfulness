/* ===========================================================
   MindShift — shared nav / footer / behaviors
   Injects header + footer into every page and wires interactions.
   Active top-level item is read from <body data-nav="about|methods|column|home">.
   =========================================================== */
(function () {
  // ---- practice list (used in nav + footer) ----
  var practices = {
    routine: [
      ["practice-breathing.html", "呼吸瞑想"],
      ["practice-bodyscan.html", "ボディスキャン"],
      ["practice-writing.html", "ライティング・セラピー"],
      ["practice-metaphor.html", "思考と距離をとるメタファー"]
    ],
    daily: [
      ["practice-walking.html", "歩行瞑想"],
      ["practice-senses.html", "五感瞑想"],
      ["practice-eating.html", "マインドフル・イーティング"],
      ["practice-listening.html", "マインドフル・リスニング"]
    ],
    rescue: [
      ["practice-stop.html", "STOPテクニック"],
      ["practice-rain.html", "RAINテクニック"],
      ["practice-breath33.html", "3×3ブリージング"],
      ["practice-square.html", "スクエアブレス"]
    ],
    habit: [
      ["methods.html#habit", "28日間チャレンジ"]
    ]
  };

  function ddLinks(arr) {
    return arr.map(function (p) {
      return '<a href="' + p[0] + '"><span class="mk"></span>' + p[1] + "</a>";
    }).join("");
  }

  var navHTML =
    '<header class="nav" id="nav"><div class="nav-inner">' +
    '<a class="brand" href="index.html"><span class="dot"><span></span></span>マインドフルネス<small> / まとめノート</small></a>' +
    '<nav class="nav-links" id="navlinks">' +

    // about (site entry)
    '<div class="nav-item has-dd" data-key="about"><a href="index.html">マインドフルネスとは</a>' +
      '<div class="dd-menu">' +
        '<a class="top" href="index.html">マインドフルネスとは TOP</a>' +
        '<a href="index.html#what"><span class="mk"></span>概要・定義</a>' +
        '<a href="index.html#why"><span class="mk"></span>いま、なぜ求められるのか</a>' +
        '<a href="index.html#benefits"><span class="mk"></span>得られる効果</a>' +
        '<a href="index.html#myth"><span class="mk"></span>誤解と真実</a>' +
        '<a href="index.html#facets"><span class="mk"></span>構成する5つの要素</a>' +
      '</div></div>' +

    // methods
    '<div class="nav-item has-dd" data-key="methods"><a href="methods.html">実践方法</a>' +
      '<div class="dd-menu">' +
        '<div class="dd-group"><a class="top" href="methods.html">実践方法まとめ</a></div>' +
        '<div class="dd-group"><div class="dd-title">落ち着いた時間に</div>' + ddLinks(practices.routine) + '</div>' +
        '<div class="dd-group"><div class="dd-title">日常のすき間に</div>' + ddLinks(practices.daily) + '</div>' +
        '<div class="dd-group"><div class="dd-title">その場で立て直す</div>' + ddLinks(practices.rescue) + '</div>' +
        '<div class="dd-group"><div class="dd-title">習慣にする</div>' + ddLinks(practices.habit) + '</div>' +
      '</div></div>' +

    // column
    '<div class="nav-item has-dd" data-key="column"><a href="column.html">コラム</a>' +
      '<div class="dd-menu">' +
        '<div class="dd-group"><a class="top" href="column.html">コラム一覧</a></div>' +
        '<div class="dd-group"><div class="dd-title">シリーズ｜ブッダ×マインドフルネス</div>' +
          '<a href="column-buddha.html"><span class="mk"></span>シリーズ目次（全4回）</a>' +
          '<a href="column-buddha-roots.html"><span class="mk"></span>Vol.1 ルーツ（サティ）</a>' +
          '<a href="column-buddha-satipatthana.html"><span class="mk"></span>Vol.2 四念処を実践に</a>' +
          '<a href="column-buddha-suffering.html"><span class="mk"></span>Vol.3 四聖諦とACT</a>' +
          '<a href="column-buddha-anatta.html"><span class="mk"></span>Vol.4 無常・無我</a></div>' +
        '<div class="dd-group"><div class="dd-title">考え方・理論</div>' +
          '<a href="column-act.html"><span class="mk"></span>ACT｜6つの行動原理</a>' +
          '<a href="column-therapies.html"><span class="mk"></span>SIY・ACT・DBT・CBT</a>' +
          '<a href="column-self-awareness.html"><span class="mk"></span>セルフアウェアネス</a></div>' +
        '<div class="dd-group"><div class="dd-title">エビデンス</div>' +
          '<a href="column-research.html"><span class="mk"></span>研究で報告されている効果</a></div>' +
        '<div class="dd-group"><div class="dd-title">心を扱うヒント</div>' +
          '<a href="column-self-acceptance.html"><span class="mk"></span>セルフアクセプタンス（自己受容）</a>' +
          '<a href="column-acceptance.html"><span class="mk"></span>自分を受け入れる4つのメタファー</a>' +
          '<a href="column-troubleshooting.html"><span class="mk"></span>うまくいかない時の対処</a></div>' +
      '</div></div>' +

    '<a class="nav-cta" href="methods.html">今日から始める</a>' +
    '</nav>' +
    '<button class="burger" id="burger" aria-label="メニュー"><span></span><span></span><span></span></button>' +
    '</div></header>';

  var footHTML =
    '<footer><div class="wrap">' +
      '<div class="foot-grid">' +
        '<div class="foot-brand"><div class="brand"><span class="dot"><span></span></span>マインドフルネス</div>' +
          '<p>マインドフルネスについて、専門家ではない個人が自分で調べたことを整理した学習用のまとめノートです。</p></div>' +
        '<div class="foot-col"><h4>マインドフルネスとは</h4>' +
          '<a href="index.html">とは・なにか</a><a href="index.html#why">なぜ求められるのか</a>' +
          '<a href="index.html#myth">誤解と真実</a><a href="index.html#facets">5つの要素</a></div>' +
        '<div class="foot-col"><h4>実践方法</h4>' +
          '<a href="methods.html">実践方法まとめ</a><a href="practice-breathing.html">呼吸瞑想</a>' +
          '<a href="practice-stop.html">STOP（その場で）</a><a href="methods.html#habit">28日間チャレンジ</a></div>' +
        '<div class="foot-col"><h4>コラム</h4>' +
          '<a href="column-act.html">ACTの6原理</a><a href="column-research.html">研究データ</a>' +
          '<a href="column-self-acceptance.html">セルフアクセプタンス</a><a href="column-troubleshooting.html">うまくいかない時</a></div>' +
      '</div>' +
      '<div class="foot-bottom">' +
        '<p class="foot-disc">このサイトは、医療や心理の専門家ではない個人が、マインドフルネス瞑想・ACT・セルフアクセプタンスについて自分で調べた情報を学習のために整理した個人的なまとめです。記載した数値や効果は研究やメタ分析の報告を引用したものですが、解釈に誤りが含まれる可能性があり、効果には個人差があります。診断・治療・医学的助言に代わるものではありません。心身の不調がある場合は、医療機関や専門家にご相談ください。</p>' +
        '<p class="foot-copy">© 2026 マインドフルネス ／ まとめノート</p>' +
      '</div>' +
    '</div></footer>';

  document.body.insertAdjacentHTML("afterbegin", navHTML);
  document.body.insertAdjacentHTML("beforeend", footHTML);

  // active top item
  var key = document.body.getAttribute("data-nav");
  if (key) {
    var active = document.querySelector('.nav-item[data-key="' + key + '"]');
    if (active) active.classList.add("active");
  }

  // scroll state
  var nav = document.getElementById("nav");
  window.addEventListener("scroll", function () {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  });

  // burger
  var burger = document.getElementById("burger");
  var links = document.getElementById("navlinks");
  burger.addEventListener("click", function () { links.classList.toggle("open"); });
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { links.classList.remove("open"); });
  });

  // tabs (if present)
  document.querySelectorAll(".tab-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".tab-btn").forEach(function (x) { x.classList.remove("active"); });
      document.querySelectorAll(".tab-panel").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active");
      document.getElementById(b.dataset.tab).classList.add("active");
    });
  });

  // reveal on scroll
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  // count up
  function animate(el) {
    var target = +el.dataset.count, suffix = el.dataset.suffix || "", t0 = performance.now(), dur = 1400;
    (function tick(now) {
      var p = Math.min((now - t0) / dur, 1), ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * ease) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }
  var co = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { animate(e.target); co.unobserve(e.target); } });
  }, { threshold: .6 });
  document.querySelectorAll("[data-count]").forEach(function (el) { co.observe(el); });
})();
