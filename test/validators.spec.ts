import {Validators} from '../src/index';
import { expect } from 'chai';

describe("Validators.min(5)", () => {
    const min = Validators.min(5);

    it("should return true", () => {
        expect(min(5)).to.equal(true, "min(5) === true");
        expect(min("12345")).to.equal(true, `min("1, 2, 3, 4, 5") === true`)
        expect(min([1, 2, 3, 4, false])).to.equal(true, `min("[1, 2, 3, 4, false]") === true`)
    });

    it("should return false", () => {
        expect(min(4)).to.equal(false, "min(4) === false");
        expect(min("1234")).to.equal(false, `min("1234") === false`)
        expect(min([1, 2, 3, 4])).to.equal(false, `min("[1, 2, 3, 4]") === false`)
    })



});

describe('Validators.max(2)', () => {
    const maxOf2 = Validators.max(2);
    

    it("should return true", () => {
        expect(maxOf2(1)).to.equal(true);
        expect(maxOf2("1")).to.equal(true);
        expect(maxOf2([1])).to.equal(true);
    })


    it("should return false", () => {

        expect(maxOf2(null as any)).to.equal(false);
        expect(maxOf2(2)).to.equal(false);
        expect(maxOf2("21")).to.equal(false);
        expect(maxOf2([1, 2, 3])).to.equal(false);

    });


}) ;

describe("Validators.required(1)", () => {
    const {notNull: required} = Validators;

    it("should return true", () => {
        expect(required({})).to.equal(true);
    });

    it("should return false", () => {
        expect(required(null)).to.equal(false);
    })


}) 

describe('Validators.regex()', () => {
    const test = Validators.regex(/^[A-Za-z][A-Za-z0-9_]{7,29}$/);

    it('should return false', () => {
        expect(test(null as any)).equal(false);
        expect(test("")).equal(false, 'it should be false becaues it is test("")');
        expect(test("Richard232!")).equal(false)
    });

    it("should return true", () => {
        expect(test("Richard232")).equal(true)
    })
});


