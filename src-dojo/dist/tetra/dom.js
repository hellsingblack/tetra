//>>built
define("tetra/dom",["./_base/kernel","dojo/dom","dojo/has"],function(c,d,e){return{start:function(){c.start()},updateTitle:function(){var b=d.byId("title");e("ie-event-behavior")?require(["dojo/dom-style"],function(a){a.set(b,"fontSize","100px")}):require(["dojo/_base/fx"],function(a){a.animateProperty({node:b,properties:{fontSize:{end:100,units:"px"}},duration:1E3}).play()})}}});