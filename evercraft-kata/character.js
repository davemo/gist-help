/*jslint nomen: true, regexp: true */
/*globals window, document, Backbone, _ */

var Character = Backbone.Model.extend({
	alignments: {
		"Evil": "Evil",
		"Neutral": "Neutral",
		"Good": "Good"
	},
	validate: function (attrs) {
		"use strict";

		if (!(/\S/.test(attrs.name))) {
			return "You must set a name for this character";
		}

		if (!!(/\S/.test(attrs.alignment)) || !this.alignments.hasOwnProperty(attrs.alignment)) {
			return "Invalid alignment given";
		}
	},
	getName: function () {
		"use strict";
		return this.get("name");
	},
	getAlignment: function () {
		"use strict";
		return this.get("alignment");
	},
	initialize: function () {
		"use strict";

		this.bind("error", function (model, error) {
			window.console.log("Error: " + error);
			model = null;
		});

		var error = this.validate(this.attributes);
		if (error) {
			this.trigger('error', this, error);
		}
	}
});