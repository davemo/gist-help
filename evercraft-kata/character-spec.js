/*globals describe, beforeEach, afterEach, it, expect, Character */
describe("EverCraft", function () {
    "use strict";
    describe("Characters", function () {
        it("should be defined", function () {
            expect(Character).toBeDefined();
        });
        describe("Attributes", function () {
            var character;
            
            beforeEach(function () {
                character = new Character({"name": "Balrock", "alignment": "Good"});
            });
            afterEach(function () {
            });

            describe("#Name", function () {
                it("should be defined", function () {
                    expect(character.getName).toBeDefined();
                });
                it("should allow for me to set the character's name to 'Balrock'", function () {
                    expect(character.getName()).not.toBeNull();
                });
                it("should not allow for me to create a character without a name", function () {
                    character = new Character();
                    expect(character.isValid()).toBe(false);
                });
                it("should allow for me to retrieve the character's name", function () {
                    expect(character.getName()).toEqual("Balrock");
                });
            });
            describe("#Alignment", function () {
                it("should be defined", function () {
                    expect(character.getAlignment).toBeDefined();
                });
                it("should allow for me to set the character's alignment to 'Good'", function () {
                    expect(character.getAlignment()).toEqual("Good");
                });
                it("should allow for me to set the character's alignment to 'Evil'", function () {
                    character = new Character({"name": "Balrock", "alignment": "Evil"});
                    expect(character.getAlignment()).toEqual("Evil");
                });
                it("should allow for me to set the character's alignment to 'Neutral'", function () {
                    character = new Character({"name": "Balrock", "alignment": "Neutral"});
                    expect(character.getAlignment()).toEqual("Neutral");
                });
                it("should not allow for me to create a character with an alignment set to 'Nonsense'", function () {
                    character = new Character({"name": "Balrock", "alignment": "Nonsense"});
                    expect(character.isValid()).toBe(false);
                });
            });
        });
    });
});