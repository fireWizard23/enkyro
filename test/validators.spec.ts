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
        
            describe("should return false when:", () => {
                it("< 5", () => {
                    expect(min(4)).to.equal(false, "min(4) === false");
                    expect(min(-124)).to.equal(false, "min(4) === false");
                })
                itIsNull(min);

                it("an array", () => {expect(min([] as any)).equal(false)});


            })
        
        });

        describe('minChar(5)', () => {
            const min = Validators.minChar(5);
            it('should be true when length is >= 5', () => {
                expect(min("12345")).to.equal(true);
                expect(min("123421215")).to.equal(true);
                expect(min("12342121lsakdfasldflaskd5")).to.equal(true);
            });

            describe('should return false when', () => {
                it("length < 5", () => {
                    expect(min("")).to.equal(false);
                    expect(min("alsk")).to.equal(false);
                })
                itIsNull(min);
                it("it is array", () => expect(min([""] as any)).equal(false));
                it("it is {}", () => expect(min({} as any)).equal(false));
            });

        });

        describe('minArrayLength(5)', () => {
            const min = Validators.minArrayLength(5);

            it('should be true when the length is 5', () => {
                expect(min([1,2,3,4,5])).equal(true);
                expect(min([1,2, "1", false, 1])).equal(true);
            });

            describe('should be false when', () => {
                it("the length is < 5", () => {
                    expect(min([1,2,5])).equal(false);
                    expect(min([])).equal(false);
                })

                itIsNull(min);
                it("it is {}", () => expect(min({} as any)).equal(false))
                it("it is string", () => expect(min("alksjd" as any)).equal(false))

            });

        });

    });

    describe('MaxFn', () => {
        describe('maxNumber(10)', () => {
            const max = Validators.maxNumber(10);

            it('should be true when number < 10', () => {
                expect(max(9)).to.equal(true);
                expect(max(-9)).to.equal(true);
                expect(max(-19)).to.equal(true);
            });

            describe('should be false when', () => {
                it("number >= 10", () => {
                    expect(max(19)).to.equal(false);
                    expect(max(219)).to.equal(false);
                    expect(max(10)).to.equal(false);
                })

                itIsNull(max);
                itIsObject(max)
                itIsArray(max)

            });
        });

        describe('maxChar(10)', () => {
            const max = Validators.maxChar(10);     
            it('should be true when length is < 10', () => {
                expect(max('')).to.equal(true);
                expect(max('adasd')).to.equal(true);
                expect(max('123456789')).to.equal(true);
            });

            describe('should be false when:', () => {
                it("length is >= 10", () => {
                    expect(max('1234567890')).to.equal(false);
                    expect(max('09123lkjsadkl')).to.equal(false);
                    expect(max('lkasdnf alsdjflaskd')).to.equal(false);
                })
                
                itIsNull(max);
                itIsObject(max)
                itIsArray(max)
                
                
            });
            
        });

        describe('maxArrayLength(10)', () => {
            const max = Validators.maxArrayLength(10);

            it('should be true when length is < 10', () => {
                expect(max([1])).equal(true);
                expect(max([1,2,3,3,4,31,32])).equal(true);
            });

            describe('should be false when ', () => {
                it("length is >= 10", () => {
                    expect(max([1,2,3,4,5,6,7,8,9,10])).equal(false);
                    expect(max(new Array(10).fill("sladkjf"))).equal(false);
                })
                itIsNull(max);
                itIsObject(max)
                it('it is string', () => expect(max("alksjdfs" as any)).equal(false));


            });

        });

    });

    describe("RangeFn", () => {
        describe("rangeNumber(5, 20)", () => {
            const range = Validators.rangeNumber(5, 20);
            it("should return true when number is between 5-19", () => {
                expect(range(9)).equal(true);
                expect(range(19)).equal(true);
                expect(range(5)).equal(true);
            });

            describe("should return false when", () => {
                it("< 5", () => expect(range(3)).equal(false));
                it("it is -12", () => expect(range(-12)).equal(false));
                it("it is 102", () => expect(range(102)).equal(false));
                itIsNull(range);
                itIsArray(range);
                itIsObject(range)

            })
        });

        describe("rangeChar(5, 20)", () => {
            const range = Validators.rangeChar(5, 20);
            it("should return true when string length is between 5-19", () => {
                expect(range("123456789")).equal(true);
                expect(range("12830812jksad19")).equal(true);
                expect(range("1234557891234567890")).equal(true);
            });

            describe("should return false when", () => {
                it("< 5", () => expect(range("12")).equal(false));
                it("it is empty", () => expect(range("")).equal(false));
                it("it is 20 chars", () => expect(range("12345678901234567890")).equal(false));
                itIsNull(range);
                itIsObject(range)
                itIsArray(range);

            })
        });


        describe("rangeArrayLength(5, 20)", () => {
            const range = Validators.rangeArrayLength(5, 20);
            it("should return true when Array length is between 5-19", () => {
                expect(range(new Array(5).fill(5))).equal(true);
                expect(range([1,2, "1", "3", 1, 32, false])).equal(true);
                expect(range(new Array(19).fill(true))).equal(true);
            });

            describe("should return false when", () => {
                it("length < 5", () => expect(range([1,2])).equal(false));
                it("it is empty", () => expect(range([])).equal(false));
                it("it's length is 20", () => expect(range(new Array(20).fill(20))).equal(false));
                itIsNull(range);
                itIsObject(range);
            })
        });

    })

    describe("NotNullFn", () => {
        const fn = Validators.notNull;
        it("should return true when not null", () => {
            expect(fn([])).equal(true);
            expect(fn({})).equal(true)
            expect(fn("")).equal(true)
        })
        it("should return false when it is null", () => {
            itIsNull(fn)
        })
    })

    describe("RegexFn", () => {
        const fn = Validators.regex(/^[A-Za-z][A-Za-z0-9_]{8,29}$/);
        it("should return true when it is valid", () => {
            expect(fn("Laasya_Setty"))
        })

        describe("it should return false when", () => {
            it("it is empty", () => {
                expect(fn("")).equal(false);
            })
            it("it is __Rich___", () => {
                expect(fn("__Rich__")).equal(false);
            })
            const char20 = "Laasya_SettyLaasya_SettyLaasya_Setty"
            it(`it is ${char20}`, () => expect(fn(char20)).equal(false))
            itIsNull(fn);
            itIsArray(fn);
            itIsObject(fn);
        })

    })

    describe("isNumber", () => {
        const fn = Validators.isNumber;

        it("should be true when 1", () => {
            expect(fn(1)).equal(true);
        })
        describe("should be false when", () => {
            it("it is string", () => expect(fn("")))
            itIsArray(fn);
            itIsNull(fn);
            itIsObject(fn);
        })

    });

    
    describe("isObject", () => {
        const fn = Validators.isObject;

        it("should be true when it is an object", () => {
            expect(fn({})).equal(true);
        })
        describe("should be false when", () => {
            it("is a number", () => expect(fn(1)).equal(false));
            it("is a string", () => expect(fn("alksdf")).equal(false));
        })

    });
    

    describe("isBoolean", () => {
        const fn = Validators.isBoolean;

        it("should be true when it is true", () => {
            expect(fn(true)).equal(true);
        })
        describe("should be false when", () => {
            it("is a number", () => expect(fn(1)).equal(false));
            it("is a string", () => expect(fn("alksdf")).equal(false));
            itIsNull(fn);
            itIsArray(fn);
            itIsObject(fn);
        })

    });

    describe("isArray", () => {
        const fn = Validators.isArray;

        it("should be true when it is []]", () => {
            expect(fn([])).equal(true);
        })
        describe("should be false when", () => {
            it("is a number", () => expect(fn(1)).equal(false));
            it("is a string", () => expect(fn("alksdf")).equal(false));
            itIsNull(fn);
            itIsObject(fn);
        })

    });

});





function itIsNull(cb: (t: any) => boolean, desc?: string) : void{
    it(desc || "is null", () => {
        expect(cb(null)).equal(false);
    })
}

function itIsObject(cb: (t: any) => boolean, desc?: string) : void {
    it(desc || "is {}", () => {
        expect(cb({})).equal(false);
    })
}

function itIsArray(cb: (t: any) => boolean, desc?: string) : void {
    it(desc || "is []", () => {
        expect(cb([])).equal(false);
    })
}

