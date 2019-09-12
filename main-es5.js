(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header (featureSelected)=\"onNavigate($event)\"></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n    <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n            <h2 class=\"text-center\">Register Your Self</h2>\n            <form (ngSubmit)=\"createEmployee(f)\" #f=\"ngForm\">\n              <div class=\"form-group\">\n                <label for=\"username\">Mail:</label>\n                <input type=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" name=\"username\" class=\"form-control\" id=\"username\" >\n              </div>\n              <div class=\"form-group\">\n                <label for=\"password\">Pasword</label>\n                <input [(ngModel)]=\"user.password\" placeholder=\"Password\" type=\"password\" name=\"password\" class=\"form-control\" id=\"password\" required>\n              </div>\n            \n              <button class=\"btn btn-success\" [disabled]=\"!f.valid\" >Create</button>\n            </form>\n            <hr>\n            <h4>Sign in if you have account</h4>\n            <button class=\"btn btn-success\" type=\"button\"  (click)=\"onsignIn()\" >Sign In</button>\n    </div>\n</div>\n    \n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/signin/signin.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/signin/signin.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-img\">\n    <div class=\"row\" >\n        <div class=\"container\" class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n            <h1> Welcome To Recipe Book</h1>\n            <!-- <img src=\"https://i.etsystatic.com/10591113/r/il/e614eb/720407533/il_570xN.720407533_cfek.jpg\"\n            alt=\"pic\">  -->\n        </div>\n        <!-- <div class=\"container\" class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-9\">\n                <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2FUeb5GyS3Uy3yggrjRlPKOMqUkoVJ1RrXRHbLIrkIjrA3uh\"\n                alt=\"pic\">\n            </div> -->\n    </div>\n<div class=\"row\" class=\"container\">\n    <div  class=\"centre\" class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n            <form (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\n                    <div class=\"form-group\">\n                        <label  for=\"email\">Mail</label>\n                        <input type=\"email\" id=\"email\" name=\"email\"  class=\"form-control\" ngModel>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"label\"  for=\"password\">Password</label>\n                        <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"  ngModel>\n                    </div>\n                    <button class=\"btn btn-primary\" type=\"submit\">Sign Up</button>\n                </form>\n    </div>\n</div></div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n        <div class=\"container\">\n            <span class=\"text-muted\"><h4>Welcome to himanshu Recipe Book @Himanshu</h4></span>\n        </div>\n      \n    </footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\" style=\"background-color: #2c1515;\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a routeLink=\"/\" class=\"navbar-brand\">Recipe Book</a>\r\n        </div>\r\n        <div class=\"collaps navbar-collapse\">\r\n            <ul class =\"nav navbar-nav\">\r\n                <li *ngIf=\"loginService.isUserLoggedIn()\" routerLinkActive=\"active\"><a routerLink=\"/recipes\">Recipes</a></li>\r\n                <li  *ngIf=\"loginService.isUserLoggedIn()\" routerLinkActive=\"active\"><a routerLink=\"/shopping-list\">Shopping List</a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a *ngIf=\"!loginService.isUserLoggedIn()\" routerLink=\"/register\">Register</a>  </li>\r\n                <li><a  *ngIf=\"loginService.isUserLoggedIn()\" (click)=\"onLogout()\" routerLink=\"/signin\">Logout</a>  </li>\r\n                <li class=\"dropdown\" appDropdown>\r\n                    <a style=\"cursor: pointer;\" *ngIf=\"loginService.isUserLoggedIn()\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\">Manage<span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a style=\"cursor: pointer;\" >Save Data</a></li>\r\n                        <li><a style=\"cursor: pointer;\">Fetch Data</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-detail/recipe-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-detail/recipe-detail.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <img \n        [src]=\"recipe.imagePath\"\n         alt=\"{{recipe.name}}\" \n         class=\"img-responsive\"\n         style=\"max-height:300px;\">\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <h1>{{recipe.name}}</h1>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col xs-12\">\n        <div class=\"btn-group \"\n        appDropdown >\n            <button type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n                Manage Recipe <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n                <li><a  (click)=\"onAddToShoppingList()\" style=\"cursor: pointer;\">To Shopping List</a> </li>\n                <li><a style=\"cursor: pointer;\" (click)=\"onEditRecipe()\">Edit Recipe</a> </li>\n                <li><a style=\"cursor: pointer;\"(click)=\"onDeleteRecipe()\">Delete Recipe</a> </li>\n            </ul>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n        Description\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n     <ul class=\"list-group\">\n         <li\n            class=\"list-group-item\"\n            *ngFor=\"let ingredient of recipe.ingredients\">\n        {{ ingredient.name}}-{{ingredient.amount}}\n    </li>\n     </ul> \n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-edit/recipe-edit.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-edit/recipe-edit.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <button type=\"submit\" class=\"btn btn-success\"\n                    [disabled]=\"!recipeForm.valid\">\n                    Save</button>\n                    <button type=\"button\" class=\"btn btn-danger\"(click)=\"onCancel()\">Cancel</button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"cl-xs-12\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input\n                           type=\"text\"\n                           id=\"name\"\n                           formControlName=\"name\"\n                           class=\"form-control\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"cl-xs-12\">\n                    <div class=\"form-group\">\n                        <label for=\"imagePath\">Image Url</label>\n                        <input\n                           type=\"text\"\n                           id=\"imagePath\"\n                           formControlName=\"imagePath\"\n                           class=\"form-control\"\n                           #imagePath>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"cl-xs-12\">\n                    <img [src]=\"imagePath.value\" class=\"img-responsive\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"cl-xs-12\">\n                    <div class=\"form-group\">\n                        <label for=\"description\">Description</label>\n                        <textarea\n                           type=\"text\"\n                           id=\"description\"\n                           class=\"form-control\"\n                           formControlName=\"description\"\n                           rows=\"6\"></textarea>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"cl-xs-12\" formArrayName=\"ingredients\">\n                    <div class=\"row\" \n                    *ngFor=\"let ingredientCtrl of recipeForm.get('ingredients').controls;let i=index\"\n                    [formGroupName]=\"i\"\n                    style=\"margin-top: 10px\"\n                    >\n                        <div class=\"col-xs-8\">\n                            <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            formControlName=\"name\">\n                        </div>\n                        <div class=\"col-xs-2\">\n                            <input\n                            type=\"number\"\n                            class=\"form-control\"\n                            formControlName=\"amount\">\n                        </div>  \n                        <div class=\"col-xs-2\">\n                           <button type=\"button\" class=\"btn btn-danger\"  (click)=\"onDeleteIngredient(i)\">X</button>\n                        </div>                      \n                    </div>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                            <button type=\"button\"  class=\"btn btn-success\" (click)=\"onAddIngredient()\">Add Ingredient</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a     \n       style=\"cursor: pointer;\"\n       [routerLink]=\"[index]\"\n       routerLinkActive=\"active\"\n       class=\"list-group-item clearfix \">\n           <div class=\"pull-left\">\n               <h4 class=\"list-group-item-heading\"> {{recipe.name}}</h4>\n               <p class=\"list-group-item-text\">{{recipe.description}}</p>\n            </div>\n               <span class=\"pull-right\">\n                   <img \n                   [src]=\"recipe.imagePath\"\n                    alt=\"{{recipe.name}}\"\n                     class=\"img-responsive\"\n                      style=\"max-height:50px;\">\n                </span>\n            </a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-list/recipe-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <button class=\"btn btn-success\" (click)=\"onNewRecipe()\">New Recipe</button>\n    </div>\n</div>\n<hr>\n<div class=\"row\">\n   <div class=\"col-xs-12\">\n        <app-recipe-item  \n        *ngFor=\"let recipeEl of recipes;let i=index\"\n        [recipe]=\"recipeEl\"\n        [index]=\"i\"></app-recipe-item>\n   </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-start/recipe-start.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-start/recipe-start.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1><b>Please select a Recipe from the tab</b></h1>\r\n<img src=\"http://icons.iconarchive.com/icons/iconsmind/outline/256/Cursor-Select-icon.png\" alt=\"selct a recipe\">"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipes.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipes.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-5\">\n      <app-recipe-list></app-recipe-list>\n    </div>\n    <div class=\"col-md-7\">\n     <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/registerconfirmation/registerconfirmation.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registerconfirmation/registerconfirmation.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n        <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n                <h2 class=\"text-center\">Account Registerd</h2>\n        </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping-list/shopping-edit/shopping-edit.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <form (ngSubmit)=\"onAddItem(f)\" #f=\"ngForm\">\n            <div class=\"row\">\n                    <div class=\"col-sm-5 form-group\">\n                     <label for=\"name\">Name</label>\n                     <input \n                     type=\"text\" \n                     id=\"name\" \n                     class=\"form-control\" \n                     name=\"name\"\n                     ngModel\n                     required\n                      >\n                    </div>\n                    <div class=\"col-sm-2 form-group\">\n                        <label for=\"amount\">Amount</label>\n                        <input \n                        type=\"number\" \n                        id=\"amount\" \n                        class=\"form-control\" \n                        name=\"amount\"\n                        ngModel\n                        required\n                        pattern=\"^[1-9]+[0-9]*$\"\n                        >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-12\">\n                        <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">{{editMode?'Update':'Add'}}</button>\n                        <button \n                        class=\"btn btn-danger\" \n                        type=\"button\"   \n                         (click)=\"onDelete()\"\n                          *ngIf=\"editMode\">\n                         Delete</button>\n                        <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n                    </div>\n                </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-list.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping-list/shopping-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-10\">\n        <app-shopping-edit></app-shopping-edit>\n        <hr>\n        <ul class=\"list-group\">\n        <a class=\"list-group-item\" \n        style=\"cursor: pointer\"\n        *ngFor=\"let ingredient of ingredients;let i=index\"\n        (click)=\"onEditItem(i)\"\n        >\n          {{ingredient.name}}({{ingredient.amount}})\n        </a>\n        </ul>\n        <img src=\"https://www.eatforhealth.gov.au/sites/default/files/images/home_header_01.jpg\" alt=\"shop\">\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipes/recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes/recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _registerconfirmation_registerconfirmation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registerconfirmation/registerconfirmation.component */ "./src/app/registerconfirmation/registerconfirmation.component.ts");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/auth-guard.service */ "./src/app/service/auth-guard.service.ts");












var routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'recipes', component: _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__["RecipesComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]], children: [
            { path: '', component: _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__["RecipeStartComponent"] },
            { path: 'new', component: _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"] },
            { path: ':id', component: _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_6__["RecipeDetailComponent"] },
            { path: ':id/edit', component: _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"] }
        ] },
    { path: 'shopping-list', component: _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingListComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] },
    { path: 'signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'register/success', component: _registerconfirmation_registerconfirmation_component__WEBPACK_IMPORTED_MODULE_10__["RegisterconfirmationComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.loadedFeature = 'recipe';
    }
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-list.component */ "./src/app/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipes/recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-item/recipe-item.component */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shopping-list/shopping-edit/shopping-edit.component */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recipes/recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./recipes/recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./recipes/recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _registerconfirmation_registerconfirmation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./registerconfirmation/registerconfirmation.component */ "./src/app/registerconfirmation/registerconfirmation.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





















//import { BasicAuthHtppInterceptorService } from './service/basic-auth-http-interceptor.service';


//import { SkippableInterceptorComponent } from './service/skippable-interceptor/skippable-interceptor.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_6__["RecipesComponent"],
                _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_7__["RecipeListComponent"],
                _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_8__["RecipeDetailComponent"],
                _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_9__["RecipeItemComponent"],
                _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_10__["ShoppingListComponent"],
                _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingEditComponent"],
                _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__["DropdownDirective"],
                _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_14__["RecipeStartComponent"],
                _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_15__["RecipeEditComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__["SigninComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _registerconfirmation_registerconfirmation_component__WEBPACK_IMPORTED_MODULE_21__["RegisterconfirmationComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"]
            ],
            providers: [_shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_13__["ShoppingListService"], _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_17__["RecipeService"],],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

//{ provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true }


/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/httpclient.service */ "./src/app/service/httpclient.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(httpClientService, router, route) {
        this.httpClientService = httpClientService;
        this.router = router;
        this.route = route;
        this.user = new src_app_service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["Employee"]("", "");
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.createEmployee = function (form) {
        var _this = this;
        var value = form.value;
        var newEmployee = new src_app_service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["Employee"](value.username, value.password);
        console.log(newEmployee);
        this.httpClientService.createEmployee(newEmployee)
            .subscribe(function (data) {
            alert("Employee created successfully.");
            _this.router.navigate(['register/success']);
        });
    };
    RegisterComponent.prototype.onsignIn = function () {
        this.router.navigate(['/signin']);
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: src_app_service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-img {\r\n    background-image: url('/assets/login.jpg'); \r\n    min-height: 565px;\r\n    \r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n  .container {\r\n    position: absolute;\r\n    margin: 100px;\r\n    max-width: 500px;\r\n    padding: 10px;\r\n    \r\n  }\r\n  .label{\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQ0FBMEM7SUFDMUMsaUJBQWlCOztJQUVqQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7O0VBRWY7RUFDRjtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1pbWcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2xvZ2luLmpwZycpOyBcclxuICAgIG1pbi1oZWlnaHQ6IDU2NXB4O1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDEwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxuICB9XHJcbi5sYWJlbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SigninComponent = /** @class */ (function () {
    function SigninComponent(loginservice, router) {
        this.loginservice = loginservice;
        this.router = router;
        this.username = '';
        this.password = '';
        this.invalidLogin = false;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignin = function (form) {
        var _this = this;
        var value = form.value;
        this.username = value.email;
        this.password = value.password;
        (this.loginservice.authenticate(this.username, this.password).subscribe(function (data) {
            _this.router.navigate(['/recipes']);
            _this.invalidLogin = false;
        }, function (error) {
            _this.invalidLogin = true;
        }));
    };
    SigninComponent.ctorParameters = function () { return [
        { type: src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        })
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: absolute;\r\n    width:100%;\r\n    height: 40px;\r\n    background-color: #2c1515;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMTUxNTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");



//import { Component } from '@angular/core';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginService) {
        this.loginService = loginService;
    }
    HeaderComponent.prototype.onLogout = function () {
        console.log("hi");
        this.loginService.logOut();
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.recipe = _this.recipeService.getRecipe(_this.id);
        });
    };
    RecipeDetailComponent.prototype.onAddToShoppingList = function () {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    };
    RecipeDetailComponent.prototype.onEditRecipe = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
    };
    RecipeDetailComponent.prototype.onDeleteRecipe = function () {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    };
    RecipeDetailComponent.ctorParameters = function () { return [
        { type: _recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    RecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-detail',
            template: __webpack_require__(/*! raw-loader!./recipe-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__(/*! ./recipe-detail.component.css */ "./src/app/recipes/recipe-detail/recipe-detail.component.css")]
        })
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched,textarea.ng-invalid.ng-touched{\r\n    border:1px solid red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9yZWNpcGUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9yZWNpcGUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLHRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function() { return RecipeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recipe.model */ "./src/app/recipes/recipe.model.ts");






var RecipeEditComponent = /** @class */ (function () {
    function RecipeEditComponent(route, recipeService, router) {
        this.route = route;
        this.recipeService = recipeService;
        this.router = router;
        this.editMode = false;
    }
    RecipeEditComponent.prototype.onSubmit = function () {
        //  console.log(this.recipeForm);
        var newRecipe = new _recipe_model__WEBPACK_IMPORTED_MODULE_5__["Recipe"](this.recipeForm.value['name'], this.recipeForm.value['description'], this.recipeForm.value['imagePath'], this.recipeForm.value['ingredients']);
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, newRecipe);
        }
        else {
            this.recipeService.addRecipe(newRecipe);
        }
        this.onCancel();
    };
    RecipeEditComponent.prototype.onAddIngredient = function () {
        this.recipeForm.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
        }));
    };
    RecipeEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            console.log(_this.editMode);
            _this.initForm();
        });
    };
    RecipeEditComponent.prototype.onDeleteIngredient = function (index) {
        this.recipeForm.get('ingredients').removeAt(index);
    };
    RecipeEditComponent.prototype.initForm = function () {
        var e_1, _a;
        var recipeName = '';
        var recipeImagePath = '';
        var recipeDescription = '';
        var recipeIngredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        if (this.editMode) {
            var recipe = this.recipeService.getRecipe(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
            if (recipe['ingredients']) {
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](recipe.ingredients), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var ingredient = _c.value;
                        recipeIngredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ingredient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ingredient.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
                        }));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'imagePath': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeImagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'ingredients': recipeIngredients
        });
    };
    RecipeEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    RecipeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-edit',
            template: __webpack_require__(/*! raw-loader!./recipe-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-edit/recipe-edit.component.html"),
            styles: [__webpack_require__(/*! ./recipe-edit.component.css */ "./src/app/recipes/recipe-edit/recipe-edit.component.css")]
        })
    ], RecipeEditComponent);
    return RecipeEditComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent() {
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], RecipeItemComponent.prototype, "recipe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], RecipeItemComponent.prototype, "index", void 0);
    RecipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-item',
            template: __webpack_require__(/*! raw-loader!./recipe-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html"),
            styles: [__webpack_require__(/*! ./recipe-item.component.css */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css")]
        })
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(recipeService, router, route) {
        this.recipeService = recipeService;
        this.router = router;
        this.route = route;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipeService.recipesChanged
            .subscribe(function (recipes) {
            _this.recipes = recipes;
        });
        this.recipes = this.recipeService.getRecipes();
    };
    RecipeListComponent.prototype.onNewRecipe = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    RecipeListComponent.ctorParameters = function () { return [
        { type: _recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-list',
            template: __webpack_require__(/*! raw-loader!./recipe-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-list.component.html"),
            styles: [__webpack_require__(/*! ./recipe-list.component.css */ "./src/app/recipes/recipe-list/recipe-list.component.css")]
        })
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLXN0YXJ0L3JlY2lwZS1zdGFydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.ts ***!
  \****************************************************************/
/*! exports provided: RecipeStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeStartComponent", function() { return RecipeStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipeStartComponent = /** @class */ (function () {
    function RecipeStartComponent() {
    }
    RecipeStartComponent.prototype.ngOnInit = function () {
    };
    RecipeStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-start',
            template: __webpack_require__(/*! raw-loader!./recipe-start.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-start/recipe-start.component.html"),
            styles: [__webpack_require__(/*! ./recipe-start.component.css */ "./src/app/recipes/recipe-start/recipe-start.component.css")]
        })
    ], RecipeStartComponent);
    return RecipeStartComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe.model.ts":
/*!*****************************************!*\
  !*** ./src/app/recipes/recipe.model.ts ***!
  \*****************************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(name, description, imagePath, ingredients) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    Recipe.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: Array }
    ]; };
    return Recipe;
}());



/***/ }),

/***/ "./src/app/recipes/recipe.service.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipe.service.ts ***!
  \*******************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe.model */ "./src/app/recipes/recipe.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");






var RecipeService = /** @class */ (function () {
    function RecipeService(slService) {
        this.slService = slService;
        this.recipesChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.recipes = [
            new _recipe_model__WEBPACK_IMPORTED_MODULE_1__["Recipe"]('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg', [new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Meat', 1), new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('French Fries', 20)]),
            new _recipe_model__WEBPACK_IMPORTED_MODULE_1__["Recipe"]('Another Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg', [new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Bread', 2), new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Meat', 2)])
        ];
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipeService.prototype.getRecipe = function (index) {
        return this.recipes[index];
    };
    RecipeService.prototype.addIngredientsToShoppingList = function (ingredients) {
        this.slService.addIngredients(ingredients);
    };
    RecipeService.prototype.addRecipe = function (recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.updateRecipe = function (index, newRecipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.deleteRecipe = function (index) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.ctorParameters = function () { return [
        { type: _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingListService"] }
    ]; };
    RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.component.css":
/*!***********************************************!*\
  !*** ./src/app/recipes/recipes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { RecipeService } from './recipe.service';
var RecipesComponent = /** @class */ (function () {
    function RecipesComponent() {
    }
    RecipesComponent.prototype.ngOnInit = function () {
    };
    RecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! raw-loader!./recipes.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipes.component.html"),
            styles: [__webpack_require__(/*! ./recipes.component.css */ "./src/app/recipes/recipes.component.css")]
        })
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/registerconfirmation/registerconfirmation.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/registerconfirmation/registerconfirmation.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyY29uZmlybWF0aW9uL3JlZ2lzdGVyY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/registerconfirmation/registerconfirmation.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/registerconfirmation/registerconfirmation.component.ts ***!
  \************************************************************************/
/*! exports provided: RegisterconfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterconfirmationComponent", function() { return RegisterconfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterconfirmationComponent = /** @class */ (function () {
    function RegisterconfirmationComponent() {
    }
    RegisterconfirmationComponent.prototype.ngOnInit = function () {
    };
    RegisterconfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registerconfirmation',
            template: __webpack_require__(/*! raw-loader!./registerconfirmation.component.html */ "./node_modules/raw-loader/index.js!./src/app/registerconfirmation/registerconfirmation.component.html"),
            styles: [__webpack_require__(/*! ./registerconfirmation.component.css */ "./src/app/registerconfirmation/registerconfirmation.component.css")]
        })
    ], RegisterconfirmationComponent);
    return RegisterconfirmationComponent;
}());



/***/ }),

/***/ "./src/app/service/auth-guard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/auth-guard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.isUserLoggedIn())
            return true;
        this.router.navigate(['login']);
        return false;
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: User, JwtResponse, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtResponse", function() { return JwtResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var User = /** @class */ (function () {
    function User(status) {
        this.status = status;
    }
    User.ctorParameters = function () { return [
        { type: String }
    ]; };
    return User;
}());

var JwtResponse = /** @class */ (function () {
    function JwtResponse(jwttoken) {
        this.jwttoken = jwttoken;
    }
    JwtResponse.ctorParameters = function () { return [
        { type: String }
    ]; };
    return JwtResponse;
}());

var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient) {
        this.httpClient = httpClient;
    }
    AuthenticationService.prototype.authenticate = function (username, password) {
        return this.httpClient.post('http://localhost:8080/authenticate', { username: username, password: password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (userData) {
            sessionStorage.setItem('username', username);
            var tokenStr = 'Bearer ' + userData.token;
            sessionStorage.setItem('token', tokenStr);
            return userData;
        }));
    };
    AuthenticationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem('username');
        //console.log(!(user === null))
        return !(user === null);
    };
    AuthenticationService.prototype.logOut = function () {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/httpclient.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/httpclient.service.ts ***!
  \***********************************************/
/*! exports provided: Employee, HttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientService", function() { return HttpClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");




//import { InterceptorSkipHeader } from './skippable-interceptor.service';
var Employee = /** @class */ (function () {
    function Employee(username, password) {
        this.username = username;
        this.password = password;
    }
    Employee.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return Employee;
}());

var HttpClientService = /** @class */ (function () {
    function HttpClientService(httpClient, loginService) {
        this.httpClient = httpClient;
        this.loginService = loginService;
    }
    //    getEmployees()
    // {
    //   let username='javainuse'
    //   let password='password'
    //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    //      return this.httpClient.get<Employee[]>('http://localhost:8080/employees',{headers});
    // }
    // public deleteEmployee(employee) {
    //   let username='javainuse'
    //   let password='password'
    //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    //   return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/"+ employee.empId,{headers});
    // }
    HttpClientService.prototype.createEmployee = function (employee) {
        console.log(employee);
        //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.httpClient.post("http://localhost:8080/register", employee);
    };
    HttpClientService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    HttpClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HttpClientService);
    return HttpClientService;
}());



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open')
    ], DropdownDirective.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    Ingredient.ctorParameters = function () { return [
        { type: String },
        { type: Number }
    ]; };
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctZWRpdC9zaG9wcGluZy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent(slService, router, route) {
        this.slService = slService;
        this.router = router;
        this.route = route;
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.slService.startredEditing
            .subscribe(function (index) {
            _this.editMode = true;
            _this.editedItemIndex = index;
            _this.editedItem = _this.slService.getIngredient(index);
            _this.slForm.setValue({
                name: _this.editedItem.name,
                amount: _this.editedItem.amount
            });
        });
    };
    //
    ShoppingEditComponent.prototype.onAddItem = function (form) {
        var value = form.value;
        var newIngredient = new src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"](value.name, value.amount);
        if (this.editMode) {
            this.slService.updateIngredient(this.editedItemIndex, newIngredient);
        }
        else {
            this.slService.addIngredient(newIngredient);
        }
        this.editMode = false;
        form.reset();
    };
    ShoppingEditComponent.prototype.onClear = function () {
        this.slForm.reset();
        this.editMode = false;
    };
    ShoppingEditComponent.prototype.onDelete = function () {
        this.slService.deleteIngredient(this.editedItemIndex);
        this.onClear();
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShoppingEditComponent.ctorParameters = function () { return [
        { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
    ], ShoppingEditComponent.prototype, "slForm", void 0);
    ShoppingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-edit',
            template: __webpack_require__(/*! raw-loader!./shopping-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html"),
            styles: [__webpack_require__(/*! ./shopping-edit.component.css */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css")]
        })
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");



var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(slService) {
        this.slService = slService;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.slService.getIngredients();
        this.subscription = this.slService.ingredientChanged
            .subscribe(function (ingredients) {
            _this.ingredients = ingredients;
        });
    };
    ShoppingListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShoppingListComponent.prototype.onEditItem = function (index) {
        this.slService.startredEditing.next(index);
    };
    ShoppingListComponent.ctorParameters = function () { return [
        { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"] }
    ]; };
    ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-list',
            template: __webpack_require__(/*! raw-loader!./shopping-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__(/*! ./shopping-list.component.css */ "./src/app/shopping-list/shopping-list.component.css")]
        })
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.service.ts ***!
  \********************************************************/
/*! exports provided: ShoppingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListService", function() { return ShoppingListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        this.ingredientChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.startredEditing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ingredients = [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Apples', 5),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Tomatoes', 10)
        ];
    }
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.addIngredients = function (ingredients) {
        var _a;
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        (_a = this.ingredients).push.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](ingredients));
        this.ingredientChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.getIngredient = function (index) {
        return this.ingredients[index];
    };
    ShoppingListService.prototype.updateIngredient = function (index, newIngredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.deleteIngredient = function (index) {
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    };
    return ShoppingListService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AngularProject\my-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map