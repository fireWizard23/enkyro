import {Validators} from '../src/index';
import { expect } from 'chai';

describe('Validators', () => {
    describe('MinFn', () => {
        describe("minNumber(5)", () => {
            const min = Validators.minNumber(5);
        
            it("should return true when >= 5", () => {
                expect(min(5)).to.equal(true, "min(5) === true");
                expect(min(125)).to.equal(true, "min(5) === true");
            });
        
            it("should return false when < 4", () => {
                expect(min(4)).to.equal(false, "min(4) === false");
                expect(min(-124)).to.equal(false, "min(4) === false");
            })
        
        });

        describe('minChar(5)', () => {
            const min = Validators.minChar(5);
            it('should be true when length is >= 5', () => {
                expect(min("12345")).to.equal(true);
                expect(min("123421215")).to.equal(true);
                expect(min("12342121lsakdfasldflaskd5")).to.equal(true);
            });

            it('should be false when length < 5', () => {
                expect(min("1")).to.equal(false);
                expect(min("121")).to.equal(false);
                expect(min("alsk")).to.equal(false);
            });

        });

        describe('minArrayLength(5)', () => {
            const min = Validators.minArrayLength(5);
            it('should be true when the length is 5', () => {
                expect(min([1,2,3,4,5])).equal(true);
                expect(min([1,2, "1", false, 1])).equal(true);
            });

            it('should be false when the length is < 5', () => {
                expect(min([1,2,5])).equal(false);
                expect(min([1,"1", false])).equal(false);
                expect(min([])).equal(false);
            });

        });

    });

    describe('MaxFn', () => {
        describe('maxNumber', () => {
            const max = Validators.maxNumber(10);
            it('should be true when number < 10', () => {
                expect(max(9)).to.equal(true);
                expect(max(-9)).to.equal(true);
                expect(max(-19)).to.equal(true);
            });
            it('should be false when number >= 10', () => {
                expect(max(19)).to.equal(false);
                expect(max(219)).to.equal(false);
                expect(max(10)).to.equal(false);

            });
        });

        describe('maxChar', () => {
            const max = Validators.maxChar(10);     
            it('should be true when length is < 10', () => {
                expect(max('')).to.equal(true);
                expect(max('adasd')).to.equal(true);
                expect(max('123456789')).to.equal(true);
            });

            it('should be false when length is >= 10', () => {
                expect(max('1234567890')).to.equal(false);
                expect(max('09123lkjsadkl')).to.equal(false);
                expect(max('lkasdnf alsdjflaskd')).to.equal(false);
            });


        });

    });


});

// describe('Validators.max(2)', () => {
//     const maxOf2 = Validators.max(2);
    

//     it("should return true", () => {
//         expect(maxOf2(1)).to.equal(true);
//         expect(maxOf2("1")).to.equal(true);
//         expect(maxOf2([1])).to.equal(true);
//     })


//     it("should return false", () => {

//         expect(maxOf2(null as any)).to.equal(false);
//         expect(maxOf2(2)).to.equal(false);
//         expect(maxOf2("21")).to.equal(false);
//         expect(maxOf2([1, 2, 3])).to.equal(false);

//     });


// }) ;

// describe('Validators.range(5, 12)', () => {
//     const inRange = Validators.range(5, 12);

//     it('should return true', () => {
//         expect(inRange(5)).equal(true);
//         expect(inRange([1,2,3,4,5])).equal(true);
//         expect(inRange("1234567")).equal(true);
//     });

//     it("should return false", () => {
//         expect(inRange(null as any)).equal(false)
//     });

// });

// describe("Validators.notNull", () => {
//     const {notNull: required} = Validators;

//     it("should return true", () => {
//         expect(required({})).to.equal(true);
//     });

//     it("should return false", () => {
//         expect(required(null)).to.equal(false);
//     })


// }) 

// describe('Validators.regex(/username/)', () => {

//     const test = Validators.regex(/^[A-Za-z][A-Za-z0-9_]{7,29}$/);

//     it('should return false', () => {
//         expect(test(null as any)).equal(false);
//         expect(test("")).equal(false, 'it should be false becaues it is test("")');
//         expect(test("Richard232!")).equal(false)
//     });


//     it("should return true", () => {
//         expect(test("Richard232")).equal(true)
//     })
// });


