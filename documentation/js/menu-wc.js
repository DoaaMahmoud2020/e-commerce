'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">e-commerce documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-6d436da3fd0a808bdc5ddefeb72a2e34309c9ebd14bf587ec1abb4b8a07a81c2da2b2fc2d97c0277a5ac152b7ef00ed6ecbc60ca997d1ad9626eac8446e06ac8"' : 'data-bs-target="#xs-components-links-module-AppModule-6d436da3fd0a808bdc5ddefeb72a2e34309c9ebd14bf587ec1abb4b8a07a81c2da2b2fc2d97c0277a5ac152b7ef00ed6ecbc60ca997d1ad9626eac8446e06ac8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6d436da3fd0a808bdc5ddefeb72a2e34309c9ebd14bf587ec1abb4b8a07a81c2da2b2fc2d97c0277a5ac152b7ef00ed6ecbc60ca997d1ad9626eac8446e06ac8"' :
                                            'id="xs-components-links-module-AppModule-6d436da3fd0a808bdc5ddefeb72a2e34309c9ebd14bf587ec1abb4b8a07a81c2da2b2fc2d97c0277a5ac152b7ef00ed6ecbc60ca997d1ad9626eac8446e06ac8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactUsModule.html" data-type="entity-link" >ContactUsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactUsRoutingModule.html" data-type="entity-link" >ContactUsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProductsModule-81ff28ac5973100efb4ed2599f0fa8e2b8d3d7127ab5f7e04c7e08373933df045c6be5fb3163c81eb04d551c2a3126f3271639b74dab983065b24a909fb88daf"' : 'data-bs-target="#xs-components-links-module-ProductsModule-81ff28ac5973100efb4ed2599f0fa8e2b8d3d7127ab5f7e04c7e08373933df045c6be5fb3163c81eb04d551c2a3126f3271639b74dab983065b24a909fb88daf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductsModule-81ff28ac5973100efb4ed2599f0fa8e2b8d3d7127ab5f7e04c7e08373933df045c6be5fb3163c81eb04d551c2a3126f3271639b74dab983065b24a909fb88daf"' :
                                            'id="xs-components-links-module-ProductsModule-81ff28ac5973100efb4ed2599f0fa8e2b8d3d7127ab5f7e04c7e08373933df045c6be5fb3163c81eb04d551c2a3126f3271639b74dab983065b24a909fb88daf"' }>
                                            <li class="link">
                                                <a href="components/CategoryProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductAddEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductAddEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewProductComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsRoutingModule.html" data-type="entity-link" >ProductsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-027690771e87315927ea809f3ecc2ab42235da3f547462b16a311c33b9db72d7c3b8c5556ca1474ca245ab136ba58ec22fa4f38619dcd1abd6614b565ebb8af9"' : 'data-bs-target="#xs-components-links-module-SharedModule-027690771e87315927ea809f3ecc2ab42235da3f547462b16a311c33b9db72d7c3b8c5556ca1474ca245ab136ba58ec22fa4f38619dcd1abd6614b565ebb8af9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-027690771e87315927ea809f3ecc2ab42235da3f547462b16a311c33b9db72d7c3b8c5556ca1474ca245ab136ba58ec22fa4f38619dcd1abd6614b565ebb8af9"' :
                                            'id="xs-components-links-module-SharedModule-027690771e87315927ea809f3ecc2ab42235da3f547462b16a311c33b9db72d7c3b8c5556ca1474ca245ab136ba58ec22fa4f38619dcd1abd6614b565ebb8af9"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotAuthorizedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotAuthorizedComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ContactUsComponent.html" data-type="entity-link" >ContactUsComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CommonService.html" data-type="entity-link" >CommonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalService.html" data-type="entity-link" >LocalService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Rating.html" data-type="entity-link" >Rating</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/userModel.html" data-type="entity-link" >userModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/userModel-1.html" data-type="entity-link" >userModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/userPermission.html" data-type="entity-link" >userPermission</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/userPermission-1.html" data-type="entity-link" >userPermission</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});