(window.webpackJsonpcsv2json=window.webpackJsonpcsv2json||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),c=(n(14),n(4)),u=n(5),l=n(7),s=n(6),p=n(1),v=n(8),h=(n(15),function(t){return o.a.createElement("textarea",{className:t.styleName,placeholder:t.placeholder,onChange:t.onChange,value:t.text})}),d=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(s.a)(e).call(this,t))).state={textInput1:"",textInput2:"",convertTo:"JSON"},n._textInputHandler1=n._textInputHandler1.bind(Object(p.a)(n)),n._textInputHandler2=n._textInputHandler2.bind(Object(p.a)(n)),n}return Object(v.a)(e,t),Object(u.a)(e,[{key:"_textInputHandler1",value:function(t){this.setState({textInput1:t.target.value})}},{key:"_textInputHandler2",value:function(t){this.setState({textInput2:t.target.value})}},{key:"_convert",value:function(){var t=this.state.textInput1;switch(this.state.convertTo){case"JSON":this._convertCSVToJSON(t);break;case"CSV":this._convertJSONToCSV(t);break;default:this._convertCSVToJSON(t)}}},{key:"_clear",value:function(){this.setState({textInput1:"",textInput2:""})}},{key:"_convertCSVToJSON",value:function(t){var e=[];if(this._IsValidCSV(t)){var n=t.trim().split("\n"),a=n[0].split(",").map((function(t){return t.trim().replace(/["]/g,"")}));e=n.slice(1).map((function(t){return t.split(",")})).map((function(t){var e={};return t.map((function(t,n){e[a[n]]=t.trim().replace(/["]/g,"")})),e}))}this.setState({textInput2:JSON.stringify(e,void 0,4)})}},{key:"_convertJSONToCSV",value:function(t){console.log("Convert JSON to CSV")}},{key:"_IsValidCSV",value:function(){return!0}},{key:"_IsValidJSON",value:function(){return!0}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"Title"},"CSV2JSON"),o.a.createElement(h,{styleName:"TextInput InputText",placeholder:"Place your input here ...",text:this.state.textInput1,onChange:this._textInputHandler1}),o.a.createElement("div",{className:"Actions"},o.a.createElement("button",{className:"ActionButton",id:"convert",onClick:this._convert.bind(this)},"Convert"),o.a.createElement("button",{className:"ActionButton",id:"clear",onClick:this._clear.bind(this)},"Clear")),o.a.createElement(h,{styleName:"TextInput InputText",text:this.state.textInput2,onChange:this._textInputHandler2}))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.5f72fe0a.chunk.js.map