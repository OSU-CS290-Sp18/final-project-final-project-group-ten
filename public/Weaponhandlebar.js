(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['Weapon'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!--Single weapon template models-->                  \r\n                    \r\n                    	<article class=\"item\" id=\""
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "\">\r\n							<p class=\"weapon-name\">\r\n								"
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "\r\n							</p>\r\n							<p class=\"price\">\r\n								Price: "
    + alias4(((helper = (helper = helpers.Price || (depth0 != null ? depth0.Price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Price","hash":{},"data":data}) : helper)))
    + "\r\n							</p>\r\n							<img src=\""
    + alias4(((helper = (helper = helpers.PhotoURL || (depth0 != null ? depth0.PhotoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PhotoURL","hash":{},"data":data}) : helper)))
    + "\" class=\"picture\"> <!--The picture of the item-->\r\n							<button class=\"buy\">Buy</button>\r\n						</article>\r\n";
},"useData":true});
})();