(self.webpackChunktrekhleb_github_io=self.webpackChunktrekhleb_github_io||[]).push([[7047],{4363:function(e,t,i){var a=i(9720).w_;e.exports.v=function(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}},3839:function(e,t,i){"use strict";var a=i(7294);t.Z=e=>{const{children:t,className:i=""}=e;if(!t)return null;const n="bg-gray-200 px-1 rounded text-xs "+i;return a.createElement("div",{className:n},t)}},7966:function(e,t,i){"use strict";i.d(t,{Dp:function(){return n}});var a=i(7294);const n="row",r="column";t.ZP=e=>{const{children:t,mode:i=r}=e;if(!t)return null;const s="transition duration-200 ease-in-out shadow-card rounded-md overflow-hidden bg-white flex flex-col",o=i===n?s+" sm:flex-row items-stretch":""+s;return a.createElement("div",{className:o},t)}},9879:function(e,t,i){"use strict";i.d(t,{tt:function(){return n}});var a=i(7294);const n="row",r="column";t.ZP=e=>{const{children:t,className:i="",mode:s=r}=e;if(!t)return null;const o="p-6 "+i,l=s===n?o+" sm:w-3/5 lg:w-3/4":""+o;return a.createElement("div",{className:l,style:{flex:1}},t)}},7439:function(e,t,i){"use strict";var a=i(7294),n=i(4519),r=i(1705);t.Z=e=>{const{children:t,link:i}=e;if(!t)return null;const s=a.createElement(n.Z,{level:n._.h3},t),o=i?a.createElement(r.Z,{link:i},s):null;return a.createElement("div",{className:"mb-3"},o||s)}},7307:function(e,t,i){"use strict";i.d(t,{iT:function(){return n}});var a=i(7294);const n="list",r="grid";t.ZP=e=>{const{children:t,mode:i=r}=e;if(!t)return null;const n="grid gap-12 grid-cols-1",s=i===r?n+" sm:grid-cols-2 lg:grid-cols-3":""+n;return a.createElement("div",{className:s},t)}},3354:function(e,t,i){"use strict";var a=i(7294),n=i(4363),r=i(5103);const s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=function(e,t){void 0===t&&(t=!1);return""+s[e.getMonth()]+(t?" "+e.getDate()+", ":" ")+e.getFullYear()};t.Z=e=>{const{startDate:t,endDate:i,className:s="",withDay:l=!1}=e;if(!t&&!i)return null;const c=t?o(new Date(t),l):null,h=t&&i?" → ":null,u=i?o(new Date(i),l):null;return a.createElement("div",{className:s},a.createElement(r.Z,null,a.createElement(n.v,{className:"mr-1"}),a.createElement("div",null,c,h,u)))}},9737:function(e,t,i){"use strict";var a=i(7294),n=i(4519);t.Z=e=>{const{children:t,className:i=""}=e,r="mb-6 uppercase font-extrabold "+i;return a.createElement(n.Z,{level:n._.h1,className:r},t)}},2135:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return v}});var a=i(7294),n=i(578),r=i(9737),s=i(3839),o=i(5103),l=i(7943),c=i(7307),h=i(3354),u=i(7966),m=i(9879),p=i(7439),d=i(6945);var g=e=>{const{publisher:t,publisherLogo:i}=e;return a.createElement("div",{key:t,className:"inline-block rounded-sm text-xs font-normal  flex flex-row justify-center items-center gap-1"},a.createElement(d.Z,{image:i,className:"w-5"}),a.createElement("div",null,t))};var b=e=>{const{publication:t}=e;if(!t)return null;const i=t.summary.map(((e,t)=>a.createElement("p",{key:t},e))),n=i?a.createElement("div",{className:"mb-3 font-light"},i):null;return a.createElement(u.ZP,{mode:u.Dp},a.createElement(m.ZP,{mode:m.tt},a.createElement(p.Z,{link:t.link},t.title),a.createElement(o.Z,{className:"mb-3 justify-between"},a.createElement("div",{className:"flex flex-row justify-center items-center"},a.createElement(g,{publisher:t.publisher,publisherLogo:t.publisherLogo}),a.createElement("div",{className:"text-gray-500 text-sm mr-3 ml-3"},"•"),a.createElement(h.Z,{startDate:t.date,className:"text-xs text-gray-500"}))),n))};var w=e=>{const{publications:t}=e,i=t.sort(((e,t)=>{const i=new Date(e.date).getTime();return new Date(t.date).getTime()-i})).map((e=>a.createElement(b,{publication:e,key:e.publisher+e.title})));return a.createElement(c.ZP,{mode:c.iT},i)};var k=e=>{const{publications:t,publisher:i,onPublisherSelect:n}=e,r=t.reduce(((e,t)=>(void 0===e[t.publisher]&&(e[t.publisher]=0),e[t.publisher]+=1,e)),{}),s=Object.keys(r).sort().map((e=>a.createElement("option",{key:e,value:e},e," (",r[e],")")));return a.createElement("div",null,a.createElement(o.Z,null,a.createElement("div",{className:"text-sm text-gray-500 mr-1"},"Publisher:"),a.createElement("div",null,a.createElement("select",{onChange:e=>{const t=e.target.value;n(t)},defaultValue:i,className:"text-sm"},a.createElement("option",{value:"All"},"All (",t.length,")"),s))))};var f=e=>{const{publications:t}=e,[i,c]=a.useState("All"),h=t.filter((e=>"All"===i||e.publisher===i)),u=t.length;return a.createElement(n.Z,null,a.createElement(l.ZP,{title:"Publications",description:"Trekhleb's publications"}),a.createElement(o.Z,null,a.createElement(r.Z,null,"Publications"),a.createElement(s.Z,{className:"ml-3 self-start"},u)),a.createElement(o.Z,{className:"mb-6 justify-between"},a.createElement(k,{publications:t,publisher:i,onPublisherSelect:e=>{c(e)}})),a.createElement(w,{publications:h}))};const y=[{title:"How X (Twitter) Designed Its Home Timeline API: Lessons to Learn",summary:["A closer look at X’s API: fetching data, linking entities, and solving under-fetching."],date:"2024-12-15",publisher:"Towards Data Science",publisherLogo:{srcPath:"publishers/towards-data-science.jpg"},link:{url:"https://towardsdatascience.com/api-design-of-x-twitter-home-timeline-da426f19edfe"}},{title:"System Design Sketches",summary:["System design sketches for popular system design interview questions."],date:"2024-07-15",publisher:"ITNEXT",publisherLogo:{srcPath:"publishers/itnext.png"},link:{url:"https://itnext.io/system-design-sketches-d8cb8e1d539f"}},{title:"JavaScript-algorithms: Algorithms and data structures implemented in JavaScript (github.com/trekhleb)",summary:["Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2023-04-07",publisher:"Hacker News",publisherLogo:{srcPath:"publishers/hacker-news.png"},link:{url:"https://news.ycombinator.com/front?day=2023-04-07"}},{title:"TLDraw offers a collaborative whiteboard without any login",summary:["My okso.app drawing app is mentioned in the TechCrunch article related to TLDraw app"],date:"2022-12-16",publisher:"TechCrunch",publisherLogo:{srcPath:"publishers/tech-crunch.png"},link:{url:"https://techcrunch.com/2022/12/16/tldraw-offers-a-collaborative-whiteboard-without-any-login/"}},{title:"Data Structures Sketches (okso.app)",summary:["Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2022-10-09",publisher:"Hacker News",publisherLogo:{srcPath:"publishers/hacker-news.png"},link:{url:"https://news.ycombinator.com/front?day=2022-10-09"}},{title:"Ukrainian developers — about the benefits of participating in open source (in UA)",summary:["The article discusses the growth and challenges of open-source development in Ukraine, highlighting notable Ukrainian contributors and projects, the community's role in fostering collaboration, and how open-source tools are being leveraged to support Ukraine"],date:"2022-02-03",publisher:"DOU",publisherLogo:{srcPath:"publishers/dou.jpg"},link:{url:"https://dou.ua/lenta/articles/open-source-in-ukraine/"}},{title:"Content-Aware Image Resizing in JavaScript",summary:["JavaScript implementation of so-called Seam Carving algorithm for content-aware image resizing"],date:"2022-01-19",publisher:"CodeProject",publisherLogo:{srcPath:"publishers/code-project.jpg"},link:{url:"https://www.codeproject.com/Articles/5322937/Content-Aware-Image-Resizing-in-JavaScript"}},{title:"JavaScript Algorithms and Data Structures (2018) (github.com/trekhleb)",summary:["Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2021-10-22",publisher:"Hacker News",publisherLogo:{srcPath:"publishers/hacker-news.png"},link:{url:"https://news.ycombinator.com/front?day=2021-10-22"}},{title:"Free resources to promote your next startup (github.com/trekhleb)",summary:["Published on Hacker News 2nd page. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2021-10-09",publisher:"Hacker News",publisherLogo:{srcPath:"publishers/hacker-news.png"},link:{url:"https://news.ycombinator.com/front?day=2021-10-09&p=2"}},{title:"Show HN: Self-Parking Car Evolution (trekhleb.dev)",summary:["Published on Hacker News 2nd page. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2021-09-28",publisher:"Hacker News",publisherLogo:{srcPath:"publishers/hacker-news.png"},link:{url:"https://news.ycombinator.com/front?day=2021-09-28&p=2"}},{title:"Self-Parking Car in <500 Lines of Code",summary:["Training the car to do self-parking using a genetic algorithm"],date:"2021-09-28",publisher:"Towards Data Science",publisherLogo:{srcPath:"publishers/towards-data-science.jpg"},link:{url:"https://towardsdatascience.com/self-parking-car-in-500-lines-of-code-c1b2a57455af"}},{title:"Binary representation of floating-point numbers (github.com/trekhleb)",summary:["Published on Hacker News 2nd page. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2021-07-26",publisher:"Hacker News",publisherLogo:{srcPath:"publishers/hacker-news.png"},link:{url:"https://news.ycombinator.com/front?day=2021-07-26&p=2"}},{title:"Binary representation of the floating-point numbers",summary:["Interactive example of how the floating-point numbers like -27.156 are stored in binary format in a computer's memory"],date:"2021-07-15",publisher:"Towards Data Science",publisherLogo:{srcPath:"publishers/towards-data-science.jpg"},link:{url:"https://towardsdatascience.com/binary-representation-of-the-floating-point-numbers-77d7364723f1"}},{title:"Content-aware image resizing in JavaScript",summary:["JavaScript implementation of so-called Seam Carving algorithm for the content-aware image resizing and object removal. A dynamic programming approach is applied to optimize the resizing time."],date:"2021-04-30",publisher:"HackerNoon",publisherLogo:{srcPath:"publishers/hacker-noon.jpg"},link:{url:"https://hackernoon.com/how-to-resize-an-image-correctly-in-javascript-4548336j"}},{title:"Dynamic Programming vs. Divide-and-Conquer (2018) (trekhleb.dev)",summary:["Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2021-04-25",publisher:"Hacker News",publisherLogo:{srcPath:"publishers/hacker-news.png"},link:{url:"https://news.ycombinator.com/front?day=2021-04-25"}},{title:"Content-aware image resizing in JavaScript (trekhleb.dev)",summary:["Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2021-04-16",publisher:"Hacker News",publisherLogo:{srcPath:"publishers/hacker-news.png"},link:{url:"https://news.ycombinator.com/front?day=2021-04-16"}},{title:"Content-Aware Image Resizing in JavaScript",summary:["JavaScript implementation of so-called Seam Carving algorithm for the content-aware image resizing and object removal. A dynamic programming approach is applied to optimize the resizing time."],date:"2021-04-16",publisher:"JavaScript in Plain English",publisherLogo:{srcPath:"publishers/javascript-in-plain-english.jpg"},link:{url:"https://javascript.plainenglish.io/content-aware-image-resizing-in-javascript-89144c1b5a5c"}},{title:"How To Build Links Detector That Making Links in Your Book Clickable",summary:["In this article I'm solving the issue of making the printed links (i.e. in a book or in a magazine) clickable via your smartphone camera. We will use TensorFlow 2 Object Detection API to train a custom object detector model to find positions and bounding boxes of the sub-strings like https:// in the text image (i.e. in smartphone camera stream)."],date:"2020-12-06",publisher:"HackerNoon",publisherLogo:{srcPath:"publishers/hacker-noon.jpg"},link:{url:"https://hackernoon.com/how-to-build-links-detector-that-making-links-in-your-book-clickable-d11h31v2"}},{title:"Making the Printed Links Clickable Using TensorFlow 2 Object Detection API",summary:["In this article I'm solving the issue of making the printed links (i.e. in a book or in a magazine) clickable via your smartphone camera. We will use TensorFlow 2 Object Detection API to train a custom object detector model to find positions and bounding boxes of the sub-strings like https:// in the text image (i.e. in smartphone camera stream)."],date:"2020-12-01",publisher:"Towards Data Science",publisherLogo:{srcPath:"publishers/towards-data-science.jpg"},link:{url:"https://towardsdatascience.com/making-the-printed-links-clickable-using-tensorflow-2-object-detection-api-be42bd65488a"}},{title:"NanoNeuron — 7 simple JS functions that explain how machines learn",summary:["7 simple JavaScript functions that will give you a feeling of how machines can actually “learn”."],date:"2020-07-04",publisher:"Towards Data Science",publisherLogo:{srcPath:"publishers/towards-data-science.jpg"},link:{url:"https://towardsdatascience.com/making-the-printed-links-clickable-using-tensorflow-2-object-detection-api-be42bd65488a"}},{title:"Generating cooking recipes using TensorFlow and LSTM Recurrent Neural Network: A step-by-step guide",summary:['A character-level LSTM (Long short-term memory) RNN (Recurrent Neural Network) is trained on ~100k recipes dataset using TensorFlow. The model suggested the recipes "Cream Soda with Onions", "Puff Pastry Strawberry Soup", "Zucchini flavor Tea", and "Salmon Mousse of Beef and Stilton Salad with Jalapenos". Yum!? Follow along this detailed guide with code to create your own recipe-generating chef.'],date:"2020-07-03",publisher:"KDnuggets",publisherLogo:{srcPath:"publishers/kdnuggets.jpg"},link:{url:"https://www.kdnuggets.com/2020/07/generating-cooking-recipes-using-tensorflow.html"}},{title:"[Book] JavaScript Algorithms",summary:["Pass your algorithms interview with confidence by learning data structures and algorithms in JavaScript. The book should help engineers to better prepare for tech interviews."],date:"2020-07-02",publisher:"Newline",publisherLogo:{srcPath:"publishers/newline.png"},link:{url:"https://www.newline.co/javascript-algorithms"}},{title:"Generating weird cooking recipes with TensorFlow (github.com/trekhleb)",summary:["Published on Hacker News 2nd page. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2020-06-22",publisher:"Hacker News",publisherLogo:{srcPath:"publishers/hacker-news.png"},link:{url:"https://news.ycombinator.com/front?day=2020-06-22&p=2"}},{title:"Generating cooking recipes using TensorFlow and LSTM Recurrent Neural Network: A step-by-step guide",summary:["This article contains details of how the recipes generator LSTM model may be trained trained on Python using TensorFlow 2 with Keras API."],date:"2020-06-20",publisher:"Towards Data Science",publisherLogo:{srcPath:"publishers/towards-data-science.jpg"},link:{url:"https://towardsdatascience.com/generating-cooking-recipes-using-tensorflow-and-lstm-recurrent-neural-network-a7bf242acad3"}},{title:"How I work: Oleksii Trekhleb, Front-end Engineer at Uber (in UA)",summary:["About my work, workspace organization, useful tools, life hacks and how I learn new technologies on my pet projects."],date:"2020-06-10",publisher:"DOU",publisherLogo:{srcPath:"publishers/dou.jpg"},link:{url:"https://dou.ua/lenta/articles/how-i-work-trekhleb/"}},{title:"Interactive Machine Learning Experiments",summary:["A collection of interactive machine-learning experiments. Each experiment consists of Jupyter/Colab notebook (to see how a model was trained) and demo page (to see a model in action right in your browser)."],date:"2020-06-26",publisher:"KDnuggets",publisherLogo:{srcPath:"publishers/kdnuggets.jpg"},link:{url:"https://www.kdnuggets.com/2020/05/interactive-machine-learning-experiments.html"}},{title:"Interactive Machine Learning Experiments",summary:["A collection of interactive machine-learning experiments. Each experiment consists of Jupyter/Colab notebook (to see how a model was trained) and demo page (to see a model in action right in your browser)."],date:"2020-05-06",publisher:"Towards Data Science",publisherLogo:{srcPath:"publishers/towards-data-science.jpg"},link:{url:"https://towardsdatascience.com/interactive-machine-learning-experiments-e9b29b0cb7b9"}},{title:"NanoNeuron – simple JavaScript functions that explain how machines learn (github.com/trekhleb)",summary:["Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2019-12-06",publisher:"Hacker News",publisherLogo:{srcPath:"publishers/hacker-news.png"},link:{url:"https://news.ycombinator.com/front?day=2019-12-06"}},{title:"Creating React usePosition() hook for getting browser’s geolocation",summary:["In this article I'm explaining how to create React usePosition() hook to fetch and follow browser’s location."],date:"2019-07-01",publisher:"ITNEXT",publisherLogo:{srcPath:"publishers/itnext.png"},link:{url:"https://itnext.io/creating-react-useposition-hook-for-getting-browsers-geolocation-2f27fc1d96de"}},{title:"Technical Interview Preparation Checklist",summary:["This article is my attempt to summarize common technical interview process steps and to collect in one place some useful insights from recruiters that they normally send to applicants before the interviews."],date:"2019-05-01",publisher:"ITNEXT",publisherLogo:{srcPath:"publishers/itnext.png"},link:{url:"https://itnext.io/technical-interview-preparation-checklist-b000125f1535"}},{title:"Homemade Machine Learning is a repository for learning ML in Python with a Jupyter demo",summary:["Article about the project that contains examples of popular machine learning algorithms implemented in Python with mathematics behind them being explained."],date:"2019-01-08",publisher:"DOU",publisherLogo:{srcPath:"publishers/dou.jpg"},link:{url:"https://dou.ua/lenta/articles/dou-projector-homemade-machine-learning/"}},{title:"Homemade Machine Learning in Python",summary:["Article about the project that contains examples of popular machine learning algorithms implemented in Python with mathematics behind them being explained."],date:"2018-12-21",publisher:"AI Time Journal",publisherLogo:{srcPath:"publishers/ai-time-journal.jpg"},link:{url:"https://www.aitimejournal.com/@oleksii.trekhleb/homemade-machine-learning-in-python"}},{title:"Homemade Machine Learning in Python",summary:["Article about the project that contains examples of popular machine learning algorithms implemented in Python with mathematics behind them being explained."],date:"2018-12-21",publisher:"Data Driven Investor",publisherLogo:{srcPath:"publishers/data-driven-investor.jpg"},link:{url:"https://medium.datadriveninvestor.com/homemade-machine-learning-in-python-ed77c4d6e25b"}},{title:"Machine Learning in MatLab/Octave",summary:["MatLab/Octave examples of popular machine learning algorithms with code examples and mathematics behind them being explained."],date:"2018-10-31",publisher:"Data Driven Investor",publisherLogo:{srcPath:"publishers/data-driven-investor.jpg"},link:{url:"https://medium.datadriveninvestor.com/machine-learning-in-matlab-octave-e0492cd803c0"}},{title:"Dynamic Programming vs Divide-and-Conquer",summary:["In this article I’m trying to explain the difference/similarities between dynamic programming and divide and conquer approaches based on two examples: binary search and minimum edit distance (Levenshtein distance)."],date:"2018-09-19",publisher:"GeeksForGeeks",publisherLogo:{srcPath:"publishers/geeks-for-geeks.jpg"},link:{url:"https://www.geeksforgeeks.org/dynamic-programming-vs-divide-and-conquer/"}},{title:"Playground and Cheatsheet for Learning Python (in UA)",summary:["Collection of Python scripts that are split by topics and contain code examples with explanations."],date:"2018-09-04",publisher:"DOU",publisherLogo:{srcPath:"publishers/dou.jpg"},link:{url:"https://dou.ua/lenta/articles/dou-projector-playground-for-learning-python/"}},{title:"Classic Algorithms Implemented in JavaScript (github.com/trekhleb)",summary:["Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2018-07-20",publisher:"Hacker News",publisherLogo:{srcPath:"publishers/hacker-news.png"},link:{url:"https://news.ycombinator.com/front?day=2018-07-20"}},{title:"What I Learned In My Career Developing 50+ Web-Projects, Launching 2 Startups And 2 Open-Source Projects",summary:["How to stay productive and to be open to new opportunities (career developing)."],date:"2018-07-09",publisher:"HowIGotJob",publisherLogo:{srcPath:"publishers/how-i-got-job.jpg"},link:{url:"https://howigotjob.com/software-engineer/what-i-learned-in-my-career-developing-50-web-projects-2-open-source-projects/?utm_content=cmp-true"}},{title:"Permutations/Combinations Algorithms Cheat Sheets",summary:["This article briefly describes the difference between mathematical permutations and combinations, explains the main idea behind permutations and combinations algorithms and contains links to algorithms implementation in JavaScript."],date:"2018-06-29",publisher:"ITNEXT",publisherLogo:{srcPath:"publishers/itnext.png"},link:{url:"https://itnext.io/permutations-combinations-algorithms-cheat-sheet-68c14879aba5"}},{title:"Dynamic Programming vs Divide-and-Conquer",summary:["In this article I’m trying to explain the difference/similarities between dynamic programming and divide and conquer approaches based on two examples: binary search and minimum edit distance (Levenshtein distance)."],date:"2018-06-15",publisher:"ITNEXT",publisherLogo:{srcPath:"publishers/itnext.png"},link:{url:"https://itnext.io/dynamic-programming-vs-divide-and-conquer-2fea680becbe"}},{title:"Algorithms and Data Structures Explained and Implemented in JavaScript (github.com/trekhleb)",summary:["Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2018-05-23",publisher:"Hacker News",publisherLogo:{srcPath:"publishers/hacker-news.png"},link:{url:"https://news.ycombinator.com/front?day=2018-05-23"}},{title:"Algorithms and Data Structures in JavaScript",summary:["Algorithms and data structures implemented in JavaScript with explanations and links to further readings."],date:"2018-05-21",publisher:"ITNEXT",publisherLogo:{srcPath:"publishers/itnext.png"},link:{url:"https://itnext.io/algorithms-and-data-structures-in-javascript-a71548f902cb"}}];var v=()=>a.createElement(f,{publications:y})}}]);
//# sourceMappingURL=component---src-pages-publications-tsx-af295fd7ea7c69e83cda.js.map