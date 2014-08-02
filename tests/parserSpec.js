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

        it('should parse a basic select star from statement', function () {
            var parser = new Parser;
            var mysql = parser.parse('SELECT * FROM table_1');
            expect(mysql.columns).toEqual(['*']);
            expect(mysql.table).toBe('table_1');
        });
        it('should be able to have multiple columns', function () {
            var parser = new Parser;
            var mysql = parser.parse('SELECT col1, col2 FROM table_1');
            expect(mysql.columns).toEqual(['col1', 'col2']);
        });
        it('should handle complex select statements', function () {
            var parser = new Parser;
            var mysql = parser.parse('SELECT IFNULL(col1, "apple") AS col1, col2 FROM table');
            expect(mysql.columns).toEqual(['IFNULL(col1, "apple") AS col1', 'col2']);
        });
    });
});

describe('MySQL object', function () {
    it('should be defined', function () {
        expect(MySQL).toBeDefined();
    });
});
