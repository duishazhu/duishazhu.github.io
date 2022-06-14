import{o as n,c as s,a}from"./app.6368408b.js";const t='{"title":"黑暗主题","description":"","frontmatter":{},"headers":[{"level":2,"title":"介绍","slug":"介绍"},{"level":2,"title":"原理","slug":"原理"},{"level":2,"title":"配置","slug":"配置"},{"level":2,"title":"切换","slug":"切换"}],"relativePath":"dep/dark.md","lastUpdated":1655170591889}',p={},o=[a('<h1 id="黑暗主题">黑暗主题</h1><h2 id="介绍">介绍</h2><p>项目已经内置了黑暗主题切换，只需配置自己需要的颜色变量，即可在项目中使用</p><h2 id="原理">原理</h2><p>通过 <a href="https://github.com/vbenjs/vite-plugin-theme" target="_blank" rel="noopener noreferrer">vite-plugin-theme</a> 插件，将所有的颜色变量抽取到独立的 css 文件，并且全部在 html 上面加上 css 选择器。通过改变 html 标签的 <code>data-theme</code> 属性来进行黑暗主题切换</p><h2 id="配置">配置</h2><p>黑暗主题颜色配置通过 <a href="https://github.com/vbenjs/vite-plugin-theme" target="_blank" rel="noopener noreferrer">vite-plugin-theme</a> 实现，具体代码在 <code>build/vite/plugin/theme</code></p><div class="language-ts"><pre><code><span class="token function">antdDarkThemePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  darkModifyVars<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span><span class="token function">generateModifyVars</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;text-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#c9d1d9&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;text-color-base&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#c9d1d9&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;component-background&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#151515&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;text-color-secondary&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#8b949e&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;border-color-base&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#303030&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;item-active-bg&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#111b26&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;app-content-background&#39;</span><span class="token operator">:</span> <span class="token string">&#39;rgb(255 255 255 / 4%)&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="切换">切换</h2><p>只需要使用 <a href="https://github.com/vbenjs/vite-plugin-theme" target="_blank" rel="noopener noreferrer">vite-plugin-theme</a> 提供的函数来进行切换即可</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> darkCssIsReady<span class="token punctuation">,</span> loadDarkThemeCss <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-theme/es/client&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">updateDarkTheme</span><span class="token punctuation">(</span>mode<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> htmlRoot <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;htmlRoot&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>mode <span class="token operator">===</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PROD</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>darkCssIsReady<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">await</span> <span class="token function">loadDarkThemeCss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    htmlRoot<span class="token operator">?.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-theme&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    htmlRoot<span class="token operator">?.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-theme&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',11)];p.render=function(a,t,p,e,c,l){return n(),s("div",null,o)};export default p;export{t as __pageData};
