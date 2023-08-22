import nextId from "react-id-generator";
export function GetAccordionData(data: any, provider: string) {
    let returnData: any;

    switch (provider) {
        case "strapi":
            returnData = data.map((accordion: { id: any; Title: any; Description: any; }) => {
                return {
                    "id": accordion?.id ? accordion.id : '1',
                    "title": accordion?.Title ? accordion.Title : "",
                    "description": accordion?.Description ? JSON.stringify(accordion.Description) : ""
                }
            })
            break;
        case "contentful":
            returnData = data.map((accordion: { id: any; title: any; description: any; }) => {
                return {
                    "id": nextId(),
                    "title": accordion?.title ? accordion.title : "",
                    "description": accordion?.description ? accordion.description : ""
                }
            })
            break;
        default:
            returnData = [{
                "id": "1",
                "title": "Name",
                "description": `<div class="mb-4 mt-2"><label for="fname">First name : &nbsp;</label><input type="text" id="fname" name="fname" ></div><div class="mb-4"><label for="lname">Last name : &nbsp;</label><input type="text" id="lname" name="lname" ></div><input type="submit" value="Search" class="btn btn-secondary">`,
            },
            {
                "id": "2",
                "title": "Location",
                "description": `<ul class="child-list">
                <div class="middle-align">
                    <span>
                        <input tabindex="0" id="regionid_0" type="checkbox">
                        <label for="regionid_0" class="CI-filter " style="cursor: pointer;">Africa</label>
                    </span>
            
                </div>
                <ul class="sub-child-list ">
                    <!-- ngRepeat: city in subFilter.city track by $index -->
                    <!-- ngIf: city.hideInFacet !== '1'  -->
                    <li class="facets margin-tb-8 ng-scope" ng-if="city.hideInFacet !== '1' "
                        ng-repeat="city in subFilter.city track by $index" ng-init="CCI = $index">
                        <input tabindex="0" id="239F0059AFRIC_0" type="checkbox" ng-disabled="checkBoxValues[PI][CI]['']"
                            ng-model="checkBoxValues[PI][CI][CCI]"
                            ng-click="ieCheck(PI,CI,CCI); addShowFilter(PI,CI,CCI,city.urlKey)"
                            ng-init="checkBoxValues[PI][CI][CCI]" ngesc="filterChildCityListShow(CI)">
                        <label for="239F0059AFRIC_0" class="CCI-filter ng-binding"
                            ng-bind-html="htmlRenderer(city.name)">Abuja</label>
                    </li><!-- end ngIf: city.hideInFacet !== '1'  -->
                    <!-- end ngRepeat: city in subFilter.city track by $index -->
                    <!-- ngIf: city.hideInFacet !== '1'  -->
                    <li class="facets margin-tb-8 ng-scope" ng-if="city.hideInFacet !== '1' "
                        ng-repeat="city in subFilter.city track by $index" ng-init="CCI = $index">
                        <input tabindex="0" id="239F0059AFRIC_1" type="checkbox" ng-disabled="checkBoxValues[PI][CI]['']"
                            ng-model="checkBoxValues[PI][CI][CCI]"
                            ng-click="ieCheck(PI,CI,CCI); addShowFilter(PI,CI,CCI,city.urlKey)"
                            ng-init="checkBoxValues[PI][CI][CCI]" ngesc="filterChildCityListShow(CI)">
                        <label for="239F0059AFRIC_1" class="CCI-filter ng-binding"
                            ng-bind-html="htmlRenderer(city.name)">Cairo</label>
                    </li><!-- end ngIf: city.hideInFacet !== '1'  -->
                    <!-- end ngRepeat: city in subFilter.city track by $index -->
                    <!-- ngIf: city.hideInFacet !== '1'  -->
                    <li class="facets margin-tb-8 ng-scope" ng-if="city.hideInFacet !== '1' "
                        ng-repeat="city in subFilter.city track by $index" ng-init="CCI = $index">
                        <input tabindex="0" id="239F0059AFRIC_2" type="checkbox" ng-disabled="checkBoxValues[PI][CI]['']"
                            ng-model="checkBoxValues[PI][CI][CCI]"
                            ng-click="ieCheck(PI,CI,CCI); addShowFilter(PI,CI,CCI,city.urlKey)"
                            ng-init="checkBoxValues[PI][CI][CCI]" ngesc="filterChildCityListShow(CI)">
                        <label for="239F0059AFRIC_2" class="CCI-filter ng-binding" ng-bind-html="htmlRenderer(city.name)">Cape
                            Town</label>
                    </li><!-- end ngIf: city.hideInFacet !== '1'  -->
                    <!-- end ngRepeat: city in subFilter.city track by $index -->
                    <!-- ngIf: city.hideInFacet !== '1'  -->
                    <li class="facets margin-tb-8 ng-scope" ng-if="city.hideInFacet !== '1' "
                        ng-repeat="city in subFilter.city track by $index" ng-init="CCI = $index">
                        <input tabindex="0" id="239F0059AFRIC_3" type="checkbox" ng-disabled="checkBoxValues[PI][CI]['']"
                            ng-model="checkBoxValues[PI][CI][CCI]"
                            ng-click="ieCheck(PI,CI,CCI); addShowFilter(PI,CI,CCI,city.urlKey)"
                            ng-init="checkBoxValues[PI][CI][CCI]" ngesc="filterChildCityListShow(CI)"> <label for="239F0059AFRIC_3"
                            class="CCI-filter ng-binding" ng-bind-html="htmlRenderer(city.name)">Casablanca</label>
            
                    </li><!-- end ngIf: city.hideInFacet !== '1'  -->
                    <!-- end ngRepeat: city in subFilter.city track by $index -->
                </ul>
                </li> 
                <div class="middle-align">
                    <span>
                        <input tabindex="0" id="regionid_1" type="checkbox"
                            ng-click="ieCheck(PI,CI,''); addShowFilter(PI,CI,null,subFilter.urlKey)"
                            ng-model="checkBoxValues[PI][CI]['']" ng-init="checkBoxValues[PI][CI][''] = false"
                            ngesc="filterChildListShow(PI)">
                        <label for="regionid_1" class="CI-filter ng-binding"
                            ng-style="{'cursor': subFilter.city.length > 0 ? 'pointer':'context-menu'}"
                            ng-bind-html="htmlRenderer(subFilter.name)" style="cursor: pointer;">ASEAN</label>
                    </span>
                    <!-- ngIf: subFilter.city.length > 0 --><span tabindex="0" ng-if="subFilter.city.length > 0"
                        ng-click="filterChildCityListShow(CI)" class="city-open ng-scope"
                        ng-class="{'active': subFilterCity[CI]}" ng-init="subFilterCity[CI] = false"></span>
                    <!-- end ngIf: subFilter.city.length > 0 -->
            
                </div>
                <ul class="sub-child-list ng-hide"  >        
                    <li class="facets margin-tb-8 ng-scope" >
                        <input tabindex="0" id="41F3E04CASEAN_0" type="checkbox" >
                        <label for="41F3E04CASEAN_0" class="CCI-filter ng-binding">Hanoi</label>
                    </li>
                    <li class="facets margin-tb-8 ng-scope" >
                        <input tabindex="0" id="41F3E04CASEAN_1" type="checkbox" >
                        <label for="41F3E04CASEAN_1" class="CCI-filter ng-binding" >Ho Chi MInh City</label>
                    </li>
                    <li class="facets margin-tb-8 ng-scope" >
                        <input tabindex="0" id="41F3E04CASEAN_2" type="checkbox" >
                        <label for="41F3E04CASEAN_2">Jakarta</label>
                    </li>
                    <li class="facets margin-tb-8 ng-scope" >
                        <input tabindex="0" id="41F3E04CASEAN_3" type="checkbox" >
                        <label for="41F3E04CASEAN_3" class="CCI-filter ng-binding" >Kuala Lumpur</label>
                    </li>
                    <li class="facets margin-tb-8 ng-scope" >
                        <input tabindex="0" id="41F3E04CASEAN_4" type="checkbox" >
                        <label for="41F3E04CASEAN_4" class="CCI-filter ng-binding">Singapore</label>
                    </li>
                    <li class="facets margin-tb-8 ng-scope" ng-if="city.hideInFacet !== '1' "
                        ng-repeat="city in subFilter.city track by $index" ng-init="CCI = $index">
                        <input tabindex="0" id="41F3E04CASEAN_5" type="checkbox" >
                        <label for="41F3E04CASEAN_5" class="CCI-filter ng-binding"
                            ng-bind-html="htmlRenderer(city.name)">Yangon</label>
                    </li><!-- end ngIf: city.hideInFacet !== '1'  -->
                    <!-- end ngRepeat: city in subFilter.city track by $index -->
                </ul>
            </ul>`,
            }
            ]
            break;
    }
    return returnData;
}