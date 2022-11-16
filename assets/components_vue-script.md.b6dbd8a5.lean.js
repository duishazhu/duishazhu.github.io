var n=Object.defineProperty,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,e=(t,s,a)=>s in t?n(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,o=(n,o)=>{for(var p in o||(o={}))s.call(o,p)&&e(n,p,o[p]);if(t)for(var p of t(o))a.call(o,p)&&e(n,p,o[p]);return n};import{V as p,r as c,o as u,c as l,e as i,w as k,b as r,d}from"./app.c4039454.js";var m={name:"component-doc",components:{"render-demo-0":function(){const{vModelText:n,createElementVNode:t,withDirectives:s,createTextVNode:a,resolveComponent:e,withCtx:c,createVNode:u,toDisplayString:l,openBlock:i,createElementBlock:k}=p,r=a("提交"),d={style:{"margin-top":"16px"}};const{ref:m,defineComponent:g}=p,y=g({name:"InputDemo",setup(){const n=m(),t=m();return{input:n,content:t,onSubmit:function(){t.value=n.value}}}});return o({render:function(a,o){const p=e("xl-button");return i(),k("div",null,[s(t("input",{class:"input",type:"text","onUpdate:modelValue":o[0]||(o[0]=n=>a.input=n)},null,512),[[n,a.input]]),u(p,{type:"primary",onClick:a.onSubmit},{default:c((()=>[r])),_:1},8,["onClick"]),t("div",d,"输出内容："+l(a.content),1)])}},y)}(),"render-demo-1":function(){const{vModelText:n,createElementVNode:t,withDirectives:s,createTextVNode:a,resolveComponent:e,withCtx:c,createVNode:u,toDisplayString:l,openBlock:i,createElementBlock:k}=p,r=a("提交"),d={style:{"margin-top":"16px"}};const{defineComponent:m}=p,{ref:g}=p,y=m({setup(n,{expose:t}){t();const s=g(),a=g();const e={input:s,content:a,onSubmit:function(){a.value=s.value},ref:g};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}});return o({render:function(a,o){const p=e("xl-button");return i(),k("div",null,[s(t("input",{class:"input",type:"text","onUpdate:modelValue":o[0]||(o[0]=n=>a.input=n)},null,512),[[n,a.input]]),u(p,{type:"primary",onClick:a.onSubmit},{default:c((()=>[r])),_:1},8,["onClick"]),t("div",d,"输出内容："+l(a.content),1)])}},y)}()}};const g='{"title":"Vue Script","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法"},{"level":2,"title":"Setup TypeScript 用法","slug":"setup-typescript-用法"}],"relativePath":"components/vue-script.md","lastUpdated":1653874511059}';const y=r("h1",{id:"vue-script"},"Vue Script",-1),v=r("h2",{id:"基础用法"},"基础用法",-1),f=r("p",null,"基础的按钮用法。",-1),b=r("div",null,[d("使用"),r("code",null,"type"),d("、"),r("code",null,"plain"),d("、"),r("code",null,"round"),d("和"),r("code",null,"circle"),d("属性来定义 Button 的样式。")],-1),x=r("div",{class:"language-vue"},[r("pre",null,[r("code",null,[r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("template")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("input")]),d(),r("span",{class:"token attr-name"},"class"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("input"),r("span",{class:"token punctuation"},'"')]),d(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("text"),r("span",{class:"token punctuation"},'"')]),d(),r("span",{class:"token attr-name"},"v-model"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("input"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},"/>")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("xl-button")]),d(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("primary"),r("span",{class:"token punctuation"},'"')]),d(),r("span",{class:"token attr-name"},"@click"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("onSubmit"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),d("提交"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("xl-button")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("div")]),d(),r("span",{class:"token special-attr"},[r("span",{class:"token attr-name"},"style"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),r("span",{class:"token value css language-css"},[r("span",{class:"token property"},"margin-top"),r("span",{class:"token punctuation"},":"),d(" 16px")]),r("span",{class:"token punctuation"},'"')])]),r("span",{class:"token punctuation"},">")]),d("输出内容：{{ content }}"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("div")]),r("span",{class:"token punctuation"},">")]),d("\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("template")]),r("span",{class:"token punctuation"},">")]),d("\n\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("script")]),r("span",{class:"token punctuation"},">")]),r("span",{class:"token script"},[r("span",{class:"token language-javascript"},[d("\n"),r("span",{class:"token keyword"},"import"),d(),r("span",{class:"token punctuation"},"{"),d(" ref"),r("span",{class:"token punctuation"},","),d(" defineComponent "),r("span",{class:"token punctuation"},"}"),d(),r("span",{class:"token keyword"},"from"),d(),r("span",{class:"token string"},"'vue'"),d("\n\n"),r("span",{class:"token keyword"},"export"),d(),r("span",{class:"token keyword"},"default"),d(),r("span",{class:"token function"},"defineComponent"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},"{"),d("\n  name"),r("span",{class:"token operator"},":"),d(),r("span",{class:"token string"},"'InputDemo'"),r("span",{class:"token punctuation"},","),d("\n  "),r("span",{class:"token function"},"setup"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},")"),d(),r("span",{class:"token punctuation"},"{"),d("\n    "),r("span",{class:"token keyword"},"const"),d(" input "),r("span",{class:"token operator"},"="),d(),r("span",{class:"token function"},"ref"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},")"),d("\n    "),r("span",{class:"token keyword"},"const"),d(" content "),r("span",{class:"token operator"},"="),d(),r("span",{class:"token function"},"ref"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},")"),d("\n\n    "),r("span",{class:"token keyword"},"function"),d(),r("span",{class:"token function"},"onSubmit"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},")"),d(),r("span",{class:"token punctuation"},"{"),d("\n      content"),r("span",{class:"token punctuation"},"."),d("value "),r("span",{class:"token operator"},"="),d(" input"),r("span",{class:"token punctuation"},"."),d("value\n    "),r("span",{class:"token punctuation"},"}"),d("\n\n    "),r("span",{class:"token keyword"},"return"),d(),r("span",{class:"token punctuation"},"{"),d(" input"),r("span",{class:"token punctuation"},","),d(" content"),r("span",{class:"token punctuation"},","),d(" onSubmit "),r("span",{class:"token punctuation"},"}"),d("\n  "),r("span",{class:"token punctuation"},"}"),d("\n"),r("span",{class:"token punctuation"},"}"),r("span",{class:"token punctuation"},")"),d("\n")])]),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("script")]),r("span",{class:"token punctuation"},">")]),d("\n\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("style")]),d(),r("span",{class:"token attr-name"},"lang"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("less"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),r("span",{class:"token style"},[r("span",{class:"token language-css"},[d("\n"),r("span",{class:"token selector"},".input"),d(),r("span",{class:"token punctuation"},"{"),d("\n  "),r("span",{class:"token property"},"border"),r("span",{class:"token punctuation"},":"),d(" 1px solid #ebebeb"),r("span",{class:"token punctuation"},";"),d("\n  "),r("span",{class:"token property"},"border-radius"),r("span",{class:"token punctuation"},":"),d(" 4px"),r("span",{class:"token punctuation"},";"),d("\n  "),r("span",{class:"token property"},"padding"),r("span",{class:"token punctuation"},":"),d(" 14px"),r("span",{class:"token punctuation"},";"),d("\n  "),r("span",{class:"token property"},"width"),r("span",{class:"token punctuation"},":"),d(" 300px"),r("span",{class:"token punctuation"},";"),d("\n  "),r("span",{class:"token property"},"font-size"),r("span",{class:"token punctuation"},":"),d(" 16px"),r("span",{class:"token punctuation"},";"),d("\n  "),r("span",{class:"token property"},"margin-right"),r("span",{class:"token punctuation"},":"),d(" 16px"),r("span",{class:"token punctuation"},";"),d("\n"),r("span",{class:"token punctuation"},"}"),d("\n")])]),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("style")]),r("span",{class:"token punctuation"},">")]),d("\n")])])],-1),w=r("h2",{id:"setup-typescript-用法"},"Setup TypeScript 用法",-1),S=r("p",null,"setup typescript 用法。",-1),h=r("div",null,[d("使用"),r("code",null,"type"),d("、"),r("code",null,"plain"),d("、"),r("code",null,"round"),d("和"),r("code",null,"circle"),d("属性来定义 Button 的样式。")],-1),C=r("div",{class:"language-vue"},[r("pre",null,[r("code",null,[r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("template")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("input")]),d(),r("span",{class:"token attr-name"},"class"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("input"),r("span",{class:"token punctuation"},'"')]),d(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("text"),r("span",{class:"token punctuation"},'"')]),d(),r("span",{class:"token attr-name"},"v-model"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("input"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},"/>")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("xl-button")]),d(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("primary"),r("span",{class:"token punctuation"},'"')]),d(),r("span",{class:"token attr-name"},"@click"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("onSubmit"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),d("提交"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("xl-button")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("div")]),d(),r("span",{class:"token special-attr"},[r("span",{class:"token attr-name"},"style"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),r("span",{class:"token value css language-css"},[r("span",{class:"token property"},"margin-top"),r("span",{class:"token punctuation"},":"),d(" 16px")]),r("span",{class:"token punctuation"},'"')])]),r("span",{class:"token punctuation"},">")]),d("输出内容：{{ content }}"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("div")]),r("span",{class:"token punctuation"},">")]),d("\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("template")]),r("span",{class:"token punctuation"},">")]),d("\n\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("script")]),d(),r("span",{class:"token attr-name"},"lang"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("ts"),r("span",{class:"token punctuation"},'"')]),d(),r("span",{class:"token attr-name"},"setup"),r("span",{class:"token punctuation"},">")]),r("span",{class:"token script"},[r("span",{class:"token language-javascript"},[d("\n"),r("span",{class:"token keyword"},"import"),d(),r("span",{class:"token punctuation"},"{"),d(" ref "),r("span",{class:"token punctuation"},"}"),d(),r("span",{class:"token keyword"},"from"),d(),r("span",{class:"token string"},"'vue'"),d("\n\n"),r("span",{class:"token keyword"},"interface"),d(),r("span",{class:"token class-name"},"IObject"),d(),r("span",{class:"token punctuation"},"{"),d("\n  "),r("span",{class:"token punctuation"},"["),d("k"),r("span",{class:"token operator"},":"),d(" string"),r("span",{class:"token punctuation"},"]"),r("span",{class:"token operator"},":"),d(" any\n"),r("span",{class:"token punctuation"},"}"),d("\n\n"),r("span",{class:"token keyword"},"const"),d(" input "),r("span",{class:"token operator"},"="),d(" ref"),r("span",{class:"token operator"},"<"),d("any"),r("span",{class:"token operator"},">"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},")"),d("\n"),r("span",{class:"token keyword"},"const"),d(" content "),r("span",{class:"token operator"},"="),d(" ref"),r("span",{class:"token operator"},"<"),d("any"),r("span",{class:"token operator"},">"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},")"),d("\n\n"),r("span",{class:"token keyword"},"function"),d(),r("span",{class:"token function"},"onSubmit"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},")"),d(),r("span",{class:"token punctuation"},"{"),d("\n  content"),r("span",{class:"token punctuation"},"."),d("value "),r("span",{class:"token operator"},"="),d(" input"),r("span",{class:"token punctuation"},"."),d("value\n"),r("span",{class:"token punctuation"},"}"),d("\n")])]),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("script")]),r("span",{class:"token punctuation"},">")]),d("\n\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("style")]),d(),r("span",{class:"token attr-name"},"lang"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("less"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),r("span",{class:"token style"},[r("span",{class:"token language-css"},[d("\n"),r("span",{class:"token selector"},".input"),d(),r("span",{class:"token punctuation"},"{"),d("\n  "),r("span",{class:"token property"},"border"),r("span",{class:"token punctuation"},":"),d(" 1px solid #ebebeb"),r("span",{class:"token punctuation"},";"),d("\n  "),r("span",{class:"token property"},"border-radius"),r("span",{class:"token punctuation"},":"),d(" 4px"),r("span",{class:"token punctuation"},";"),d("\n  "),r("span",{class:"token property"},"padding"),r("span",{class:"token punctuation"},":"),d(" 14px"),r("span",{class:"token punctuation"},";"),d("\n  "),r("span",{class:"token property"},"width"),r("span",{class:"token punctuation"},":"),d(" 300px"),r("span",{class:"token punctuation"},";"),d("\n  "),r("span",{class:"token property"},"font-size"),r("span",{class:"token punctuation"},":"),d(" 16px"),r("span",{class:"token punctuation"},";"),d("\n  "),r("span",{class:"token property"},"margin-right"),r("span",{class:"token punctuation"},":"),d(" 16px"),r("span",{class:"token punctuation"},";"),d("\n"),r("span",{class:"token punctuation"},"}"),d("\n")])]),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("style")]),r("span",{class:"token punctuation"},">")]),d("\n")])])],-1);m.render=function(n,t,s,a,e,o){const p=c("render-demo-0"),r=c("demo"),d=c("render-demo-1");return u(),l("div",null,[y,v,f,i(r,{sourceCode:'<template>\n  <input class="input" type="text" v-model="input"/>\n  <xl-button type="primary" @click="onSubmit">提交</xl-button>\n  <div style="margin-top: 16px">输出内容：{{ content }}</div>\n</template>\n\n<script>\nimport { ref, defineComponent } from \'vue\'\n\nexport default defineComponent({\n  name: \'InputDemo\',\n  setup() {\n    const input = ref()\n    const content = ref()\n\n    function onSubmit() {\n      content.value = input.value\n    }\n\n    return { input, content, onSubmit }\n  }\n})\n<\/script>\n\n<style lang="less">\n.input {\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  padding: 14px;\n  width: 300px;\n  font-size: 16px;\n  margin-right: 16px;\n}\n</style>\n'},{description:k((()=>[b])),highlight:k((()=>[x])),default:k((()=>[i(p)])),_:1}),w,S,i(r,{sourceCode:'<template>\n  <input class="input" type="text" v-model="input"/>\n  <xl-button type="primary" @click="onSubmit">提交</xl-button>\n  <div style="margin-top: 16px">输出内容：{{ content }}</div>\n</template>\n\n<script lang="ts" setup>\nimport { ref } from \'vue\'\n\ninterface IObject {\n  [k: string]: any\n}\n\nconst input = ref<any>()\nconst content = ref<any>()\n\nfunction onSubmit() {\n  content.value = input.value\n}\n<\/script>\n\n<style lang="less">\n.input {\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  padding: 14px;\n  width: 300px;\n  font-size: 16px;\n  margin-right: 16px;\n}\n</style>\n'},{description:k((()=>[h])),highlight:k((()=>[C])),default:k((()=>[i(d)])),_:1})])};export default m;export{g as __pageData};
