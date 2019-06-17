$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchResults.feature");
formatter.feature({
  "line": 1,
  "name": "Search Results. Where one can sort, filter and see details of resulting products.",
  "description": "",
  "id": "search-results.-where-one-can-sort,-filter-and-see-details-of-resulting-products.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Search and verify results",
  "description": "",
  "id": "search-results.-where-one-can-sort,-filter-and-see-details-of-resulting-products.;search-and-verify-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@001"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am a non-registered customer",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to www.ebay.co.uk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I search for an item",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I get a list of matching results",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the resulting items cards show: postage price, No of bids, price or show BuyItNow tag",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can sort the results by Lowest Price",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the results are listed in the page in the correct order",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can sort the results by Highest Price",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the results are listed in the page in the correct order",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I can filter the results by \u0027Buy it now\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "all the results shown in the page have the \u0027Buy it now\u0027 tag",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.i_am_a_non_registered_customer()"
});
formatter.result({
  "duration": 6602685887,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_navigate_to_www_ebay_co_uk()"
});
formatter.result({
  "duration": 16425368783,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_search_for_an_item()"
});
formatter.result({
  "duration": 39530214436,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_get_a_list_of_matching_results()"
});
formatter.result({
  "duration": 1392557343,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_resulting_items_cards_show_postage_price_No_of_bids_price_or_show_BuyItNow_tag()"
});
formatter.result({
  "duration": 4598122817,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_can_sort_the_results_by_Lowest_Price()"
});
formatter.result({
  "duration": 9372237804,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_results_are_listed_in_the_page_in_the_correct_order()"
});
formatter.result({
  "duration": 3173632287,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_can_sort_the_results_by_Highest_Price()"
});
formatter.result({
  "duration": 31199683511,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_results_are_listed_in_the_page_in_the_correct_order()"
});
formatter.result({
  "duration": 974193071,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_can_filter_the_results_by_Buy_it_now()"
});
formatter.result({
  "duration": 2683214924,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.all_the_results_shown_in_the_page_have_the_Buy_it_now_tag()"
});
formatter.result({
  "duration": 1871859467,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search per category",
  "description": "",
  "id": "search-results.-where-one-can-sort,-filter-and-see-details-of-resulting-products.;search-per-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@002"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am a non-registered customer",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I navigate to www.ebay.co.uk",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter a search item and select a specific Category",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I get a list of matching results",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I can verify that the results shown as per the the selected category",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.i_am_a_non_registered_customer()"
});
formatter.result({
  "duration": 4245159785,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_navigate_to_www_ebay_co_uk()"
});
formatter.result({
  "duration": 2077881814,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_enter_a_search_item_and_select_a_specific_Category()"
});
formatter.result({
  "duration": 8552281044,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_get_a_list_of_matching_results()"
});
formatter.result({
  "duration": 2551695793,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_can_verify_that_the_results_shown_as_per_the_the_selected_category()"
});
formatter.result({
  "duration": 138599913,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Search and navigate through results pages",
  "description": "",
  "id": "search-results.-where-one-can-sort,-filter-and-see-details-of-resulting-products.;search-and-navigate-through-results-pages",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@003"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am a non-registered customer",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I navigate to www.ebay.co.uk",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I search for an item",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I get a list of matching results",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "the results show more than one page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user can navigate through the pages to continue looking at the items",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_am_a_non_registered_customer()"
});
formatter.result({
  "duration": 4850624671,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_navigate_to_www_ebay_co_uk()"
});
formatter.result({
  "duration": 2945272606,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_search_for_an_item()"
});
formatter.result({
  "duration": 7168399765,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_get_a_list_of_matching_results()"
});
formatter.result({
  "duration": 1460474408,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_results_show_more_than_one_page()"
});
formatter.result({
  "duration": 22917677,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_can_navigate_through_the_pages_to_continue_looking_at_the_items()"
});
formatter.result({
  "duration": 19282600750,
  "status": "passed"
});
});