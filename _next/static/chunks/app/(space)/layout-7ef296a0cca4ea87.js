(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2844],{1109:function(e,a,t){Promise.resolve().then(t.t.bind(t,10910,23)),Promise.resolve().then(t.t.bind(t,47705,23)),Promise.resolve().then(t.t.bind(t,79582,23)),Promise.resolve().then(t.t.bind(t,42045,23)),Promise.resolve().then(t.t.bind(t,89964,23)),Promise.resolve().then(t.t.bind(t,40063,23)),Promise.resolve().then(t.t.bind(t,61496,23)),Promise.resolve().then(t.t.bind(t,98457,23)),Promise.resolve().then(t.t.bind(t,42032,23)),Promise.resolve().then(t.t.bind(t,16229,23)),Promise.resolve().then(t.t.bind(t,58403,23)),Promise.resolve().then(t.t.bind(t,81291,23)),Promise.resolve().then(t.t.bind(t,365,23)),Promise.resolve().then(t.t.bind(t,60656,23)),Promise.resolve().then(t.bind(t,41278)),Promise.resolve().then(t.bind(t,71932)),Promise.resolve().then(t.bind(t,34779)),Promise.resolve().then(t.bind(t,61559)),Promise.resolve().then(t.t.bind(t,75745,23)),Promise.resolve().then(t.t.bind(t,57100,23)),Promise.resolve().then(t.t.bind(t,28547,23)),Promise.resolve().then(t.t.bind(t,53281,23)),Promise.resolve().then(t.t.bind(t,567,23)),Promise.resolve().then(t.t.bind(t,2138,23)),Promise.resolve().then(t.t.bind(t,71030,23)),Promise.resolve().then(t.bind(t,67752)),Promise.resolve().then(t.bind(t,52846)),Promise.resolve().then(t.bind(t,22824)),Promise.resolve().then(t.t.bind(t,187,23))},41278:function(e,a,t){"use strict";t.d(a,{ClientContexts:function(){return o}});var r=t(27573);t(7653);var s=t(7488),n=t(364);function o(e){let{children:a,language:t}=e;return(0,r.jsx)(s.Wh,{children:(0,r.jsx)(n.Xg.Provider,{value:t,children:a})})}},71932:function(e,a,t){"use strict";t.r(a),t.d(a,{Button:function(){return o}});var r=t(27573),s=t(71474),n=t(67752);function o(e){let{href:a,onClick:t,children:o,variant:i="primary",size:l="default",className:c}=e,u=(0,s.t)("rounded-md","straight-corners:rounded-none","place-self-start","ring-1","ring-inset","grow-0","shrink-0","primary"===i?["bg-primary-600","text-white","ring-dark/2","hover:bg-primary-500","dark:ring-light/3","dark:bg-primary-600","dark:hover:bg-primary-700"]:["bg-dark/2","ring-dark/1","hover:bg-dark/3","dark:bg-light/2","dark:ring-light/1","dark:hover:bg-light/3"],"default"===l?["text-base","px-4","py-2"]:["text-xs","px-3 py-2"],c);return a?(0,r.jsx)(n.Link,{href:a,className:u,children:o}):(0,r.jsx)("button",{onClick:t,className:u,children:o})}},34779:function(e,a,t){"use strict";t.r(a),t.d(a,{Checkbox:function(){return l}});var r=t(27573),s=t(16378),n=t(4037),o=t(7653),i=t(71474);let l=o.forwardRef((e,a)=>{let{className:t,...o}=e;return(0,r.jsxs)(n.fC,{ref:a,className:(0,i.t)("peer","h-4","w-4","shrink-0","rounded-sm","ring-1","bg-primary-300/1","ring-dark/3","ring-inset","grid","place-items-center","data-[state=checked]:bg-primary-300/6","[&>*:has(svg)]:absolute","dark:bg-primary-100/[0.02]","dark:ring-light/3","dark:data-[state=checked]:bg-primary-300/4",t),...o,children:[(0,r.jsx)(n.z$,{className:(0,i.t)("flex","items-center","justify-center","text-opacity-[1]","text-primary-800","grid-area-1-1","z-[1]","relative","dark:text-primary-200"),children:o.checked?(0,r.jsx)(s.JO,{icon:"check",className:"size-3"}):null}),(0,r.jsx)("div",{className:(0,i.t)("flex","items-center","justify-center","text-dark/4","grid-area-1-1","z-[0]","relative","dark:text-light/2"),children:o.checked?(0,r.jsx)(s.JO,{icon:"check",className:"size-3"}):null})]})});l.displayName=n.fC.displayName},61559:function(e,a,t){"use strict";t.r(a),t.d(a,{DateRelative:function(){return o}});var r=t(27573),s=t(7653),n=t(364);function o(e){let{value:a}=e,t=(0,n.ZK)(),[o,i]=s.useState(Date.now());s.useEffect(()=>{let e=setInterval(()=>{i(Date.now())},18e5);return()=>{clearInterval(e)}},[]);let l=new Date(a),c=o-l.getTime();return(0,r.jsx)("time",{"data-visual-test":"transparent",suppressHydrationWarning:!0,dateTime:a,title:l.toLocaleString(),children:function(e,a){if("undefined"==typeof Intl||void 0===Intl.RelativeTimeFormat)return"".concat(Math.floor(a/24/60/60/1e3)," days ago");let t=new Intl.RelativeTimeFormat(e,{style:"long"});return a<36e5?t.format(-Math.floor(a/60/1e3),"minute"):a<864e5?t.format(-Math.floor(a/60/60/1e3),"hour"):a<2592e6?t.format(-Math.floor(a/24/60/60/1e3),"day"):a<31536e6?t.format(-Math.floor(a/30/24/60/60/1e3),"month"):t.format(-Math.floor(a/365/24/60/60/1e3),"year")}(t.locale,c)})}},67752:function(e,a,t){"use strict";t.r(a),t.d(a,{Link:function(){return n}});var r=t(27573),s=t(87659);let n=t(7653).forwardRef(function(e,a){let{href:t,prefetch:n,children:o,...i}=e;return(URL.canParse?URL.canParse(e.href):e.href.startsWith("http"))?(0,r.jsx)("a",{ref:a,...i,href:t,children:o}):(0,r.jsx)(s.default,{ref:a,...e,children:o})})},364:function(e,a,t){"use strict";t.d(a,{Ff:function(){return s.F},Xg:function(){return n},ZK:function(){return o},t:function(){return s.t}});var r=t(7653),s=t(38155);let n=r.createContext(null);function o(){let e=r.useContext(n);if(!e)throw Error("The hook useLanguage should be wrapped in a <TranslateContext>");return e}},38155:function(e,a,t){"use strict";t.d(a,{F:function(){return o},t:function(){return n}});var r=t(27573),s=t(7653);function n(e,a){for(var t=arguments.length,n=Array(t>2?t-2:0),o=2;o<t;o++)n[o-2]=arguments[o];let i=e[a];if(!i)throw Error('Translation not found for "'.concat(a,'"'));let l=[],c=i;return(n.forEach((e,a)=>{if("string"==typeof e)c=c.replace("${".concat(a+1,"}"),e);else{let[t,n]=c.split("${".concat(a+1,"}"));l.push((0,r.jsx)(s.Fragment,{children:t},"string-".concat(a))),l.push((0,r.jsx)(s.Fragment,{children:e},"arg-".concat(a))),c=n}}),l.length)?(0,r.jsxs)(r.Fragment,{children:[l,c]}):c}function o(e,a){for(var t=arguments.length,r=Array(t>2?t-2:0),s=2;s<t;s++)r[s-2]=arguments[s];return function e(a){if("string"==typeof a||"number"==typeof a||"boolean"==typeof a)return"".concat(a);if(null==a)return"";if(Array.isArray(a))return a.map(e).join("");if("object"==typeof a&&"props"in a)return a.props.children.map(e).join("");throw Error("Unsupported type ".concat(typeof a))}(n(e,a,...r))}},71474:function(e,a,t){"use strict";t.d(a,{t:function(){return s}});var r=t(66290);function s(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,r.m6)(...a)}},71030:function(){},75745:function(){},187:function(){},40063:function(e){e.exports={style:{fontFamily:"'__Fira_Sans_Extra_Condensed_f2bddc', '__Fira_Sans_Extra_Condensed_Fallback_f2bddc', system-ui, arial",fontStyle:"normal"},className:"__className_f2bddc",variable:"__variable_f2bddc"}},89964:function(e){e.exports={style:{fontFamily:"'__IBM_Plex_Mono_e696c3', '__IBM_Plex_Mono_Fallback_e696c3', monospace",fontStyle:"normal"},className:"__className_e696c3",variable:"__variable_e696c3"}},61496:function(e){e.exports={style:{fontFamily:"'__IBM_Plex_Serif_dd3916', '__IBM_Plex_Serif_Fallback_dd3916', serif",fontStyle:"normal"},className:"__className_dd3916",variable:"__variable_dd3916"}},42045:function(e){e.exports={style:{fontFamily:"'__Inter_207ec3', '__Inter_Fallback_207ec3', system-ui, arial",fontStyle:"normal"},className:"__className_207ec3",variable:"__variable_207ec3"}},98457:function(e){e.exports={style:{fontFamily:"'__Lato_773cc9', '__Lato_Fallback_773cc9', system-ui, arial",fontStyle:"normal"},className:"__className_773cc9",variable:"__variable_773cc9"}},42032:function(e){e.exports={style:{fontFamily:"'__Merriweather_7fe153', '__Merriweather_Fallback_7fe153', serif",fontStyle:"normal"},className:"__className_7fe153",variable:"__variable_7fe153"}},57100:function(e){e.exports={style:{fontFamily:"'__Noto_Sans_893e56', '__Noto_Sans_Fallback_893e56', system-ui, arial",fontStyle:"normal"},className:"__className_893e56",variable:"__variable_893e56"}},16229:function(e){e.exports={style:{fontFamily:"'__Open_Sans_15c8df', '__Open_Sans_Fallback_15c8df', system-ui, arial",fontStyle:"normal"},className:"__className_15c8df",variable:"__variable_15c8df"}},28547:function(e){e.exports={style:{fontFamily:"'__Overpass_d4b0ae', '__Overpass_Fallback_d4b0ae', system-ui, arial",fontStyle:"normal"},className:"__className_d4b0ae",variable:"__variable_d4b0ae"}},58403:function(e){e.exports={style:{fontFamily:"'__Poppins_6e3f1b', '__Poppins_Fallback_6e3f1b', system-ui, arial",fontStyle:"normal"},className:"__className_6e3f1b",variable:"__variable_6e3f1b"}},53281:function(e){e.exports={style:{fontFamily:"'__Raleway_53a8f0', '__Raleway_Fallback_53a8f0', system-ui, arial",fontStyle:"normal"},className:"__className_53a8f0",variable:"__variable_53a8f0"}},81291:function(e){e.exports={style:{fontFamily:"'__Roboto_a48f64', '__Roboto_Fallback_a48f64', system-ui, arial",fontStyle:"normal"},className:"__className_a48f64",variable:"__variable_a48f64"}},567:function(e){e.exports={style:{fontFamily:"'__Roboto_Slab_ed5639', '__Roboto_Slab_Fallback_ed5639', system-ui, arial",fontStyle:"normal"},className:"__className_ed5639",variable:"__variable_ed5639"}},365:function(e){e.exports={style:{fontFamily:"'__Source_Sans_3_3171e4', '__Source_Sans_3_Fallback_3171e4', system-ui, arial",fontStyle:"normal"},className:"__className_3171e4",variable:"__variable_3171e4"}},2138:function(e){e.exports={style:{fontFamily:"'__Ubuntu_66dac0', '__Ubuntu_Fallback_66dac0', system-ui, arial",fontStyle:"normal"},className:"__className_66dac0",variable:"__variable_66dac0"}},79582:function(e){e.exports={style:{fontFamily:"'__cbdtFont_e782a9', '__cbdtFont_Fallback_e782a9'"},className:"__className_e782a9",variable:"__variable_e782a9"}},47705:function(e){e.exports={style:{fontFamily:"'__sbixFont_a7f53a', '__sbixFont_Fallback_a7f53a'"},className:"__className_a7f53a",variable:"__variable_a7f53a"}},10910:function(e){e.exports={style:{fontFamily:"'__svgFont_274faa', '__svgFont_Fallback_274faa'"},className:"__className_274faa",variable:"__variable_274faa"}},60656:function(e){e.exports={style:{fontFamily:"'__abcFavorit_38d951', '__abcFavorit_Fallback_38d951', system-ui, arial"},className:"__className_38d951",variable:"__variable_38d951"}},52846:function(e,a,t){"use strict";t.r(a),t.d(a,{Icon:function(){return i}});var r=t(7653),s=JSON.parse('{"brands":["monero","hooli","yelp","cc-visa","lastfm","shopware","creative-commons-nc","aws","redhat","yoast","cloudflare","ups","pixiv","wpexplorer","dyalog","bity","stackpath","buysellads","first-order","modx","guilded","vnv","square-js","microsoft","qq","orcid","java","invision","creative-commons-pd-alt","centercode","glide-g","drupal","jxl","dart-lang","hire-a-helper","creative-commons-by","unity","whmcs","rocketchat","vk","untappd","mailchimp","css3-alt","square-reddit","vimeo-v","contao","square-font-awesome","deskpro","brave","sistrix","square-instagram","battle-net","the-red-yeti","square-hacker-news","edge","threads","napster","square-snapchat","google-plus-g","artstation","markdown","sourcetree","google-plus","diaspora","foursquare","stack-overflow","github-alt","phoenix-squadron","pagelines","algolia","red-river","creative-commons-sa","safari","google","square-font-awesome-stroke","atlassian","linkedin-in","digital-ocean","nimblr","chromecast","evernote","hacker-news","creative-commons-sampling","adversal","creative-commons","watchman-monitoring","fonticons","weixin","shirtsinbulk","codepen","git-alt","lyft","rev","windows","wizards-of-the-coast","square-viadeo","meetup","centos","adn","cloudsmith","opensuse","pied-piper-alt","square-dribbble","codiepie","node","mix","steam","cc-apple-pay","scribd","debian","openid","instalod","expeditedssl","sellcast","square-twitter","r-project","delicious","freebsd","vuejs","accusoft","ioxhost","fonticons-fi","app-store","cc-mastercard","itunes-note","golang","kickstarter","grav","weibo","uncharted","firstdraft","square-youtube","wikipedia-w","wpressr","angellist","galactic-republic","nfc-directional","skype","joget","fedora","stripe-s","meta","laravel","hotjar","bluetooth-b","square-letterboxd","sticker-mule","creative-commons-zero","hips","behance","reddit","discord","chrome","app-store-ios","cc-discover","wpbeginner","confluence","shoelace","mdb","dochub","accessible-icon","ebay","amazon","unsplash","yarn","square-steam","500px","square-vimeo","asymmetrik","font-awesome","gratipay","apple","hive","gitkraken","keybase","apple-pay","padlet","amazon-pay","square-github","stumbleupon","fedex","phoenix-framework","shopify","neos","square-threads","hackerrank","researchgate","swift","angular","speakap","angrycreative","y-combinator","empire","envira","google-scholar","square-gitlab","studiovinari","pied-piper","wordpress","product-hunt","firefox","linode","goodreads","square-odnoklassniki","jsfiddle","sith","themeisle","page4","hashnode","react","cc-paypal","squarespace","cc-stripe","creative-commons-share","bitcoin","keycdn","opera","itch-io","umbraco","galactic-senate","ubuntu","draft2digital","stripe","houzz","gg","dhl","square-pinterest","xing","blackberry","creative-commons-pd","playstation","quinscape","less","blogger-b","opencart","vine","signal-messenger","paypal","gitlab","typo3","reddit-alien","yahoo","dailymotion","affiliatetheme","pied-piper-pp","bootstrap","odnoklassniki","nfc-symbol","mintbit","ethereum","speaker-deck","creative-commons-nc-eu","patreon","avianex","ello","gofore","bimobject","brave-reverse","facebook-f","square-google-plus","web-awesome","mandalorian","first-order-alt","osi","google-wallet","d-and-d-beyond","periscope","fulcrum","cloudscale","forumbee","mizuni","schlix","square-xing","bandcamp","wpforms","cloudversify","usps","megaport","magento","spotify","optin-monster","fly","aviato","itunes","cuttlefish","blogger","flickr","viber","soundcloud","digg","tencent-weibo","letterboxd","symfony","maxcdn","etsy","facebook-messenger","audible","think-peaks","bilibili","erlang","x-twitter","cotton-bureau","dashcube","42-group","stack-exchange","elementor","square-pied-piper","creative-commons-nd","palfed","superpowers","resolving","xbox","square-web-awesome-stroke","searchengin","tiktok","square-facebook","renren","linux","glide","linkedin","hubspot","deploydog","twitch","flutter","ravelry","mixer","square-lastfm","vimeo","mendeley","uniregistry","figma","creative-commons-remix","cc-amazon-pay","dropbox","instagram","cmplid","upwork","facebook","gripfire","jedi-order","uikit","fort-awesome-alt","phabricator","ussunnah","earlybirds","trade-federation","autoprefixer","whatsapp","square-upwork","slideshare","google-play","viadeo","line","google-drive","servicestack","simplybuilt","bitbucket","imdb","deezer","raspberry-pi","jira","docker","screenpal","bluetooth","gitter","d-and-d","microblog","cc-diners-club","gg-circle","pied-piper-hat","kickstarter-k","yandex","readme","html5","sellsy","square-web-awesome","sass","wirsindhandwerk","buromobelexperte","salesforce","octopus-deploy","medapps","ns8","pinterest-p","apper","fort-awesome","waze","bluesky","cc-jcb","snapchat","fantasy-flight-games","rust","wix","square-behance","supple","webflow","rebel","css3","staylinked","kaggle","space-awesome","deviantart","cpanel","goodreads-g","square-git","square-tumblr","trello","creative-commons-nc-jp","get-pocket","perbyte","grunt","weebly","connectdevelop","leanpub","black-tie","themeco","python","android","bots","free-code-camp","hornbill","js","ideal","git","dev","sketch","yandex-international","cc-amex","uber","github","php","alipay","youtube","skyatlas","firefox-browser","replyd","suse","jenkins","twitter","rockrms","pinterest","buffer","npm","yammer","btc","dribbble","stumbleupon-circle","internet-explorer","stubber","telegram","old-republic","odysee","square-whatsapp","node-js","edge-legacy","slack","medrt","usb","tumblr","vaadin","quora","square-x-twitter","reacteurope","medium","amilia","mixcloud","flipboard","viacoin","critical-role","sitrox","discourse","joomla","mastodon","airbnb","wolf-pack-battalion","buy-n-large","gulp","creative-commons-sampling-plus","strava","ember","canadian-maple-leaf","teamspeak","pushed","wordpress-simple","nutritionix","wodu","google-pay","intercom","zhihu","korvue","pix","steam-symbol"],"custom-icons":["gitbook"]}');let n=new Map;var o=t(22824);let i=r.forwardRef(function(e,a){let t=(0,o.useIcons)(),{icon:i,iconStyle:l=t.iconStyle,className:c="",size:u,...d}=e,[m,f]=function(e,a){var t;let r=null===(t=n.get(a))||void 0===t?void 0:t.get(e);if(r)return r;let o=[e,a];for(let[e,t]of Object.entries(s))if(t.includes(a)){o=[e,a];break}return n.has(a)||n.set(a,new Map),n.get(a).set(e,o),o}(l,i),_=(0,o.getIconAssetURL)(t,m,f);return r.createElement("svg",{ref:a,...d,style:{maskImage:"url(".concat(_,")"),maskRepeat:"no-repeat",maskPosition:"center",...u?{width:u,height:u}:{},...d.style},className:"gb-icon "+c})})},22824:function(e,a,t){"use strict";t.r(a),t.d(a,{IconsProvider:function(){return o},getAssetURL:function(){return l},getIconAssetURL:function(){return c},useIcons:function(){return i}});var r=t(7653),s=t(82076);let n=r.createContext({iconStyle:s.z.Regular});function o(e){let a=r.useContext(n),{children:t,assetsURL:s=a.assetsURL,assetsURLToken:o=a.assetsURLToken,iconStyle:i=a.iconStyle,assetsByStyles:l=a.assetsByStyles}=e,c=r.useMemo(()=>({assetsURL:s,assetsURLToken:o,iconStyle:i,assetsByStyles:l}),[s,o,i,l]);return r.createElement(n.Provider,{value:c},t)}function i(){return r.useContext(n)}function l(e,a){if(!e.assetsURL)throw Error("You first need to pass a assetsURL to <IconsProvider>");let t=e.assetsURL+(e.assetsURL.endsWith("/")?"":"/")+a+"?v=".concat(2);if(!e.assetsURLToken)return t;{let a=new URL(t);return a.searchParams.set("token",e.assetsURLToken),a.toString()}}function c(e,a,t){var r,s;return l(null!==(s=null===(r=e.assetsByStyles)||void 0===r?void 0:r[a])&&void 0!==s?s:e,"svgs/".concat(a,"/").concat(t,".svg"))}},16378:function(e,a,t){"use strict";t.d(a,{JO:function(){return r.Icon}});var r=t(52846);t(82076),t(22824)},82076:function(e,a,t){"use strict";var r,s;t.d(a,{z:function(){return r}}),(s=r||(r={})).Regular="regular",s.SharpRegular="sharp-regular",s.Solid="solid",s.SharpSolid="sharp-solid",s.Duotone="duotone",s.SharpDuotoneSolid="sharp-duotone-solid",s.Light="light",s.SharpLight="sharp-light",s.Thin="thin",s.SharpThin="sharp-thin"}},function(e){e.O(0,[4428,3253,5538,4629,9797,7922,2634,6718,4037,1293,2632,1744],function(){return e(e.s=1109)}),_N_E=e.O()}]);
//# sourceMappingURL=layout-7ef296a0cca4ea87.js.map