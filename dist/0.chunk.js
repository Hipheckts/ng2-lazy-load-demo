webpackJsonp([0],{293:function(t,n,o){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var a=o(1),u=o(604),s=o(602),r=o(603),c=function i(){e(this,i)};c=__decorate([a.NgModule({imports:[u.subRouting],declarations:[s.SubAppComponent,r.SubHomeComponent]}),__metadata("design:paramtypes",[])],c),n.SubModule=c},602:function(t,n,o){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var a=o(1),u=function s(){e(this,s)};u=__decorate([a.Component({selector:"sub-home",template:"\n    <h2>Sub App</h2>\n    <router-outlet></router-outlet>\n  "}),__metadata("design:paramtypes",[])],u),n.SubAppComponent=u},603:function(t,n,o){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var a=o(1),u=function s(){e(this,s)};u=__decorate([a.Component({selector:"sub-home",template:"\n    <h3>Sub Home Component</h3>\n  "}),__metadata("design:paramtypes",[])],u),n.SubHomeComponent=u},604:function(t,n,o){"use strict";var e=o(294),a=o(602),u=o(603);n.subRoutes=[{path:"",component:a.SubAppComponent,children:[{path:"",component:u.SubHomeComponent}]}],n.subRouting=e.RouterModule.forChild(n.subRoutes)}});