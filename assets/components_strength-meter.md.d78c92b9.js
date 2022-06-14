import{o as n,c as a,a as s}from"./app.6368408b.js";const t='{"title":"StrengthMeter","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"components/strength-meter.md","lastUpdated":1655169265648}',p={},e=[s('<h1 id="strengthmeter">StrengthMeter</h1><p>用于校验密码强度</p><h2 id="usage">Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-4 flex justify-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo-wrap p-10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>StrengthMeter</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>默认<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>StrengthMeter</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>禁用<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>StrengthMeter</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>隐藏input<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:show-input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!@#qwe12345<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> StrengthMeter <span class="token keyword">from</span> <span class="token string">&#39;/@/components/StrengthMeter/index&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n      StrengthMeter<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.demo-wrap</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="props">Props</h2><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>value</td><td><code>string</code></td><td>-</td><td>-</td><td>校验的值</td></tr><tr><td>showInput</td><td><code>boolean</code></td><td>true</td><td>-</td><td>是否显示 input</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>false</td><td>-</td><td>是否禁用</td></tr></tbody></table><h2 id="events">Events</h2><table><thead><tr><th>事件</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>score-change</td><td><code>number</code></td><td>强度值改变触发</td></tr><tr><td>change</td><td><code>string</code></td><td>input 值改变触发</td></tr></tbody></table>',8)];p.render=function(s,t,p,o,c,l){return n(),a("div",null,e)};export default p;export{t as __pageData};
