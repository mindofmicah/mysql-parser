describe('Parser Class', function () {
    it('should exist', function () {
        expect(Parser).toBeDefined();
    }) 
    describe('parse method', function () {
        it('should exist', function () {
            var parser = new Parser;
            expect(parser.parse).toBeDefined();
        })
        it('should return a MySQL object', function () {
            var parser = new Parser;
            expect(parser.parse() instanceof MySQL).toBe(true);
        });
    });
});

describe('MySQL object', function () {
    it('should be defined', function () {
        expect(MySQL).toBeDefined();
    });
});
