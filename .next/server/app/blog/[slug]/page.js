(()=>{var a={};a.id=953,a.ids=[953],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},19773:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>D.a,__next_app__:()=>J,handler:()=>L,pages:()=>I,routeModule:()=>K,tree:()=>H});var d=c(49754),e=c(9117),f=c(46595),g=c(32324),h=c(39326),i=c(38928),j=c(20175),k=c(12),l=c(54290),m=c(12696),n=c(82802),o=c(77533),p=c(45229),q=c(32822),r=c(261),s=c(26453),t=c(52474),u=c(26713),v=c(51356),w=c(62685),x=c(36225),y=c(63446),z=c(2762),A=c(45742),B=c(86439),C=c(81170),D=c.n(C),E=c(62506),F=c(91203),G={};for(let a in E)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(G[a]=()=>E[a]);c.d(b,G);let H={children:["",{children:["blog",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,63141)),"/Users/macintosh/01_Work_Space/04_Coding_HUB/mi-dit/app/blog/[slug]/page.tsx"]}]},{}]},{metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,46055))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(c.bind(c,27697)),"/Users/macintosh/01_Work_Space/04_Coding_HUB/mi-dit/app/layout.js"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,81170,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,87028,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,90461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,32768,23)),"next/dist/client/components/builtin/unauthorized.js"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,46055))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,I=["/Users/macintosh/01_Work_Space/04_Coding_HUB/mi-dit/app/blog/[slug]/page.tsx"],J={require:c,loadChunk:()=>Promise.resolve()},K=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/blog/[slug]/page",pathname:"/blog/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:H},distDir:".next",relativeProjectDir:""});async function L(a,b,d){var C;let G="/blog/[slug]/page";"/index"===G&&(G="/");let M=(0,h.getRequestMeta)(a,"postponed"),N=(0,h.getRequestMeta)(a,"minimalMode"),O=await K.prepare(a,b,{srcPage:G,multiZoneDraftMode:!1});if(!O)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:P,query:Q,params:R,parsedUrl:S,pageIsDynamic:T,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,serverActionsManifest:X,clientReferenceManifest:Y,subresourceIntegrityManifest:Z,prerenderManifest:$,isDraftMode:_,resolvedPathname:aa,revalidateOnlyGenerated:ab,routerServerContext:ac,nextConfig:ad,interceptionRoutePatterns:ae}=O,af=S.pathname||"/",ag=(0,r.normalizeAppPath)(G),{isOnDemandRevalidate:ah}=O,ai=K.match(af,$),aj=!!$.routes[aa],ak=!!(ai||aj||$.routes[ag]),al=a.headers["user-agent"]||"",am=(0,u.getBotType)(al),an=(0,p.isHtmlBotRequest)(a),ao=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[t.NEXT_ROUTER_PREFETCH_HEADER],ap=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[t.RSC_HEADER],aq=(0,s.getIsPossibleServerAction)(a),ar=(0,m.checkIsAppPPREnabled)(ad.experimental.ppr)&&(null==(C=$.routes[ag]??$.dynamicRoutes[ag])?void 0:C.renderingMode)==="PARTIALLY_STATIC",as=!1,at=!1,au=ar?M:void 0,av=ar&&ap&&!ao,aw=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),ax=!al||(0,p.shouldServeStreamingMetadata)(al,ad.htmlLimitedBots);an&&ar&&(ak=!1,ax=!1);let ay=!0===K.isDev||!ak||"string"==typeof M||av,az=an&&ar,aA=null;_||!ak||ay||aq||au||av||(aA=aa);let aB=aA;!aB&&K.isDev&&(aB=aa),K.isDev||_||!ak||!ap||av||(0,k.d)(a.headers);let aC={...E,tree:H,pages:I,GlobalError:D(),handler:L,routeModule:K,__next_app__:J};X&&Y&&(0,o.setReferenceManifestsSingleton)({page:G,clientReferenceManifest:Y,serverActionsManifest:X,serverModuleMap:(0,q.createServerModuleMap)({serverActionsManifest:X})});let aD=a.method||"GET",aE=(0,g.getTracer)(),aF=aE.getActiveScopeSpan();try{let f=K.getVaryHeader(aa,ae);b.setHeader("Vary",f);let k=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return K.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aE.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aD} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aD} ${a.url}`)})},m=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:Q,params:R,page:ag,sharedContext:{buildId:P},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aC,Component:(0,j.T)(aC),params:R,routeModule:K,page:G,postponed:f,shouldWaitOnAllReady:az,serveStreamingMetadata:ax,supportsDynamicResponse:"string"==typeof f||ay,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,subresourceIntegrityManifest:Z,serverActionsManifest:X,clientReferenceManifest:Y,setIsrStatus:null==ac?void 0:ac.setIsrStatus,dir:c(33873).join(process.cwd(),K.relativeProjectDir),isDraftMode:_,isRevalidate:ak&&!f&&!av,botType:am,isOnDemandRevalidate:ah,isPossibleServerAction:aq,assetPrefix:ad.assetPrefix,nextConfigOutput:ad.output,crossOrigin:ad.crossOrigin,trailingSlash:ad.trailingSlash,previewProps:$.preview,deploymentId:ad.deploymentId,enableTainting:ad.experimental.taint,htmlLimitedBots:ad.htmlLimitedBots,devtoolSegmentExplorer:ad.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ad.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ad.experimental.cacheLife,basePath:ad.basePath,serverActions:ad.experimental.serverActions,...as?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:as}:{},experimental:{isRoutePPREnabled:ar,expireTime:ad.expireTime,staleTimes:ad.experimental.staleTimes,cacheComponents:!!ad.experimental.cacheComponents,clientSegmentCache:!!ad.experimental.clientSegmentCache,dynamicOnHover:!!ad.experimental.dynamicOnHover,inlineCss:!!ad.experimental.inlineCss,authInterrupts:!!ad.experimental.authInterrupts,clientTraceMetadata:ad.experimental.clientTraceMetadata||[]},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>K.onRequestError(a,b,d,ac),err:(0,h.getRequestMeta)(a,"invokeError"),dev:K.isDev}},l=await k(e,i),{metadata:m}=l,{cacheControl:n,headers:o={},fetchTags:p}=m;if(p&&(o[y.NEXT_CACHE_TAGS_HEADER]=p),a.fetchMetrics=m.fetchMetrics,ak&&(null==n?void 0:n.revalidate)===0&&!K.isDev&&!ar){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${aa}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:v.CachedRouteKind.APP_PAGE,html:l,headers:o,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},o=async({hasResolved:c,previousCacheEntry:f,isRevalidating:g,span:i})=>{let j,k=!1===K.isDev,l=c||b.writableEnded;if(ah&&ab&&!f&&!N)return(null==ac?void 0:ac.render404)?await ac.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ai&&(j=(0,w.parseFallbackField)(ai.fallback)),j===w.FallbackMode.PRERENDER&&(0,u.isBot)(al)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),(null==f?void 0:f.isStale)===-1&&(ah=!0),ah&&(j!==w.FallbackMode.NOT_FOUND||f)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),!N&&j!==w.FallbackMode.BLOCKING_STATIC_RENDER&&aB&&!l&&!_&&T&&(k||!aj)){let b;if((k||ai)&&j===w.FallbackMode.NOT_FOUND)throw new B.NoFallbackError;if(ar&&!ap){let c="string"==typeof(null==ai?void 0:ai.fallback)?ai.fallback:k?ag:null;if(b=await K.handleResponse({cacheKey:c,req:a,nextConfig:ad,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:$,isRoutePPREnabled:ar,responseGenerator:async()=>m({span:i,postponed:void 0,fallbackRouteParams:k||at?(0,n.u)(ag):null}),waitUntil:d.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=ah||g||!au?void 0:au;if(as&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:v.CachedRouteKind.PAGES,html:x.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let p=T&&ar&&((0,h.getRequestMeta)(a,"renderFallbackShell")||at)?(0,n.u)(af):null;return m({span:i,postponed:o,fallbackRouteParams:p})},p=async c=>{var f,g,i,j,k;let l,n=await K.handleResponse({cacheKey:aA,responseGenerator:a=>o({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ah,isRoutePPREnabled:ar,req:a,nextConfig:ad,prerenderManifest:$,waitUntil:d.waitUntil});if(_&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),K.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!n){if(aA)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=n.value)?void 0:f.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=n.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof n.value.postponed;ak&&!av&&(!p||ao)&&(N||b.setHeader("x-nextjs-cache",ah?"REVALIDATED":n.isMiss?"MISS":n.isStale?"STALE":"HIT"),b.setHeader(t.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=n;if(au)l={revalidate:0,expire:void 0};else if(N&&ap&&!ao&&ar)l={revalidate:0,expire:void 0};else if(!K.isDev)if(_)l={revalidate:0,expire:void 0};else if(ak){if(n.cacheControl)if("number"==typeof n.cacheControl.revalidate){if(n.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${n.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:n.cacheControl.revalidate,expire:(null==(j=n.cacheControl)?void 0:j.expire)??ad.expireTime}}else l={revalidate:y.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(n.cacheControl=l,"string"==typeof aw&&(null==q?void 0:q.kind)===v.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=q.headers)?void 0:k[y.NEXT_CACHE_TAGS_HEADER];N&&ak&&c&&"string"==typeof c&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(aw);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(d,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...n,value:{...n.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&au)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(N&&ak||delete a[y.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let s=null==(g=q.headers)?void 0:g[y.NEXT_CACHE_TAGS_HEADER];if(N&&ak&&s&&"string"==typeof s&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,s),!q.status||ap&&ar||(b.statusCode=q.status),!N&&q.status&&F.RedirectStatusCode[q.status]&&ap&&(b.statusCode=200),p&&b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"1"),ap&&!_){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:q.html,cacheControl:av?{revalidate:0,expire:void 0}:n.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(q.rscData,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl})}let u=q.html;if(!p||N||ap)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:n.cacheControl});if(as)return u.push(new ReadableStream({start(a){a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}});let w=new TransformStream;return u.push(w.readable),m({span:c,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(w.writable)}).catch(a=>{w.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}})};if(!aF)return await aE.withPropagatedContext(a.headers,()=>aE.trace(i.BaseServerSpan.handleRequest,{spanName:`${aD} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aD,"http.target":a.url}},p));await p(aF)}catch(b){throw aF||b instanceof B.NoFallbackError||await K.onRequestError(a,b,{routerKind:"App Router",routePath:G,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ak,isOnDemandRevalidate:ah})},ac),b}}},25233:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(b,{getRedirectError:function(){return g},getRedirectStatusCodeFromError:function(){return l},getRedirectTypeFromError:function(){return k},getURLFromRedirectError:function(){return j},permanentRedirect:function(){return i},redirect:function(){return h}});let d=c(91203),e=c(92781),f=c(19121).actionAsyncStorage;function g(a,b,c){void 0===c&&(c=d.RedirectStatusCode.TemporaryRedirect);let f=Object.defineProperty(Error(e.REDIRECT_ERROR_CODE),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return f.digest=e.REDIRECT_ERROR_CODE+";"+b+";"+a+";"+c+";",f}function h(a,b){var c;throw null!=b||(b=(null==f||null==(c=f.getStore())?void 0:c.isAction)?e.RedirectType.push:e.RedirectType.replace),g(a,b,d.RedirectStatusCode.TemporaryRedirect)}function i(a,b){throw void 0===b&&(b=e.RedirectType.replace),g(a,b,d.RedirectStatusCode.PermanentRedirect)}function j(a){return(0,e.isRedirectError)(a)?a.digest.split(";").slice(2,-2).join(";"):null}function k(a){if(!(0,e.isRedirectError)(a))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return a.digest.split(";",2)[1]}function l(a){if(!(0,e.isRedirectError)(a))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return Number(a.digest.split(";").at(-2))}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},25799:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"unstable_rethrow",{enumerable:!0,get:function(){return function a(b){if((0,g.isNextRouterError)(b)||(0,f.isBailoutToCSRError)(b)||(0,i.isDynamicServerError)(b)||(0,h.isDynamicPostpone)(b)||(0,e.isPostpone)(b)||(0,d.isHangingPromiseRejectionError)(b))throw b;b instanceof Error&&"cause"in b&&a(b.cause)}}});let d=c(82831),e=c(43740),f=c(29305),g=c(61981),h=c(26906),i=c(69168);("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},28354:a=>{"use strict";a.exports=require("util")},29088:(a,b,c)=>{"use strict";function d(){throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E411",enumerable:!1,configurable:!0})}Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"unauthorized",{enumerable:!0,get:function(){return d}}),c(98541).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},50453:(a,b,c)=>{Promise.resolve().then(c.bind(c,64975)),Promise.resolve().then(c.bind(c,70561))},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},63141:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>i});var d=c(75338),e=c(70561),f=c(64975),g=c(93045);let h=[{slug:"smart-waste-management",title:"The Future of Smart Waste Management",author:"Alex Johnson",date:"June 15, 2023",views:"12K",timeAgo:"2 weeks ago",excerpt:"Exploring how IoT technology is transforming waste collection and management in modern cities.",content:`
      <h2>The Future of Smart Waste Management</h2>
      <p>Smart waste management is revolutionizing how cities handle their waste collection and processing systems. Through the integration of IoT sensors, real-time monitoring, and data analytics, cities can now optimize their waste management operations like never before.</p>
      
      <h3>Key Benefits</h3>
      <ul>
        <li>Reduced operational costs through optimized collection schedules</li>
        <li>Dynamic route planning based on real-time data</li>
        <li>Automated fill level monitoring and alerts</li>
        <li>Enhanced environmental sustainability</li>
        <li>Improved citizen satisfaction with waste services</li>
      </ul>
      
      <h3>Implementation Challenges</h3>
      <p>While the benefits are clear, implementing smart waste management systems comes with its own set of challenges:</p>
      <ul>
        <li>Initial infrastructure investment requirements</li>
        <li>Integration with existing waste management systems</li>
        <li>Staff training and adaptation to new technologies</li>
        <li>Data security and privacy considerations</li>
      </ul>
      
      <h3>Future Prospects</h3>
      <p>The future of waste management looks promising with emerging technologies like AI and machine learning further enhancing the capabilities of smart waste management systems. These advancements will lead to:</p>
      <ul>
        <li>Predictive analytics for waste generation patterns</li>
        <li>Automated waste sorting and recycling</li>
        <li>Integration with smart city platforms</li>
        <li>Enhanced citizen engagement through mobile apps</li>
      </ul>
      
      <h3>Success Stories</h3>
      <p>Cities worldwide are already seeing significant benefits from smart waste management implementation:</p>
      <ul>
        <li>Barcelona: 30% reduction in collection costs</li>
        <li>Singapore: 20% improvement in recycling rates</li>
        <li>Copenhagen: 80% decrease in overflow incidents</li>
      </ul>
    `},{slug:"iot-sensors-collection-costs",title:"5 Ways IoT Sensors Reduce Collection Costs",author:"Sarah Chen",date:"May 22, 2023",views:"8.5K",timeAgo:"1 month ago",excerpt:"Learn how smart sensors can help municipalities save up to 30% on waste collection operations.",content:`
      <h2>5 Ways IoT Sensors Reduce Collection Costs</h2>
      <p>IoT sensors are transforming waste collection operations, delivering significant cost savings through data-driven optimization. Here are the five key ways these smart sensors are making a difference:</p>
      
      <h3>1. Optimized Collection Routes</h3>
      <p>Smart sensors provide real-time fill level data, allowing for dynamic route optimization:</p>
      <ul>
        <li>Reduced fuel consumption by up to 30%</li>
        <li>Decreased vehicle wear and tear</li>
        <li>More efficient use of workforce hours</li>
      </ul>
      
      <h3>2. Predictive Maintenance</h3>
      <p>Sensors monitor equipment health and predict maintenance needs:</p>
      <ul>
        <li>Early detection of potential issues</li>
        <li>Reduced downtime and repair costs</li>
        <li>Extended equipment lifespan</li>
      </ul>
      
      <h3>3. Resource Allocation</h3>
      <p>Data-driven insights enable better resource management:</p>
      <ul>
        <li>Optimal fleet sizing</li>
        <li>Efficient staff scheduling</li>
        <li>Better container placement</li>
      </ul>
      
      <h3>4. Automated Monitoring</h3>
      <p>Continuous monitoring eliminates manual inspection needs:</p>
      <ul>
        <li>Reduced labor costs</li>
        <li>Immediate alert systems</li>
        <li>Prevention of overflow situations</li>
      </ul>
      
      <h3>5. Data Analytics</h3>
      <p>Advanced analytics drive continuous improvement:</p>
      <ul>
        <li>Pattern recognition for better planning</li>
        <li>Performance benchmarking</li>
        <li>ROI tracking and optimization</li>
      </ul>
    `},{slug:"smart-bins-barcelona",title:"Case Study: Smart Bins in Barcelona",author:"Miguel Rodriguez",date:"April 10, 2023",views:"24K",timeAgo:"2 months ago",excerpt:"How Barcelona implemented NodesIO technology to revolutionize their waste management system.",content:`
      <h2>Case Study: Smart Bins in Barcelona</h2>
      <p>Barcelona's implementation of NodesIO smart waste management technology has become a benchmark for cities worldwide. This case study explores their journey, challenges, and remarkable results.</p>
      
      <h3>Project Overview</h3>
      <p>Key implementation details:</p>
      <ul>
        <li>1,000+ smart bins deployed</li>
        <li>City-wide sensor network</li>
        <li>Integration with existing infrastructure</li>
        <li>Mobile app for citizens</li>
      </ul>
      
      <h3>Implementation Process</h3>
      <p>The rollout followed a systematic approach:</p>
      <ul>
        <li>Initial pilot in historic district</li>
        <li>Phased expansion across districts</li>
        <li>Staff training programs</li>
        <li>Public awareness campaign</li>
      </ul>
      
      <h3>Challenges Overcome</h3>
      <p>Several challenges were successfully addressed:</p>
      <ul>
        <li>Legacy system integration</li>
        <li>Network connectivity in dense urban areas</li>
        <li>Cultural adaptation to new technology</li>
        <li>Battery life optimization</li>
      </ul>
      
      <h3>Results and Benefits</h3>
      <p>The project delivered significant improvements:</p>
      <ul>
        <li>30% reduction in collection costs</li>
        <li>40% decrease in truck routes</li>
        <li>90% fewer overflow incidents</li>
        <li>25% increase in recycling rates</li>
      </ul>
      
      <h3>Future Plans</h3>
      <p>Barcelona continues to innovate:</p>
      <ul>
        <li>AI-powered predictive analytics</li>
        <li>Integration with smart city platform</li>
        <li>Expansion to commercial waste</li>
        <li>Citizen engagement features</li>
      </ul>
    `},{slug:"sustainability-through-technology",title:"Sustainability Through Technology",author:"Emma Wilson",date:"March 5, 2023",views:"15K",timeAgo:"3 months ago",excerpt:"The environmental impact of optimized waste collection routes and smart monitoring.",content:`
      <h2>Sustainability Through Technology</h2>
      <p>Smart waste management technology is not just about operational efficiency—it's a powerful tool for environmental sustainability. This article explores how technology is helping cities reduce their environmental impact.</p>
      
      <h3>Carbon Footprint Reduction</h3>
      <p>Smart routing and monitoring lead to:</p>
      <ul>
        <li>25-30% reduction in collection vehicle emissions</li>
        <li>Optimized fuel consumption</li>
        <li>Reduced traffic congestion</li>
        <li>Lower noise pollution</li>
      </ul>
      
      <h3>Recycling Optimization</h3>
      <p>Technology enhances recycling efforts through:</p>
      <ul>
        <li>Better sorting and contamination detection</li>
        <li>Real-time recycling rate monitoring</li>
        <li>Citizen education and feedback</li>
        <li>Incentive program tracking</li>
      </ul>
      
      <h3>Resource Conservation</h3>
      <p>Smart systems help conserve resources by:</p>
      <ul>
        <li>Minimizing unnecessary collections</li>
        <li>Reducing vehicle wear and tear</li>
        <li>Optimizing bin placement and capacity</li>
        <li>Preventing waste overflow</li>
      </ul>
      
      <h3>Environmental Monitoring</h3>
      <p>Advanced sensors provide:</p>
      <ul>
        <li>Air quality monitoring</li>
        <li>Leachate detection</li>
        <li>Temperature monitoring</li>
        <li>Hazardous waste alerts</li>
      </ul>
      
      <h3>Future Sustainability Goals</h3>
      <p>Looking ahead, technology will enable:</p>
      <ul>
        <li>Zero-emission collection vehicles</li>
        <li>Circular economy integration</li>
        <li>Advanced materials recovery</li>
        <li>Smart city sustainability metrics</li>
      </ul>
    `}];async function i({params:a}){let{slug:b}=await a,c=h.find(a=>a.slug===b);return c||(0,g.notFound)(),(0,d.jsxs)("div",{className:"flex flex-col min-h-screen bg-gray-50",children:[(0,d.jsx)(e.default,{}),(0,d.jsxs)("main",{className:"flex-grow",children:[(0,d.jsx)("section",{className:"w-full bg-green-500 py-24 px-4",children:(0,d.jsxs)("div",{className:"max-w-4xl mx-auto text-center",children:[(0,d.jsx)("h1",{className:"text-4xl md:text-5xl font-bold mb-6 text-white",children:c.title}),(0,d.jsxs)("div",{className:"flex items-center justify-center gap-6 text-white/90",children:[(0,d.jsxs)("div",{className:"flex items-center gap-2",children:[(0,d.jsx)("div",{className:"w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-lg",children:c.author.charAt(0)}),(0,d.jsx)("span",{children:c.author})]}),(0,d.jsx)("span",{children:"•"}),(0,d.jsx)("span",{children:c.timeAgo}),(0,d.jsx)("span",{children:"•"}),(0,d.jsxs)("span",{children:[c.views," views"]})]})]})}),(0,d.jsx)("section",{className:"w-full py-16 px-4",children:(0,d.jsx)("article",{className:"max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12",children:(0,d.jsx)("div",{className:"prose prose-lg md:prose-xl max-w-none",dangerouslySetInnerHTML:{__html:c.content}})})})]}),(0,d.jsx)(f.default,{})]})}},64021:(a,b,c)=>{Promise.resolve().then(c.bind(c,25337)),Promise.resolve().then(c.bind(c,62679))},64404:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"notFound",{enumerable:!0,get:function(){return e}});let d=""+c(98541).HTTP_ERROR_FALLBACK_ERROR_CODE+";404";function e(){let a=Object.defineProperty(Error(d),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});throw a.digest=d,a}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},64712:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"unstable_rethrow",{enumerable:!0,get:function(){return d}});let d=c(25799).unstable_rethrow;("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},64975:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(97954).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/macintosh/01_Work_Space/04_Coding_HUB/mi-dit/app/Components/page/Footer.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/macintosh/01_Work_Space/04_Coding_HUB/mi-dit/app/Components/page/Footer.tsx","default")},67837:(a,b,c)=>{"use strict";function d(){throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E488",enumerable:!1,configurable:!0})}Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"forbidden",{enumerable:!0,get:function(){return d}}),c(98541).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},70561:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(97954).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/macintosh/01_Work_Space/04_Coding_HUB/mi-dit/app/Components/page/Header.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/macintosh/01_Work_Space/04_Coding_HUB/mi-dit/app/Components/page/Header.tsx","default")},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},93045:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(b,{ReadonlyURLSearchParams:function(){return k},RedirectType:function(){return e.RedirectType},forbidden:function(){return g.forbidden},notFound:function(){return f.notFound},permanentRedirect:function(){return d.permanentRedirect},redirect:function(){return d.redirect},unauthorized:function(){return h.unauthorized},unstable_rethrow:function(){return i.unstable_rethrow}});let d=c(25233),e=c(92781),f=c(64404),g=c(67837),h=c(29088),i=c(64712);class j extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class k extends URLSearchParams{append(){throw new j}delete(){throw new j}set(){throw new j}sort(){throw new j}}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[331,650,991,115,357],()=>b(b.s=19773));module.exports=c})();