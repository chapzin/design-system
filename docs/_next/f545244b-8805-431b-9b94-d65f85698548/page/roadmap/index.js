
          window.__NEXT_REGISTER_PAGE('/roadmap', function() {
            var comp = module.exports=webpackJsonp([16],{1247:function(e,t,a){e.exports=a(1248)},1248:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){return e&&e.__esModule?e:{default:e}}var s=a(7),i=l(s),o=a(0),r=l(o);Object.defineProperty(t,"__esModule",{value:!0});var d=a(22),u=n(d),c=a(15),f=n(c),m=a(16),p=n(m),g=a(23),h=n(g),x=a(24),y=n(x),b=a(151),E=n(b),w=a(1),k=n(w),v=a(18),j=n(v),M=a(92),N=(n(M),a(9)),T={now:[{title:"Progress Loader",tags:["Component"]},{title:"Avatar",tags:["Component"],helpers:["Mentors"]}],next:[{title:"Contribution Discovery",tags:["Component"]},{title:"Tab (vNext)",tags:["Component"]},{title:"Switch",tags:["Component"]},{title:"Tooltip / Popover",tags:["Component"]},{title:"Voice and Tone",tags:["Guidelines"]},{title:"Iconography",tags:["Guidelines"]},{title:"Reporting",tags:["Guidelines"]},{title:"Usage Dashboard",tags:["Tool"]}],future:[{title:"Text (vNext)",tags:["Component"]},{title:"Banner",tags:["Component"]},{title:"Text Input",tags:["Component"]},{title:"Breadcrumb",tags:["Component"]},{title:"Modal",tags:["Component"]},{title:"Dialog",tags:["Pattern"]},{title:"Blank State",tags:["Pattern"]},{title:"Error Pages",tags:["Pattern"]},{title:"Data Table",tags:["Pattern"]}]},C=function(e){return r.default.createElement("div",{className:"purpose","data-jsx":2469333919},e.children,r.default.createElement(i.default,{styleId:2469333919,css:'.purpose[data-jsx="2469333919"]{font-size:'+k.default.type.fontSizeMedium+";line-height:"+k.default.type.lineHeightExtra+";font-weight:"+k.default.type.fontWeightXLight+"}"}))},O=function(e){return r.default.createElement("div",{"aria-hidden":"true",className:"bar","data-jsx":693756736},r.default.createElement(i.default,{styleId:693756736,css:'.bar[data-jsx="693756736"]{height:0;overflow:hidden;padding-bottom:'+k.default.layout.spacingXLarge+";border-bottom:1px solid "+k.default.colors.gray01+";margin-bottom:"+k.default.layout.spacingSmall+"}"}))},S=function(e){return r.default.createElement("div",{className:"tasks",style:{borderLeftColor:e.color},"data-jsx":2597502096},e.tasks.map(function(e){return r.default.createElement(I,{key:e.title,item:e})}),r.default.createElement(i.default,{styleId:2597502096,css:'.tasks[data-jsx="2597502096"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 calc('+k.default.layout.spacingMedium+" / -2) 0 0;border-left-style:solid;border-left-width:5px;padding-left:"+k.default.layout.spacingXSmall+"}"}))},P=function(e){return r.default.createElement("div",{className:"cat "+(e.isVisible?"cat--is-visible":""),"aria-hidden":!0,"data-jsx":885262860},r.default.createElement(N.GithubIcon,{color:j.default.colors.gray01}),r.default.createElement(i.default,{styleId:885262860,css:'.cat[data-jsx="885262860"]{margin-left:auto;height:24px;width:24px;opacity:0;-webkit-transition:opacity '+k.default.motion.speedNormal+";transition:opacity "+k.default.motion.speedNormal+'}.cat--is-visible[data-jsx="885262860"]{opacity:1}'}))},I=function(e){function t(e){(0,f.default)(this,t);var a=(0,h.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return a.handleMouseOver=a.handleMouseOver.bind(a),a.handleMouseOut=a.handleMouseOut.bind(a),a.state={isOver:!1},a}return(0,y.default)(t,e),(0,p.default)(t,[{key:"handleMouseOver",value:function(){this.setState({isOver:!0})}},{key:"handleMouseOut",value:function(){this.setState({isOver:!1})}},{key:"render",value:function(){var e=this.props.item,a=e.tags.indexOf("Site")>-1?"site: "+e.title+" Roadmap Discussion":e.title.toLowerCase().replace(/ /g,"-").replace(/[\(\)]/g,"")+": Roadmap Discussion",l=e.href?e.href:"https://github.com/pluralsight/design-system/issues/new?title="+a;return r.default.createElement("a",{href:l,target:"_blank",className:"task",onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,"data-jsx":2559856923},r.default.createElement(t.Title,null,e.title),r.default.createElement("div",{className:"meta","data-jsx":2559856923},r.default.createElement(t.Tags,{tags:e.tags}),r.default.createElement(t.Helpers,{helpers:e.helpers}),r.default.createElement(P,{isVisible:this.state.isOver})),r.default.createElement(i.default,{styleId:2559856923,css:'.task[data-jsx="2559856923"]{text-decoration:none;color:inherit;display:block;width:100%;margin:calc('+k.default.layout.spacingMedium+" / 2);background:"+k.default.colors.bone+";padding:"+k.default.layout.spacingMedium+";border-radius:12px;border:2px solid transparent;-webkit-transition:all "+k.default.motion.speedNormal+";transition:all "+k.default.motion.speedNormal+';overflow:hidden}.task[data-jsx="2559856923"]:focus,.task[data-jsx="2559856923"]:hover{border:2px solid '+k.default.colors.gray01+";outline:none;background:"+k.default.colors.white+'}.meta[data-jsx="2559856923"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}@media screen and (min-width:1000px){.task[data-jsx="2559856923"]{width:calc(33.333% - '+k.default.layout.spacingMedium+")}}"}))}}]),t}(r.default.Component);I.Title=function(e){return r.default.createElement("div",{className:"title","data-jsx":125360031},e.children,r.default.createElement(i.default,{styleId:125360031,css:'.title[data-jsx="125360031"]{margin:0 0 '+k.default.layout.spacingSmall+" 0;font-size:"+k.default.type.fontSizeMedium+";font-weight:"+k.default.type.fontWeightMedium+"}"}))},I.Helpers=function(e){return e.helpers?r.default.createElement("div",{className:"helpers","data-jsx":961682770},e.helpers.map(function(e){return r.default.createElement(E.default,{color:E.default.colors.green,key:e},e)}),r.default.createElement(i.default,{styleId:961682770,css:'.helpers[data-jsx="961682770"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:'+k.default.layout.spacingXSmall+"}"})):null},I.Tags=function(e){return r.default.createElement("div",{className:"tags","data-jsx":4048218912},e.tags.map(function(e){return r.default.createElement(I.Tag,{key:e},e)}),r.default.createElement(i.default,{styleId:4048218912,css:'.tags[data-jsx="4048218912"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}'}))},I.Tag=function(e){return r.default.createElement("div",{className:"tag","data-jsx":2468004776},r.default.createElement(E.default,{appearance:E.default.appearances.stroke},e.children),r.default.createElement(i.default,{styleId:2468004776,css:'.tag[data-jsx="2468004776"]{overflow:hidden}'}))},t.default=(0,N.withServerProps)(function(e){return r.default.createElement(N.Chrome,null,r.default.createElement(N.Content,{title:"Install"},r.default.createElement(N.PageHeading,null,"Roadmap"),r.default.createElement(C,null,"The Roadmap aims to expose what current is and what future work will be tackled in the Design System. Explore the items below and follow them on to Github for more details and to join the conversation to promote or explore these or other items."),r.default.createElement(O,null),r.default.createElement(N.SectionHeading,null,"Now"),r.default.createElement(N.P,null,"What the team is working on currently. These issues are started and we anticipate completing them."),r.default.createElement(S,{color:k.default.colors.green,tasks:T.now}),r.default.createElement(O,null),r.default.createElement(N.SectionHeading,null,"Next"),r.default.createElement(N.P,null,"Here is what we think is coming up quickly (roughly this quarter). Priorities often change. Voice your thoughts on any of these issues, including priority, on"," ",r.default.createElement(N.TextLink,{href:"https://github.com/pluralsight/design-system/issues"},"Github"),", or take a look at how you can"," ",r.default.createElement(N.TextLink,{href:"/contribute"},"contribute"),"."),r.default.createElement(S,{color:k.default.colors.yellow,tasks:T.next}),r.default.createElement(O,null),r.default.createElement(N.SectionHeading,null,"Future"),r.default.createElement(N.P,null,"Longer-term ideas. These are deemed to add value but are in need of more concrete discovery and prioritization."),r.default.createElement(S,{color:k.default.colors.pink,tasks:T.future})))})}},[1247]);
            return { page: comp.default }
          })
        