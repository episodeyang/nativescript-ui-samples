
import viewModel = require("./observable-array-model");
import listViewModule = require("nativescript-telerik-ui/list-view");

export function onPageLoaded(args){
    var page = args.object;

    page.bindingContext = new viewModel.ViewModel();
}
