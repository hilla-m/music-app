(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{54:function(e,t,a){},63:function(e){e.exports=JSON.parse('[{"id":1,"name":"Dana","email":"dana@gmail.com","password":"123","albums":[1,2],"artists":[1]},{"id":2,"name":"Ron","email":"ron@gmail.com","password":"123","albums":[4],"artists":[2]}]')},64:function(e){e.exports=JSON.parse('[{"id":1,"title":"The Dark Side of the Moon","artistId":1,"year":"1973","genre":"Rock","image":"https://miro.medium.com/max/2480/1*8FkvzbSdSJ4HNxtuZo5kLg.jpeg"},{"id":2,"title":"The Wall","artistId":1,"year":"1979","genre":"Rock","image":"https://upload.wikimedia.org/wikipedia/he/1/1d/Pink_Floyd_The_Wall.png"},{"id":3,"title":"Lemonade","artistId":2,"year":"2016","genre":"R&B","image":"https://cdn.vox-cdn.com/thumbor/CRayvWwJnFmEwZuegRkVoT0lO9U=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15798288/20160424-beyonce-lemonade-album.0.1484310357.jpg"},{"id":4,"title":"The Fame","artistId":3,"year":"2008","genre":"Pop","image":"https://images-na.ssl-images-amazon.com/images/I/71NzKQWEtNL._AC_SL1400_.jpg"}]')},65:function(e){e.exports=JSON.parse('[{"id":1,"name":"Pink Floyd","image":"https://pyxis.nymag.com/v1/imgs/20b/c5b/fb27425c5dede0f79a3fd6271b97ba7e42-31-pink-floyd-feature.jpg"},{"id":2,"name":"Beyonce","image":"https://pyxis.nymag.com/v1/imgs/6c0/570/056961772f9239c7ad26e784b020e410ae-beyonce.rsquare.w1200.jpg"},{"id":3,"name":"Lady Gaga","image":"https://i0.wp.com/escxtra.com/wp-content/uploads/Lady-Gaga.jpg?fit=1200%2C800&ssl=1"}]')},66:function(e){e.exports=JSON.parse('[{"id":1,"title":"Speak to Me","length":"1:30","albumId":1,"play":false,"file":"Speak To MeBreathe.mp3"},{"id":2,"title":"Breathe in the Air","length":"2:43","albumId":1,"play":false,"file":"Speak To MeBreathe.mp3"},{"id":3,"title":"On the Run","length":"3:30","albumId":1,"play":false,"file":"On The Run.mp3"},{"id":4,"title":"Time / Breathe (Reprise)","length":"7:05","albumId":1,"play":false,"file":""},{"id":5,"title":"The Great Gig in the Sky","length":"4:15","albumId":1,"play":false,"file":""},{"id":6,"title":"In The Flesh?","length":"3:18","albumId":2,"play":false,"file":""},{"id":7,"title":"The Thin Ice","length":"2:26","albumId":2,"play":false,"file":""},{"id":8,"title":"Another Brick In the Wall, Pt. 1","length":"3:12","albumId":2,"play":false,"file":""},{"id":9,"title":"The Happiest Days of Our Lives","length":"1:50","albumId":2,"play":false,"file":""},{"id":10,"title":"Another Brick In the Wall, Pt. 2","length":"3:58","albumId":2,"play":false,"file":""}]')},67:function(e){e.exports=JSON.parse('[{"id":1,"title":"playlist 1","userId":1,"tracksId":[1,2,3]},{"id":2,"title":"playlist 2","userId":1,"tracksId":[5,8]},{"id":3,"title":"playlist 1","userId":2,"tracksId":[5,6,10]}]')},73:function(e,t,a){},74:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(25),c=a.n(i),r=(a(73),a(52)),l=a(8),j=a(18),d=a(6),o=(a(54),a(98)),b=(a(74),a(13)),u=(a(75),a(44)),h=(a(55),a.p,a(1));var O=function(e){var t=e.activeUser,a=e.albums,s=e.tracks,i=e.artists,c=(e.handlePlayTrack,Object(d.g)().index),r=Object(n.useState)(null),j=Object(l.a)(r,2),O=j[0],m=j[1],x=a[c],f=i.find((function(e){return e.id===x.artistId}));Object(n.useEffect)((function(){if(O){var e=new Audio(O.file);return e.play(),function(){e.pause()}}}),[O]);var p=s.filter((function(e){return e.albumId===x.id})),g=1;return t?Object(h.jsxs)("div",{className:"p-album",children:[Object(h.jsxs)("div",{className:"album-row",children:[Object(h.jsxs)("div",{className:"album-details",children:[Object(h.jsx)("h1",{children:x.title}),Object(h.jsx)("h3",{children:f.name}),Object(h.jsx)("h5",{children:x.year}),Object(h.jsx)("h5",{children:x.genre})]}),Object(h.jsx)("div",{className:"album-img",children:Object(h.jsx)("img",{src:x.image})})]}),p.length>0?Object(h.jsxs)("div",{className:"album-row",children:[Object(h.jsx)("h4",{children:"Track Listing"}),Object(h.jsx)("div",{className:"album-tracks",children:Object(h.jsx)(o.a,{striped:!0,bordered:!0,hover:!0,size:"sm",variant:"dark",children:Object(h.jsx)("tbody",{children:p.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:g++}),Object(h.jsx)("td",{children:e.title}),Object(h.jsx)("td",{children:e.length}),Object(h.jsx)("td",{className:"td-btn",children:Object(h.jsx)("a",{className:"tracks-btn",onClick:function(){return t=e.id,a=!(O&&O.id===e.id),void m(a?s.find((function(e){return e.id===t})):null);var t,a},children:O&&O.id===e.id?Object(h.jsx)(b.b,{}):Object(h.jsx)(b.c,{})})}),Object(h.jsx)("td",{className:"td-btn",children:Object(h.jsx)("a",{className:"tracks-btn",children:Object(h.jsx)(b.d,{})})})]})}))})})})]}):null,p.length>0?Object(h.jsx)(u.a,{trackList:p,includeTags:!0,includeSearch:!1,showPlaylist:!0,autoPlayNextTrack:!0}):null]}):Object(h.jsx)(d.a,{to:"/"})},m=a(102),x=a(103),f=a(99),p=a(61),g=a(100);a(83);var v=function(e){var t=e.show,a=e.onClose,s=e.onCreate,i=Object(n.useState)(""),c=Object(l.a)(i,2),r=c[0],j=c[1];return Object(h.jsxs)(m.a,{className:"m-new-playlist",show:t,onHide:a,children:[Object(h.jsx)(m.a.Header,{closeButton:!0,children:Object(h.jsx)(m.a.Title,{children:"Add a new playlist"})}),Object(h.jsx)(m.a.Body,{children:Object(h.jsx)(x.a,{children:Object(h.jsxs)(x.a.Group,{as:f.a,controlId:"formPlaylistTitle",children:[Object(h.jsx)(x.a.Label,{column:!0,sm:3,children:"Playlist name"}),Object(h.jsx)(p.a,{sm:9,children:Object(h.jsx)(x.a.Control,{type:"text",value:r,onChange:function(e){return j(e.target.value)}})})]})})}),Object(h.jsx)(m.a.Footer,{children:Object(h.jsx)(g.a,{variant:"secondary",onClick:function(){j(""),s(r),a()},children:"Add"})})]})};a(85),a(86);var y=function(e){var t=e.playlist,a=e.show,s=e.onClose,i=e.onEdit,c=Object(n.useState)(""),r=Object(l.a)(c,2),j=r[0],d=r[1];return Object(h.jsxs)(m.a,{className:"m-name-playlist",show:a,onHide:s,children:[Object(h.jsx)(m.a.Header,{closeButton:!0,children:Object(h.jsx)(m.a.Title,{children:"Rename playlist"})}),Object(h.jsx)(m.a.Body,{children:Object(h.jsx)(x.a,{children:Object(h.jsxs)(x.a.Group,{as:f.a,controlId:"formPlaylistTitle",children:[Object(h.jsx)(x.a.Label,{column:!0,sm:3,children:"Playlist name"}),Object(h.jsx)(p.a,{sm:9,children:Object(h.jsx)(x.a.Control,{type:"text",value:j,onChange:function(e){return d(e.target.value)}})})]})})}),Object(h.jsx)(m.a.Footer,{children:Object(h.jsx)(g.a,{variant:"secondary",onClick:function(){d(""),i(t.id,j),s()},children:"Save"})})]})};var k=function(e){var t=e.activeUser,a=e.playlists,s=e.tracks,i=e.handlePlayTrack,c=e.onEditPlaylist,r=a[Object(d.g)().index-1],j=Object(n.useState)(!1),O=Object(l.a)(j,2),m=O[0],x=O[1];if(!t)return Object(h.jsx)(d.a,{to:"/"});var f,p=s.filter((function(e){return r.tracksId.includes(e.id)})),g=1;return Object(h.jsxs)("div",{className:"p-playlist",children:[Object(h.jsxs)("div",{className:"icons-btn",children:[Object(h.jsx)(b.c,{className:"icon-btn"}),Object(h.jsx)(b.d,{className:"icon-btn",onClick:function(){return Object(h.jsx)(d.a,{to:"/"})}}),Object(h.jsx)(b.a,{className:"icon-btn"}),Object(h.jsx)(b.e,{className:"icon-btn",onClick:function(){return x(!0)}})]}),Object(h.jsx)("h1",{children:r.title}),p.length>0?Object(h.jsx)("div",{className:"playlist-tbl",children:Object(h.jsx)(o.a,{striped:!0,bordered:!0,hover:!0,size:"sm",variant:"dark",children:Object(h.jsx)("tbody",{children:p.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:g++}),Object(h.jsx)("td",{children:e.title}),Object(h.jsx)("td",{children:e.length}),Object(h.jsx)("td",{className:"td-btn",children:Object(h.jsx)("a",{className:"tracks-btn",onClick:function(){return function(e,t){i(e,t),f=s.find((function(t){return t.id===e}));var a=new Audio(f.file);f.play?a.play():a.pause()}(e.id,!e.play)},children:e.play?Object(h.jsx)(b.b,{}):Object(h.jsx)(b.c,{})})}),Object(h.jsx)("td",{className:"td-btn",children:Object(h.jsx)("a",{className:"tracks-btn",children:Object(h.jsx)(b.a,{})})})]})}))})})}):null,p.length>0?Object(h.jsx)(u.a,{trackList:p,includeTags:!0,includeSearch:!1,showPlaylist:!0,autoPlayNextTrack:!0}):null,Object(h.jsx)(y,{show:m,onClose:function(){return x(!1)},onEdit:c,playlist:r})]})};a(87);var N=function(e){var t=e.activeUser,a=e.playlists,s=e.onAddPlaylist,i=Object(n.useState)(!1),c=Object(l.a)(i,2),r=c[0],u=c[1];if(!t)return Object(h.jsx)(d.a,{to:"/"});var O=a.filter((function(e){return e.userId===t.id})),m=1;return Object(h.jsxs)("div",{className:"p-all-playlists",children:[Object(h.jsx)(b.d,{className:"plus-icon",onClick:function(){return u(!0)}}),Object(h.jsx)("h1",{children:"My Playlists"}),O.length>0?Object(h.jsx)("div",{className:"playlists-tbl",children:Object(h.jsx)(o.a,{striped:!0,bordered:!0,hover:!0,size:"sm",variant:"dark",children:Object(h.jsx)("tbody",{children:O.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:m++}),Object(h.jsx)("td",{children:Object(h.jsx)(j.b,{to:"/playlist/"+e.id,className:"playlist-link",children:e.title})})]})}))})})}):null,Object(h.jsx)(v,{show:r,onClose:function(){return u(!1)},onCreate:s})]})},I=a(106);a(88);var w=function(e){var t=e.album,a=e.artist,n=t.id-1,s=a.id-1;return Object(h.jsxs)(I.a,{className:"album-card",children:[Object(h.jsx)(I.a.Img,{className:"album-img",variant:"top",src:t.image}),Object(h.jsxs)(I.a.Body,{children:[Object(h.jsx)(I.a.Title,{children:Object(h.jsx)(j.b,{to:"/album/"+n,className:"album-link",children:t.title})}),Object(h.jsx)(I.a.Text,{children:Object(h.jsxs)(j.b,{to:"/artist/"+s,className:"artist-link",children:[" ",a.name]})})]})]})};a(89);var C=function(e){var t=e.activeUser,a=e.artists,n=e.albums,s=a[Object(d.g)().index],i=n.filter((function(e){return e.artistId===s.id}));return t?Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"p-artist",children:[Object(h.jsxs)("div",{className:"artist",children:[Object(h.jsx)("h1",{children:s.name}),Object(h.jsx)("img",{className:"artist-img",src:s.image})]}),Object(h.jsx)("div",{className:"artist-albums",children:i.length>0?Object(h.jsx)(f.a,{children:i.map((function(e){return Object(h.jsxs)(p.a,{sm:6,md:2,children:[" ",Object(h.jsx)(w,{album:e,artist:s})]})}))}):null})]})}):Object(h.jsx)(d.a,{to:"/"})};var S=function(e){return e.activeUser?Object(h.jsx)("div",{children:"FavoriteAlbumsPage"}):Object(h.jsx)(d.a,{to:"/"})};var L=function(e){return e.activeUser?Object(h.jsx)("div",{children:"FavoriteArtistsPage"}):Object(h.jsx)(d.a,{to:"/"})};a(90);var P=function(e){var t=e.activeUser,a=e.albums,s=e.artists,i=Object(n.useState)(""),c=Object(l.a)(i,2),r=c[0],j=c[1];if(!t)return Object(h.jsx)(d.a,{to:"/"});var o=s.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())})).map((function(e){return e.id})),b=a.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())||o.includes(e.artistId)})),u=b.filter((function(e){return"Rock"===e.genre})),O=b.filter((function(e){return"Pop"===e.genre})),m=b.filter((function(e){return"R&B"===e.genre})),g=b.filter((function(e){return"Jazz"===e.genre}));return Object(h.jsxs)("div",{className:"p-home",children:[Object(h.jsxs)("div",{className:"home-search",children:[Object(h.jsx)("h1",{children:"Find your music"}),Object(h.jsx)(x.a,{children:Object(h.jsx)(x.a.Control,{type:"text",className:"filter",placeholder:"Search album \\ artist",value:r,onChange:function(e){return j(e.target.value)}})})]}),Object(h.jsxs)("div",{className:"albums-cards",children:[u.length>0?Object(h.jsxs)(f.a,{children:[Object(h.jsx)("h4",{children:"Rock"}),u.map((function(e){return Object(h.jsxs)(p.a,{sm:6,md:2,children:[" ",Object(h.jsx)(w,{album:e,artist:s.find((function(t){return t.id===e.artistId}))})]})}))]}):null,O.length>0?Object(h.jsxs)(f.a,{children:[Object(h.jsx)("h4",{children:"Pop"}),O.map((function(e){return Object(h.jsxs)(p.a,{sm:6,md:2,children:[" ",Object(h.jsx)(w,{album:e,artist:s.find((function(t){return t.id===e.artistId}))})]})}))]}):null,m.length>0?Object(h.jsxs)(f.a,{children:[Object(h.jsx)("h4",{children:"R&B"}),m.map((function(e){return Object(h.jsxs)(p.a,{sm:6,md:2,children:[" ",Object(h.jsx)(w,{album:e,artist:s.find((function(t){return t.id===e.artistId}))})]})}))]}):null,g.length>0?Object(h.jsxs)(f.a,{children:[Object(h.jsx)("h4",{children:"Jazz"}),g.map((function(e){return Object(h.jsxs)(p.a,{sm:6,md:2,children:[" ",Object(h.jsx)(w,{album:e,artist:s.find((function(t){return t.id===e.artistId}))})]})}))]}):null]})]})};a(91);var T=function(){return Object(h.jsxs)("div",{className:"p-landing",children:[Object(h.jsx)("h1",{children:"Welcome To My Music"}),Object(h.jsx)("img",{src:""})]})};var U=function(e){return e.activeUser?Object(h.jsx)("div",{children:"SearchingPage"}):Object(h.jsx)(d.a,{to:"/"})},B=(a(92),a(105)),F=a(104),E=(a(93),a.p+"static/media/logo.27e693a3.jpg");var A=function(e){var t=e.activeUser,a=e.onLogout;return Object(h.jsxs)(B.a,{variant:"dark",className:"navbar navbar-bg",expand:"lg",children:[Object(h.jsx)(B.a.Brand,{href:"#home",children:Object(h.jsx)("img",{src:E,width:"60",className:"logo"})}),Object(h.jsx)(B.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsxs)(B.a.Collapse,{id:"basic-navbar-nav",className:"nav-display",children:[Object(h.jsxs)(F.a,{className:"mr-auto",children:[t?Object(h.jsx)(F.a.Link,{href:"#all-playlists",children:"Playlists"}):null,t?Object(h.jsx)(F.a.Link,{href:"#albums",children:"Albums"}):null,t?Object(h.jsx)(F.a.Link,{href:"#artists",children:"Artists"}):null]}),Object(h.jsxs)(F.a,{className:"ml-auto",children:[t?null:Object(h.jsx)(F.a.Link,{href:"#login",children:"Login"}),t?null:Object(h.jsx)(F.a.Link,{href:"#signup",children:"Signup"}),t?Object(h.jsxs)(B.a.Text,{children:[" Hi ",t.name,"!"]}):null,t?Object(h.jsx)(F.a.Link,{href:"#",onClick:function(){return a()},children:"Logout"}):null]})]})]})},R=a(62),M=a(101);a(94);var G=function(e){var t=e.users,a=e.onLogin,s=e.activeUser,i=Object(n.useState)(""),c=Object(l.a)(i,2),r=c[0],o=c[1],b=Object(n.useState)(""),u=Object(l.a)(b,2),O=u[0],m=u[1],f=Object(n.useState)(!1),p=Object(l.a)(f,2),v=p[0],y=p[1];return s?Object(h.jsx)(d.a,{to:"/home"}):Object(h.jsxs)("div",{className:"p-login",children:[Object(h.jsx)("h1",{children:"Login to My Music"}),Object(h.jsxs)(x.a,{onSubmit:function(e){e.preventDefault();var n,s=null,i=Object(R.a)(t);try{for(i.s();!(n=i.n()).done;){var c=n.value;if(c.login(r,O)){s=c;break}}}catch(l){i.e(l)}finally{i.f()}s?a(s):y(!0)},children:[Object(h.jsxs)(x.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(x.a.Label,{children:"Email address"}),Object(h.jsx)(x.a.Control,{type:"email",placeholder:"Email",value:r,onChange:function(e){return o(e.target.value)}})]}),Object(h.jsxs)(x.a.Group,{controlId:"formBasicPassword",children:[Object(h.jsx)(x.a.Label,{children:"Password"}),Object(h.jsx)(x.a.Control,{type:"password",placeholder:"Password",value:O,onChange:function(e){return m(e.target.value)}})]}),Object(h.jsx)(g.a,{type:"submit",children:"Login"})]}),v?Object(h.jsx)(M.a,{variant:"danger",children:"Invalid Credentials!"}):null,Object(h.jsx)("p",{children:"Don't have an account yet ?"}),Object(h.jsx)(g.a,{type:"button",children:Object(h.jsx)(j.b,{to:"/signup",className:"signup-link",children:"Signup for free"})})]})};a(95);var J=function(e){var t=e.addUser,a=e.activeUser,s=Object(n.useState)(""),i=Object(l.a)(s,2),c=i[0],r=i[1],j=Object(n.useState)(""),o=Object(l.a)(j,2),b=o[0],u=o[1],O=Object(n.useState)(""),m=Object(l.a)(O,2),f=m[0],p=m[1];return a?Object(h.jsx)(d.a,{to:"/home"}):Object(h.jsxs)("div",{className:"p-signup",children:[Object(h.jsx)("h1",{children:"Signup to My Music"}),Object(h.jsxs)(x.a,{children:[Object(h.jsxs)(x.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(x.a.Label,{children:"Full name"}),Object(h.jsx)(x.a.Control,{type:"name",placeholder:"Full name",value:c,onChange:function(e){return r(e.target.value)}})]}),Object(h.jsxs)(x.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(x.a.Label,{children:"Email address"}),Object(h.jsx)(x.a.Control,{type:"email",placeholder:"Email",value:b,onChange:function(e){return u(e.target.value)}})]}),Object(h.jsxs)(x.a.Group,{controlId:"formBasicPassword",children:[Object(h.jsx)(x.a.Label,{children:"Password"}),Object(h.jsx)(x.a.Control,{type:"password",placeholder:"Password",value:f,onChange:function(e){return p(e.target.value)}})]}),Object(h.jsx)(g.a,{variant:"primary",type:"submit",onClick:function(){t(c,b,f),r(""),u(""),p("")},children:"Signup"})]})]})},z=a(63),H=a(64),W=a(65),_=a(66),D=a(67),Z=a(19),q=a(68),K=function(){function e(t){Object(Z.a)(this,e),this.id=t.id,this.name=t.name,this.email=t.email,this.password=t.password,this.albums=t.albums,this.artists=t.artists}return Object(q.a)(e,[{key:"login",value:function(e,t){return e.toLowerCase()===this.email.toLowerCase()&&t===this.password}}]),e}(),Q=function e(t){Object(Z.a)(this,e),this.id=t.id,this.title=t.title,this.artistId=t.artistId,this.year=t.year,this.genre=t.genre,this.image=t.image},V=function e(t){Object(Z.a)(this,e),this.id=t.id,this.name=t.name,this.image=t.image},X=function e(t){Object(Z.a)(this,e),this.id=t.id,this.title=t.title,this.length=t.length,this.albumId=t.albumId,this.play=t.play,this.file=t.file,this.url=t.file,this.tags=[""]},Y=function e(t){Object(Z.a)(this,e),this.id=t.id,this.title=t.title,this.userId=t.userId,this.tracksId=t.tracksId};var $=function(){var e=Object(n.useState)(z.map((function(e){return new K(e)}))),t=Object(l.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(a[0]),c=Object(l.a)(i,2),o=c[0],b=c[1],u=Object(n.useState)(H.map((function(e){return new Q(e)}))),m=Object(l.a)(u,2),x=m[0],f=(m[1],Object(n.useState)(W.map((function(e){return new V(e)})))),p=Object(l.a)(f,2),g=p[0],v=(p[1],Object(n.useState)(_.map((function(e){return new X(e)})))),y=Object(l.a)(v,2),I=y[0],w=y[1],B=Object(n.useState)(D.map((function(e){return new Y(e)}))),F=Object(l.a)(B,2),E=F[0],R=F[1];function M(e,t){var a=Object(r.a)(I);a.map((function(a){a.id===e?a.play=t:a.play=!1})),w(a)}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(A,{activeUser:o,onLogout:function(){return b(null)}}),Object(h.jsx)(j.a,{children:Object(h.jsxs)(d.d,{children:[Object(h.jsx)(d.b,{exact:!0,path:"/",children:Object(h.jsx)(T,{})}),Object(h.jsx)(d.b,{exact:!0,path:"/home",children:Object(h.jsx)(P,{activeUser:o,albums:x,artists:g})}),Object(h.jsx)(d.b,{exact:!0,path:"/login",children:Object(h.jsx)(G,{users:a,onLogin:function(e){return b(e)},activeUser:o})}),Object(h.jsx)(d.b,{exact:!0,path:"/signup",children:Object(h.jsx)(J,{addUser:function(e,t,n){var i=new K({id:a[a.length-1].id+1,name:e,email:t,password:n});s(a.concat(i)),b(i)},activeUser:o})}),Object(h.jsx)(d.b,{exact:!0,path:"/album/:index",children:Object(h.jsx)(O,{activeUser:o,albums:x,tracks:I,artists:g,handlePlayTrack:M})}),Object(h.jsx)(d.b,{exact:!0,path:"/search",children:Object(h.jsx)(U,{activeUser:o})}),Object(h.jsx)(d.b,{exact:!0,path:"/artist/:index",children:Object(h.jsx)(C,{activeUser:o,albums:x,artists:g})}),Object(h.jsx)(d.b,{exact:!0,path:"/all-playlists",children:Object(h.jsx)(N,{activeUser:o,playlists:E,onAddPlaylist:function(e){var t=new Y({id:E[E.length-1].id+1,title:e,userId:o.id});R(E.concat(t))}})}),Object(h.jsx)(d.b,{exact:!0,path:"/playlist/:index",children:Object(h.jsx)(k,{activeUser:o,playlists:E,tracks:I,handlePlayTrack:M,onEditPlaylist:function(e,t){var a=Object(r.a)(E);a.map((function(a){a.id===e&&(a.title=t)})),R(a)}})}),Object(h.jsx)(d.b,{exact:!0,path:"/artists",children:Object(h.jsx)(L,{activeUser:o})}),Object(h.jsx)(d.b,{exact:!0,path:"/albums",children:Object(h.jsx)(S,{activeUser:o})})]})})]})},ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,107)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)($,{})}),document.getElementById("root")),ee()}},[[96,1,2]]]);
//# sourceMappingURL=main.5155957c.chunk.js.map